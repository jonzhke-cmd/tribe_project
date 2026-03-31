// Next.js API route to handle the booking submission securely
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// We'll require these environment variables on Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const resendApiKey = process.env.RESEND_API_KEY || '';

// Initialize clients conditionally so the build doesn't fail if env vars are missing
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Save to Supabase
    if (supabase) {
      const { error: dbError } = await supabase
        .from('bookings')
        .insert([
          {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            pickup_location: data.pickupLocation,
            dropoff_location: data.dropoffLocation,
            pickup_date: data.pickupDate,
            pickup_time: data.pickupTime,
            return_date: data.returnDate,
            return_time: data.returnTime,
            vehicle_id: data.selectedVehicleId,
            flight_number: data.flightNumber,
            notes: data.notes,
            status: 'pending'
          }
        ]);

      if (dbError) {
        console.error('Supabase Error:', dbError);
        return NextResponse.json({ error: 'Failed to save booking to database' }, { status: 500 });
      }
    } else {
      console.warn('Supabase keys missing, skipping database insert.');
    }

    // 2. Send Email via Resend
    if (resend) {
      await resend.emails.send({
        from: 'AutoTrip Reservations <bookings@autotrip.com.au>', // Ensure this domain is verified in Resend
        to: [data.email, 'enquiry@autotrip.com.au'], // Send to customer and admin
        subject: `AutoTrip Booking Request: ${data.selectedVehicleId}`,
        html: `
          <h1>New Booking Request</h1>
          <p>Hi ${data.firstName},</p>
          <p>Thank you for choosing AutoTrip. We have received your booking request for the <strong>${data.selectedVehicleId}</strong>.</p>
          <h3>Trip Details:</h3>
          <ul>
            <li><strong>Pickup:</strong> ${data.pickupLocation} on ${data.pickupDate} at ${data.pickupTime}</li>
            <li><strong>Return:</strong> ${data.dropoffLocation} on ${data.returnDate} at ${data.returnTime}</li>
            ${data.flightNumber ? `<li><strong>Flight Number:</strong> ${data.flightNumber}</li>` : ''}
          </ul>
          <p>Our team is reviewing availability and will contact you shortly to confirm.</p>
          <br/>
          <p>AutoTrip Perth</p>
        `
      });
    } else {
      console.warn('Resend key missing, skipping email notification.');
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
