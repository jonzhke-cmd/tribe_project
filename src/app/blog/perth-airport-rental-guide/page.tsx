import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Navigate Perth Airport Car Rentals | AutoTrip",
  description: "Skip the counter queues. Our guide to the fastest, most stress-free way to collect your rental car at Perth T1-T4.",
  keywords: ["Perth airport car rental", "hire car Perth airport", "Perth airport T1", "Perth airport T4"],
};

export default function AirportRentalGuide() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Travel Tips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> March 28, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 4 min read</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            How to Navigate Perth Airport Car Rentals
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Arriving after a long flight? The last thing you want is a massive queue at the rental desk. Here is the local's guide to a stress-free pickup.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop"
            alt="Airplane wing in clouds"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-2xl text-slate-600 font-medium mb-8">
            Perth Airport is unique. Because it's a major hub for both international tourism and the local FIFO (Fly-In Fly-Out) mining workforce, the rental desks can get incredibly busy.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Understanding the Terminals</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Perth Airport is split into two distinct precincts separated by a 15-minute drive:
          </p>
          <ul className="space-y-2 mb-6 text-slate-700">
            <li><strong>T1/T2 Precinct:</strong> International flights, Virgin Australia, and regional airlines.</li>
            <li><strong>T3/T4 Precinct:</strong> Qantas and Jetstar flights.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The AutoTrip Airport Advantage</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Instead of making you walk your heavy luggage across the parking lots to find a booth, AutoTrip operates a premium "Meet and Greet" shuttle service. Once you collect your bags, you simply call our depot. Within 15 minutes, our courtesy shuttle will collect you directly from the terminal curb and drive you to our nearby depot where your car is already washed, prepped, and waiting with the keys in the ignition.
          </p>

          <div className="mt-16 bg-primary/5 rounded-[3rem] p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Book your seamless arrival.</h3>
            <Link href="/airport-service" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-slate-900">
              View Airport Pickup Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
