// Enhanced Booking API with CRM integration
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const resendApiKey = process.env.RESEND_API_KEY || '';
const adminEmail = process.env.ADMIN_EMAIL || 'enquiry@autotrip.com.au';
const noReplyEmail = process.env.NO_REPLY_EMAIL || 'bookings@autotrip.com.au';

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Calculate total days and amount
    const pickupDate = new Date(data.pickupDate);
    const returnDate = new Date(data.returnDate);
    const totalDays = Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24));
    const dailyRate = data.dailyRate || 65.00; // Default rate
    const subtotal = dailyRate * totalDays;
    const taxAmount = subtotal * 0.10; // 10% GST
    const totalAmount = subtotal + taxAmount;

    let bookingId = null;
    let bookingRef = null;

    // 1. Save or find customer
    let customerId = null;
    if (supabase) {
      // Check if customer exists
      const { data: existingCustomer } = await supabase
        .from('customers')
        .select('id')
        .eq('email', data.email)
        .single();

      if (existingCustomer) {
        customerId = existingCustomer.id;
        // Update customer info
        await supabase
          .from('customers')
          .update({
            first_name: data.firstName,
            last_name: data.lastName,
            phone: data.phone,
            updated_at: new Date().toISOString()
          })
          .eq('id', customerId);
      } else {
        // Create new customer
        const { data: newCustomer, error: customerError } = await supabase
          .from('customers')
          .insert([
            {
              email: data.email,
              first_name: data.firstName,
              last_name: data.lastName,
              phone: data.phone
            }
          ])
          .select('id')
          .single();

        if (customerError) throw customerError;
        customerId = newCustomer.id;
      }

      // 2. Create booking
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert([
          {
            customer_id: customerId,
            car_id: data.carId,
            customer_name: `${data.firstName} ${data.lastName}`,
            customer_email: data.email,
            customer_phone: data.phone,
            pickup_location: data.pickupLocation,
            dropoff_location: data.dropoffLocation,
            pickup_date: data.pickupDate,
            return_date: data.returnDate,
            flight_number: data.flightNumber,
            special_requests: data.notes,
            daily_rate: dailyRate,
            total_days: totalDays,
            subtotal: subtotal,
            tax_amount: taxAmount,
            total_amount: totalAmount,
            status: 'pending'
          }
        ])
        .select('id, booking_reference')
        .single();

      if (bookingError) throw bookingError;
      
      bookingId = booking.id;
      bookingRef = booking.booking_reference;

      // 3. Log email attempt
      await supabase
        .from('email_logs')
        .insert([
          {
            booking_id: bookingId,
            email_type: 'confirmation',
            recipient_email: data.email,
            subject: `AutoTrip Booking Request: ${bookingRef}`,
            status: 'sent'
          }
        ]);
    }

    // 4. Send emails
    if (resend && bookingRef) {
      // Customer confirmation email
      await resend.emails.send({
        from: `AutoTrip Reservations <${noReplyEmail}>`,
        to: data.email,
        subject: `Booking Request Received: ${bookingRef}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #1e40af;">Booking Request Received</h1>
            <p>Hi ${data.firstName},</p>
            <p>Thank you for choosing <strong>AutoTrip Perth</strong>. We have received your booking request and will confirm availability shortly.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #334155; margin-top: 0;">Booking Details</h3>
              <p><strong>Booking Reference:</strong> ${bookingRef}</p>
              <p><strong>Vehicle:</strong> ${data.carModel || 'Selected Vehicle'}</p>
              <p><strong>Pickup:</strong> ${data.pickupLocation} on ${formatDate(data.pickupDate)} at ${data.pickupTime}</p>
              <p><strong>Return:</strong> ${data.dropoffLocation} on ${formatDate(data.returnDate)} at ${data.returnTime}</p>
              <p><strong>Duration:</strong> ${totalDays} day${totalDays > 1 ? 's' : ''}</p>
              <p><strong>Estimated Total:</strong> $${totalAmount.toFixed(2)} (incl. GST)</p>
              ${data.flightNumber ? `<p><strong>Flight Number:</strong> ${data.flightNumber}</p>` : ''}
            </div>
            
            <p><strong>What happens next?</strong></p>
            <ol>
              <li>Our team will check vehicle availability (within 2 business hours)</li>
              <li>We'll send a confirmation email with payment instructions</li>
              <li>Once payment is received, your booking will be confirmed</li>
            </ol>
            
            <p>Need to make changes? Reply to this email or call us at +61 8 1234 5678.</p>
            
            <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <strong>AutoTrip Perth</strong><br>
              Perth Airport & City Locations<br>
              📞 +61 8 1234 5678<br>
              📧 ${adminEmail}
            </p>
          </div>
        `
      });

      // Admin notification email
      await resend.emails.send({
        from: `AutoTrip Bookings <${noReplyEmail}>`,
        to: adminEmail,
        subject: `📋 New Booking Request: ${bookingRef}`,
        html: `
          <div style="font-family: Arial, sans-serif;">
            <h2 style="color: #1e40af;">New Booking Request</h2>
            <p><strong>Booking Reference:</strong> ${bookingRef}</p>
            <p><strong>Customer:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Vehicle:</strong> ${data.carModel || 'Not specified'}</p>
            <p><strong>Pickup:</strong> ${data.pickupLocation} on ${formatDate(data.pickupDate)} ${data.pickupTime}</p>
            <p><strong>Return:</strong> ${data.dropoffLocation} on ${formatDate(data.returnDate)} ${data.returnTime}</p>
            <p><strong>Duration:</strong> ${totalDays} days</p>
            <p><strong>Estimated Revenue:</strong> $${totalAmount.toFixed(2)}</p>
            ${data.flightNumber ? `<p><strong>Flight:</strong> ${data.flightNumber}</p>` : ''}
            ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ''}
            
            <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 5px;">
              <p><strong>Action Required:</strong> Check vehicle availability and contact customer within 2 hours.</p>
            </div>
            
            <p style="margin-top: 30px;">
              <a href="https://autotrip-five.vercel.app/admin" style="background: #1e40af; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                View in CRM Dashboard
              </a>
            </p>
          </div>
        `
      });
    }

    return NextResponse.json({ 
      success: true, 
      bookingReference: bookingRef,
      bookingId: bookingId,
      message: 'Booking request received. Check your email for confirmation.'
    });
    
  } catch (error) {
    console.error('Booking API Error:', error);
    
    // Log error to database if possible
    if (supabase) {
      await supabase
        .from('email_logs')
        .insert([
          {
            email_type: 'admin_alert',
            recipient_email: adminEmail,
            subject: 'Booking System Error',
            status: 'failed',
            error_message: error instanceof Error ? error.message : 'Unknown error'
          }
        ]);
    }
    
    return NextResponse.json({ 
      error: 'Failed to process booking request',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-AU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}