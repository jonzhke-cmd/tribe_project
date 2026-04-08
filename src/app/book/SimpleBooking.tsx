"use client";

import { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, Car, CheckCircle2 } from 'lucide-react';

export default function SimpleBooking() {
  const [formData, setFormData] = useState({
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
    carType: 'Hyundai i30',
    flightNumber: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedVehicleId: formData.carType
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit booking');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an issue submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Booking Request Sent!</h1>
          <p className="text-lg text-slate-600 mb-8">
            Thank you, {formData.firstName}. We've received your booking request for the {formData.carType}. 
            One of our team members will review your details and contact you shortly to confirm availability.
          </p>
          <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-slate-900 mb-3">Booking Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-slate-500">Vehicle:</span> {formData.carType}</div>
              <div><span className="text-slate-500">Pickup:</span> {formData.pickupLocation}</div>
              <div><span className="text-slate-500">Dates:</span> {formData.pickupDate} to {formData.returnDate}</div>
              <div><span className="text-slate-500">Contact:</span> {formData.email}</div>
            </div>
          </div>
          <a 
            href="/" 
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-900 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your AutoTrip</h1>
          <p className="text-lg text-slate-600">Complete this simple form and we'll confirm availability within 2 hours.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <User className="inline h-4 w-4 mr-2" /> First Name *
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
                  <User className="inline h-4 w-4 mr-2" /> Last Name *
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
                  <Mail className="inline h-4 w-4 mr-2" /> Email *
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
                  <Phone className="inline h-4 w-4 mr-2" /> Phone *
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

            {/* Location & Dates */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-2" /> Pickup Location *
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
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-2" /> Return Location *
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

            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-2" /> Pickup Date *
                </label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-2" /> Pickup Time *
                </label>
                <select
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                >
                  <option value="08:00">08:00 AM</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-2" /> Return Date *
                </label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-2" /> Return Time *
                </label>
                <select
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                >
                  <option value="08:00">08:00 AM</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>
            </div>

            {/* Vehicle Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Car className="inline h-4 w-4 mr-2" /> Preferred Vehicle *
              </label>
              <select
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              >
                <option value="MG 3 (Auto)">MG 3 (Auto) - Economy</option>
                <option value="Hyundai Accent (Auto)">Hyundai Accent (Auto) - Compact</option>
                <option value="Hyundai i30 (Auto)">Hyundai i30 (Auto) - Mid-size</option>
                <option value="MG ZS (Auto)">MG ZS (Auto) - SUV</option>
                <option value="Nissan X-Trail">Nissan X-Trail - Family SUV</option>
                <option value="Kia Carnival (Auto)">Kia Carnival (Auto) - People Mover</option>
              </select>
            </div>

            {/* Flight & Notes */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Flight Number (Optional)
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

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Special Requests
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
            </div>

            {/* Submit Button */}
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
      </div>
    </div>
  );
}