import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Briefcase, Fuel, ShieldCheck, Luggage, Star } from "lucide-react";
import { fleet } from "@/app/data/fleet";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Browse AutoTrip's curated fleet of modern vehicles available for hire at Perth Airport. Hatchbacks, sedans, SUVs and people movers from $49/day.",
  alternates: { canonical: "https://autotrip-five.vercel.app/fleet" },
  openGraph: {
    title: "Car Hire Fleet | AutoTrip Perth",
    description: "Modern, well-maintained vehicles from $49/day. Book at Perth Airport.",
    url: "https://autotrip-five.vercel.app/fleet",
  },
};

export default function FleetPage() {
  return (
    <main className="bg-white">
      <section className="bg-dark-bg py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              The Selection
            </span>
            <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl">
              Modern vehicles for every Perth journey.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-400">
              From fuel-efficient hatchbacks to spacious 8-seater family movers. All our vehicles are well-maintained, sanitized, and ready for your arrival.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((vehicle) => (
            <article key={vehicle.name} className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-card-bg transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50">
              <div className="relative aspect-[16/10] overflow-hidden p-8">
                <Image
                  src={vehicle.image || "/car-hero.svg"}
                  alt={vehicle.name}
                  fill
                  className="object-contain p-6 transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-8 pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{vehicle.type}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    <span className="text-xs font-bold text-slate-950">4.9</span>
                  </div>
                </div>
                <h2 className="mt-3 text-3xl font-bold text-slate-950">{vehicle.name}</h2>
                
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                    <Users className="h-3.5 w-3.5 text-slate-400" />
                    {vehicle.specs.passengers} Seats
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
                    <Luggage className="h-3.5 w-3.5 text-slate-400" />
                    {vehicle.specs.luggage}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">From</span>
                    <div className="text-3xl font-black text-slate-950">${vehicle.price}<span className="text-sm font-normal">/day</span></div>
                  </div>
                  <Link href="/book" className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-primary">
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
