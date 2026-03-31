"use client";

import { useState, useEffect } from "react";
import { 
  CalendarDays, 
  Users, 
  CarFront, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Plane, 
  ChevronRight,
  ChevronLeft,
  Luggage,
  ShieldCheck,
  Star,
  Info
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/app/data/fleet";

type BookingData = {
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  passengers: string;
  isAirportTransfer: boolean;
  flightNumber: string;
  selectedVehicleId: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
};

const INITIAL_DATA: BookingData = {
  pickupLocation: "Perth Airport (T1-T4)",
  dropoffLocation: "Perth Airport (T1-T4)",
  pickupDate: "",
  pickupTime: "10:00",
  returnDate: "",
  returnTime: "10:00",
  passengers: "2",
  isAirportTransfer: true,
  flightNumber: "",
  selectedVehicleId: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: "",
};

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateData = (fields: Partial<BookingData>) => {
    setData(prev => {
      const newData = { ...prev, ...fields };
      
      // If pickup date or return date changes, ensure return is not before pickup
      if (fields.pickupDate && newData.returnDate && newData.returnDate < fields.pickupDate) {
        newData.returnDate = fields.pickupDate;
      }
      
      return newData;
    });
  };

  const selectedVehicle = fleet.find(v => v.name === data.selectedVehicleId);

  // Calculate total days and price
  const calculateTotal = () => {
    if (!data.pickupDate || !data.returnDate || !selectedVehicle) return null;
    
    const start = new Date(data.pickupDate);
    const end = new Date(data.returnDate);
    
    // Difference in time
    const diffTime = Math.abs(end.getTime() - start.getTime());
    // Difference in days (minimum 1 day)
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) diffDays = 1;
    
    const total = diffDays * parseInt(selectedVehicle.price);
    return { days: diffDays, total };
  };

  const totals = calculateTotal();

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    window.scrollTo(0, 0);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center px-6">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Booking Request Sent!</h1>
        <p className="mt-6 max-w-xl text-lg text-slate-600">
          Thank you, {data.firstName}. We've received your booking request for the {selectedVehicle?.name}. 
          One of our team members will review your details and contact you shortly to confirm availability.
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/" className="rounded-full bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-slate-800">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      {/* Progress Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between">
          {[
            { id: 1, label: "Trip Details", icon: CalendarDays },
            { id: 2, label: "Select Vehicle", icon: CarFront },
            { id: 3, label: "Personal Info", icon: Users },
          ].map((s) => (
            <div key={s.id} className="flex flex-1 flex-col items-center gap-3 relative">
              <div className={`z-10 flex h-12 w-12 items-center justify-center rounded-2xl font-bold transition-all duration-500 ${
                step >= s.id ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-slate-100 text-slate-400"
              }`}>
                {step > s.id ? <CheckCircle2 className="h-6 w-6" /> : <s.icon className="h-6 w-6" />}
              </div>
              <span className={`text-xs font-black uppercase tracking-widest ${step >= s.id ? "text-slate-900" : "text-slate-400"}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_0.45fr]">
        <div className="space-y-8">
          {/* STEP 1: TRIP DETAILS */}
          {step === 1 && (
            <div className="glass-card-light rounded-[3rem] p-8 shadow-xl shadow-slate-200/50">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Trip Details</h2>
              <p className="mt-2 text-slate-500">Tell us where and when you're traveling in Perth.</p>
              
              <div className="mt-10 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Pickup Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <select 
                        className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none focus:border-primary"
                        value={data.pickupLocation}
                        onChange={e => updateData({ pickupLocation: e.target.value })}
                      >
                        <option>Perth Airport (T1-T4)</option>
                        <option>Perth City Office</option>
                        <option>Fremantle Office</option>
                        <option>Kewdale Office</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Dropoff Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <select 
                        className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none focus:border-primary"
                        value={data.dropoffLocation}
                        onChange={e => updateData({ dropoffLocation: e.target.value })}
                      >
                        <option>Perth Airport (T1-T4)</option>
                        <option>Perth City Office</option>
                        <option>Fremantle Office</option>
                        <option>Kewdale Office</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="grid grid-cols-[1.5fr_1fr] gap-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Pickup Date</label>
                      <input 
                        type="date" 
                        className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-4 outline-none focus:border-primary"
                        value={data.pickupDate}
                        onChange={e => updateData({ pickupDate: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Time</label>
                      <input 
                        type="time" 
                        className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-4 outline-none focus:border-primary"
                        value={data.pickupTime}
                        onChange={e => updateData({ pickupTime: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-[1.5fr_1fr] gap-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Return Date</label>
                      <input 
                        type="date" 
                        className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-4 outline-none focus:border-primary"
                        value={data.returnDate}
                        onChange={e => updateData({ returnDate: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Time</label>
                      <input 
                        type="time" 
                        className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-4 outline-none focus:border-primary"
                        value={data.returnTime}
                        onChange={e => updateData({ returnTime: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-primary" />
                      <span className="font-bold">Arriving at Perth Airport?</span>
                    </div>
                    <button 
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${data.isAirportTransfer ? 'bg-primary' : 'bg-slate-200'}`}
                      onClick={() => updateData({ isAirportTransfer: !data.isAirportTransfer })}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${data.isAirportTransfer ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                  </div>
                  {data.isAirportTransfer && (
                    <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                      <input 
                        type="text" 
                        placeholder="Flight Number (e.g. QF402)"
                        className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 outline-none focus:border-primary"
                        value={data.flightNumber}
                        onChange={e => updateData({ flightNumber: e.target.value })}
                      />
                      <p className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                        <Info className="h-3 w-3" /> We'll monitor your flight for delays.
                      </p>
                    </div>
                  )}
                </div>

                <button onClick={nextStep} className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 font-bold text-white transition hover:bg-primary">
                  Continue to Selection <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: VEHICLE SELECTION */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black tracking-tight text-slate-950">Select Vehicle</h2>
                <button onClick={prevStep} className="text-sm font-bold text-slate-500 hover:text-slate-950 flex items-center gap-1">
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {fleet.map((vehicle) => (
                  <div 
                    key={vehicle.name}
                    className={`cursor-pointer rounded-[2.5rem] border-2 p-6 transition-all duration-300 ${
                      data.selectedVehicleId === vehicle.name ? "border-primary bg-primary/5 shadow-lg" : "border-slate-100 bg-white hover:border-slate-300"
                    }`}
                    onClick={() => updateData({ selectedVehicleId: vehicle.name })}
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-50">
                      <Image src={vehicle.image || "/car-hero.svg"} alt={vehicle.name} fill className="object-contain p-4" />
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <h3 className="text-xl font-bold">{vehicle.name}</h3>
                      <div className="text-xl font-black text-slate-950">${vehicle.price}<span className="text-xs font-normal text-slate-500">/day</span></div>
                    </div>
                    <div className="mt-4 flex gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                      <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {vehicle.specs.passengers}</span>
                      <span className="flex items-center gap-1"><Luggage className="h-3 w-3" /> {vehicle.specs.luggage.split(',')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={nextStep} 
                disabled={!data.selectedVehicleId}
                className={`flex h-16 w-full items-center justify-center gap-3 rounded-2xl font-bold text-white transition ${
                  data.selectedVehicleId ? "bg-slate-950 hover:bg-primary" : "bg-slate-200 cursor-not-allowed"
                }`}
              >
                Confirm Selection <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* STEP 3: PERSONAL INFO */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="glass-card-light rounded-[3rem] p-8 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black tracking-tight text-slate-950">Final Details</h2>
                <button onClick={prevStep} className="text-sm font-bold text-slate-500 hover:text-slate-950 flex items-center gap-1">
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                    <input required className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-5 outline-none focus:border-primary" value={data.firstName} onChange={e => updateData({ firstName: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                    <input required className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-5 outline-none focus:border-primary" value={data.lastName} onChange={e => updateData({ lastName: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                  <input required type="email" className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-5 outline-none focus:border-primary" value={data.email} onChange={e => updateData({ email: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone Number</label>
                  <input required type="tel" className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-5 outline-none focus:border-primary" value={data.phone} onChange={e => updateData({ phone: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Extra Notes</label>
                  <textarea rows={4} className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-5 outline-none focus:border-primary" value={data.notes} onChange={e => updateData({ notes: e.target.value })} placeholder="Child seats, special requests, etc." />
                </div>

                <div className="rounded-2xl bg-orange-50 p-6 flex gap-4">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-sm text-orange-900 leading-relaxed">
                    By requesting this booking, you agree that your details will be processed to check availability. 
                    No payment is required until confirmation.
                  </p>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-primary font-bold text-white transition hover:bg-primary-hover disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Complete Booking Request"} <CheckCircle2 className="h-5 w-5" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* SIDEBAR: SUMMARY */}
        <aside className="relative">
          <div className="sticky top-28 space-y-6">
            <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">Trip Summary</h3>
              
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Route</div>
                    <div className="text-sm font-medium mt-1">{data.pickupLocation} → {data.dropoffLocation}</div>
                  </div>
                </div>

                {data.pickupDate && (
                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Duration</div>
                      <div className="text-sm font-medium mt-1">{data.pickupDate} @ {data.pickupTime} — {data.returnDate} @ {data.returnTime}</div>
                    </div>
                  </div>
                )}

                {selectedVehicle && (
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/5 p-2 shrink-0">
                        <Image src={selectedVehicle.image || "/car-hero.svg"} alt={selectedVehicle.name} width={48} height={48} className="object-contain" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Selected Vehicle</div>
                        <div className="text-sm font-bold mt-1 text-primary">{selectedVehicle.name}</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="rounded-3xl bg-white/5 p-6 mt-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Est. Daily Rate</div>
                      <div className="text-3xl font-black mt-1">${selectedVehicle?.price || "0"}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {totals ? `${totals.days} Days Total` : "Total"}
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {totals ? `$${totals.total}` : "Select dates"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 p-6 flex gap-4 items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white shrink-0">
                <Star className="h-5 w-5 fill-primary text-primary" />
              </div>
              <p className="text-sm text-slate-600 font-medium italic">"Fastest airport pickup I've had in Perth." - Happy Customer</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
