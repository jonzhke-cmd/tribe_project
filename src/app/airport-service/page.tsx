import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plane, Clock3, MapPin, Bus, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Arrival & Call",
    description: "Once you land and collect your bags, call us. Our designated pickup areas are ready at all T1-T4 terminals.",
    icon: PhoneCall,
  },
  {
    title: "15-Min Shuttle",
    description: "Our dedicated AutoTrip shuttle bus arrives within 15 minutes to collect you and your luggage.",
    icon: Bus,
  },
  {
    title: "Relax & Drive",
    description: "We bring you straight to our collection desk. Sign, grab the keys, and start your Perth journey.",
    icon: CheckCircle2,
  },
];

const terminals = [
  { name: "Terminal 1 (Intl)", airline: "All International", stand: "Stand L" },
  { name: "Terminal 1 (Dom)", airline: "Virgin Australia", stand: "Stand B" },
  { name: "Terminal 2", airline: "Alliance, Tigerair", stand: "Zone A" },
  { name: "Terminal 3 & 4", airline: "Jetstar, Qantas", stand: "Zone C" },
];

import { PhoneCall } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Transfer Service",
  description:
    "Free 24/7 shuttle service from all Perth Airport terminals (T1-T4) to your hire car. No queues, keys in hand within 15 minutes.",
  alternates: { canonical: "https://autotrip-five.vercel.app/airport-service" },
  openGraph: {
    title: "Perth Airport Car Hire Shuttle | AutoTrip",
    description: "Free 24/7 shuttle from T1-T4. Keys in hand in 15 minutes.",
    url: "https://autotrip-five.vercel.app/airport-service",
  },
};

export default function AirportServicePage() {
  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-slate-300">
              Perth Airport Support
            </span>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
              Seamless transfers for your Perth arrival.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Skip the long taxi queues. Our complimentary shuttle service connects all Perth Airport terminals directly to your hire car, 24/7.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-semibold text-white">
                Book Airport Pickup <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4">
            <Image src="/shuttle-transfer.jpg" alt="Airport service shuttle transfer" width={960} height={640} className="h-auto w-full rounded-[1.5rem] object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-950">How it works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-950">Terminal Pickup Points</h2>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Terminal</th>
                  <th className="px-6 py-4 font-semibold">Airlines</th>
                  <th className="px-6 py-4 font-semibold">Pickup Area</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {terminals.map((t) => (
                  <tr key={t.name}>
                    <td className="px-6 py-4 font-medium text-slate-950">{t.name}</td>
                    <td className="px-6 py-4 text-slate-600">{t.airline}</td>
                    <td className="px-6 py-4 font-semibold text-orange-600">{t.stand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
