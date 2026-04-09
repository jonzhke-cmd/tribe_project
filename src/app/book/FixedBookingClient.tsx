"use client";

import { useState } from "react";

export default function FixedBookingFlow() {
  const [step, setStep] = useState(1);
  
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Book Your Car</h1>
            <p className="text-slate-600">Simple 3-step booking process</p>
          </div>
          
          {/* Progress */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="text-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${s <= step ? 'bg-primary text-white' : 'bg-slate-200 text-slate-400'}`}>
                  {s}
                </div>
                <div className="text-sm">
                  {s === 1 && "Details"}
                  {s === 2 && "Vehicle"}
                  {s === 3 && "Confirm"}
                </div>
              </div>
            ))}
          </div>
          
          {/* Step Content */}
          <div className="space-y-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Your Details</h2>
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl" />
                  <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
                  <input type="tel" placeholder="Phone" className="w-full p-3 border rounded-xl" />
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Choose Vehicle</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Economy', 'Compact', 'SUV', 'Luxury'].map((type) => (
                    <button key={type} className="p-4 border rounded-xl text-center hover:border-primary">
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Confirmation</h2>
                <p className="text-slate-600 mb-4">Review your booking details</p>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p>Ready to submit your booking request.</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border rounded-xl"
              >
                Back
              </button>
            )}
            
            {step < 3 ? (
              <button 
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 bg-primary text-white rounded-xl ml-auto"
              >
                Next
              </button>
            ) : (
              <button className="px-6 py-2 bg-green-600 text-white rounded-xl ml-auto">
                Submit Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}