"use client";

import { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, Plane } from 'lucide-react';

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  carModel: string;
  flightNumber: string;
  notes: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pickupLocation: 'Perth Airport T1',
    dropoffLocation: 'Perth Airport T1',
    pickupDate: '',
    pickupTime: '10:00',
    returnDate: '',
    returnTime: '10:00',
    carModel: 'Toyota RAV4',
    flightNumber: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(`✅ Booking request sent! Reference: ${result.bookingReference}. Check your email for confirmation.`);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          pickupLocation: 'Perth Airport T1',
          dropoffLocation: 'Perth Airport T1',
          pickupDate: '',
          pickupTime: '10:00',
          returnDate: '',
          returnTime: '10:00',
          carModel: 'Toyota RAV4',
          flightNumber: '',
          notes: ''
        });
      } else {
        setSubmitMessage(`❌ Error: ${result.error || 'Failed to submit booking'}`);
      }
    } catch (error) {
      setSubmitMessage('❌ Network error. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate next 30 days for date picker
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 365);

  const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Book Your AutoTrip</h2>
        <p className="text-slate-600">Complete this form and we'll confirm availability within 2 hours.</p>
      </div>

      {submitMessage && (
        <div className={`mb-6 p-4 rounded-lg ${submitMessage.includes('✅') ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <User className="inline h-4 w-4 mr-1" /> First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              placeholder="John"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <User className="inline h-4 w-4 mr-1" /> Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              placeholder="Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Mail className="inline h-4 w-4 mr-1" /> Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Phone className="inline h-4 w-4 mr-1" /> Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              placeholder="+61 400 000 000"
            />
          </div>
        </div>

        {/* Pickup & Return */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" /> Pickup Location *
            </label>
            <select
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            >
              <option value="Perth Airport T1">Perth Airport T1 (International)</option>
              <option value="Perth Airport T2">Perth Airport T2 (Domestic)</option>
              <option value="Perth Airport T3">Perth Airport T3 (Domestic)</option>
              <option value="Perth Airport T4">Perth Airport T4 (Regional)</option>
              <option value="Perth City">Perth City Office</option>
              <option value="Fremantle">Fremantle Office</option>
              <option value="Hotel Delivery">Hotel Delivery (Perth CBD)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <MapPin className="inline h-4 w-4 mr-1" /> Return Location *
            </label>
            <select
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            >
              <option value="Perth Airport T1">Perth Airport T1 (International)</option>
              <option value="Perth Airport T2">Perth Airport T2 (Domestic)</option>
              <option value="Perth Airport T3">Perth Airport T3 (Domestic)</option>
              <option value="Perth Airport T4">Perth Airport T4 (Regional)</option>
              <option value="Perth City">Perth City Office</option>
              <option value="Fremantle">Fremantle Office</option>
            </select>
          </div>
        </div>

        {/* Dates & Times */}
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" /> Pickup Date *
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
              min={formatDateForInput(today)}
              max={formatDateForInput(maxDate)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" /> Pickup Time *
            </label>
            <select
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            >
              {Array.from({ length: 13 }, (_, i) => {
                const hour = 8 + i; // 8 AM to 8 PM
                return [`${hour.toString().padStart(2, '0')}:00`, `${hour.toString().padStart(2, '0')}:30`];
              }).flat().map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" /> Return Date *
            </label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
              min={formData.pickupDate || formatDateForInput(today)}
              max={formatDateForInput(maxDate)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" /> Return Time *
            </label>
            <select
              name="returnTime"
              value={formData.returnTime}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            >
              {Array.from({ length: 13 }, (_, i) => {
                const hour = 8 + i;
                return [`${hour.toString().padStart(2, '0')}:00`, `${hour.toString().padStart(2, '0')}:30`];
              }).flat().map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Vehicle & Flight */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Preferred Vehicle *
            </label>
            <select
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            >
              <option value="Toyota Yaris">Toyota Yaris (Economy)</option>
              <option value="Hyundai i30">Hyundai i30 (Compact)</option>
              <option value="Toyota Camry">Toyota Camry (Mid-size)</option>
              <option value="Toyota RAV4">Toyota RAV4 (SUV)</option>
              <option value="Kia Carnival">Kia Carnival (People Mover)</option>
              <option value="Not Sure">Not Sure - Recommend Best Option</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Plane className="inline h-4 w-4 mr-1" /> Flight Number (Optional)
            </label>
            <input
              type="text"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              placeholder="QF123"
            />
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Special Requests or Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            placeholder="Child seats, GPS, additional driver, etc."
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-slate-900 transition disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? 'Processing...' : 'Submit Booking Request'}
          </button>
          <p className="text-sm text-slate-500 mt-3 text-center">
            By submitting, you agree to our Terms & Conditions. We'll contact you within 2 business hours.
          </p>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
          <div className="text-center">
            <div className="font-bold text-primary">1. Submit Request</div>
            <p>Fill this form - no payment required yet</p>
          </div>
          <div className="text-center">
            <div className="font-bold text-primary">2. We Confirm</div>
            <p>Check availability & send confirmation</p>
          </div>
          <div className="text-center">
            <div className="font-bold text-primary">3. Pay & Book</div>
            <p>Secure payment to confirm your booking</p>
          </div>
        </div>
      </div>
    </div>
  );
}