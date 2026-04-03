import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "The Ultimate Perth to Margaret River Road Trip Itinerary | AutoTrip",
  description: "Planning a drive from Perth to Margaret River? Discover the best stops, wineries, and coastal views in our ultimate 3-day road trip itinerary.",
  keywords: ["Perth to Margaret River drive", "WA road trip", "car rental Perth to Margaret River", "Margaret River itinerary"],
};

export default function MargaretRiverPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">Road Trips</span>
            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> April 1, 2026</div>
            <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 5 min read</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            The Ultimate Perth to Margaret River Weekend Drive
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Just a three-hour drive south of Perth lies one of Australia's premier wine, food, and surf regions. Here is exactly how to do it right.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="/margaret-river.jpg"
            alt="Margaret River coast"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-2xl text-slate-600 font-medium mb-8">
            Renting a car in Perth and driving down the coast to Margaret River is a rite of passage for any visitor to Western Australia.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Drive: What You Need to Know</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The drive from Perth Airport or the CBD to Margaret River is straightforward and incredibly scenic. It's approximately 270 kilometers (167 miles) down the Kwinana Freeway and Forrest Highway. In a standard rental car from AutoTrip, the journey takes about 3 hours non-stop. However, the beauty of a road trip lies in the stops along the way.
          </p>
          
          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <MapPin className="text-primary h-6 w-6" /> Recommended Stops
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li><strong>1. Mandurah:</strong> Grab a coffee on the foreshore (45 mins from Perth).</li>
              <li><strong>2. Bunbury:</strong> Walk the timber jetty and spot wild dolphins (1.5 hours from Perth).</li>
              <li><strong>3. Busselton:</strong> Excellent lunch stop and home to the longest timber-piled jetty in the Southern Hemisphere (2 hours from Perth).</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Day 1: Arrival & Wineries</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Arrive in Margaret River town around lunchtime. The region is globally renowned for its Cabernet Sauvignon and Chardonnay. We recommend picking a cluster of wineries along Caves Road. Remember, WA has strict drink-driving laws, so if you're the designated driver of your AutoTrip rental, stick to the spittoon or draw straws for who drives tomorrow!
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Day 2: The Rugged Coastline</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Take your car down to Surfers Point in Prevelly to watch the local pros tackle the massive Indian Ocean swells. In the afternoon, drive out to the Boranup Karri Forest—the towering pale-barked trees create a cathedral-like canopy over Caves Road that is spectacular to drive through.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Choosing the Right Rental Car</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The roads to and around Margaret River are fully sealed and exceptionally well-maintained. You absolutely do not need a 4WD to enjoy 95% of the region. A comfortable sedan or a mid-sized SUV from our fleet is perfect for fitting your luggage and a few boxes of wine in the boot.
          </p>

          <div className="mt-16 bg-primary/5 rounded-[3rem] p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready for your road trip?</h3>
            <p className="text-slate-600 mb-8">
              Pick up your car directly from Perth Airport T1-T4 with zero wait times.
            </p>
            <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-slate-900">
              Check Vehicle Availability
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
