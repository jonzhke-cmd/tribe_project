"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Calendar, Clock, ChevronDown } from "lucide-react";

const locations = [
  "Perth Airport T1/T2",
  "Perth Airport T3/T4",
  "Perth City (Pick-up)",
  "Fremantle Office"
];

export default function BookingBar() {
  const [location, setLocation] = useState(locations[0]);
  const [showLocations, setShowLocations] = useState(false);

  return (
    <div className="glass-card flex flex-col gap-4 rounded-3xl p-4 md:flex-row md:items-center relative">
      {/* Location Dropdown */}
      <div className="relative flex flex-1 flex-col gap-1 px-4 text-left border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0">
        <button 
          onClick={() => setShowLocations(!showLocations)}
          className="flex w-full flex-col items-start gap-1 transition hover:opacity-80"
        >
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <MapPin className="h-3 w-3" /> Pickup Location
          </span>
          <div className="flex w-full items-center justify-between">
            <span className="text-sm font-medium">{location}</span>
            <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${showLocations ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {showLocations && (
          <div className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-dark-bg/95 p-2 shadow-2xl backdrop-blur-xl">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setLocation(loc);
                  setShowLocations(false);
                }}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                  location === loc ? 'bg-primary text-white' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Date Picker Mockups (Inputs for native browser pickers) */}
      <div className="flex flex-1 flex-col gap-1 px-4 text-left border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          <Calendar className="h-3 w-3" /> Pickup Date
        </span>
        <input 
          type="date" 
          className="bg-transparent text-sm font-medium outline-none [color-scheme:dark] cursor-pointer"
          defaultValue={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className="flex flex-1 flex-col gap-1 px-4 text-left border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          <Clock className="h-3 w-3" /> Return Date
        </span>
        <input 
          type="date" 
          className="bg-transparent text-sm font-medium outline-none [color-scheme:dark] cursor-pointer"
          defaultValue={new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]}
        />
      </div>

      <Link href="/book" className="flex h-14 items-center justify-center rounded-2xl bg-primary px-8 font-bold text-white transition hover:bg-primary-hover active:scale-95">
        Find Your Car
      </Link>
    </div>
  );
}
