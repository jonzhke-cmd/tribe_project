import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Car, Clock, ChevronRight, Mountain } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Kalbarri National Park Road Trip: WA's Most Jaw-Dropping Gorges in 2026 | AutoTrip Perth",
  description: "Stand on the Kalbarri Skywalk 100m above the Murchison River gorge. Nature's Window, Z-Bend, coastal cliffs — this is WA's most dramatic road trip, just 6 hours from Perth Airport.",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog/kalbarri-national-park-road-trip-2026" },
};

export default function KalbarriNationalParkRoadTrip2026() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><ChevronRight className="h-4 w-4" /></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><ChevronRight className="h-4 w-4" /></li>
            <li className="font-medium text-slate-900">Kalbarri National Park</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
            WA Gorge Road Trips
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Kalbarri National Park: The Road Trip That Will Make Your Jaw Drop (6 Hours from Perth)
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>April 13, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>6 hours from Perth Airport · Best as 2-night trip</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>Any 2WD handles it</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Dramatic red rock gorge in Kalbarri National Park Western Australia with Murchison River below"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
            <p className="text-sm font-medium text-slate-900">Kalbarri's Murchison River gorges — ancient red rock carved over 400 million years</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            There's a photo that keeps going viral on TikTok and Instagram: a perfectly framed window of ancient red sandstone, cut by 400 million years of erosion, with a silver river curling far below. That's Nature's Window in Kalbarri National Park — and it's just one of the reasons this stretch of WA coastline and outback is becoming the country's hottest road trip destination in 2026.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Kalbarri Is Having Its Moment Right Now</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The Kalbarri Skywalk changed everything. Since opening in 2020, the two dramatic cantilevered viewing platforms — jutting 100 metres out over the Murchison River gorge — have turned what was already a spectacular national park into one of the most-photographed landscapes in Australia. Standing on the glass-floored deck with nothing but 100 metres of air between you and the ancient red gorge below, it's one of those experiences that doesn't feel real until you're actually there.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            April is genuinely one of the best months to make this drive. Western Australia's autumn weather brings cool mornings, clear skies and temperatures in the mid-twenties — perfect for gorge walks without the punishing summer heat. The light on the red sandstone at this time of year is extraordinary: warm, golden, saturated. Every photo looks like it's been filtered.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Drive: Perth Airport to Kalbarri</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Pick up your rental at Perth Airport T1-T4 and head north on the Brand Highway (National Route 1), then cut west through Geraldton — a solid coastal city worth a coffee stop and a quick look at the war memorial — before dropping down into Kalbarri via the North West Coastal Highway. The total distance is around 590 kilometres, taking roughly 6 hours with stops. That makes it a natural overnight trip rather than a day trip, and the local accommodation — from affordable motels to coastal cabins overlooking the Indian Ocean — is excellent value.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The good news: this is a fully sealed highway drive the entire way. Any standard sedan or SUV from the AutoTrip fleet handles it comfortably. You don't need a 4WD for the main gorge and coastal attractions — though if you want to venture further into the park's backcountry, a higher-clearance vehicle opens up additional options.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Inside the Park: What You Can't Miss</h2>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Kalbarri Skywalk</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The headline act. Two cantilevered steel platforms extend out from the gorge rim at the Murchison Gorge Skywalk precinct — one at 13 metres and one at 17 metres above the rim itself, meaning you're standing roughly 100 metres above the river below. The engineering is as impressive as the view. Allow at least an hour here; most visitors spend longer than they plan.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Nature's Window</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            This is the image you've seen online. A short but rewarding 2.6 kilometre loop walk from the Z-Bend car park takes you through ancient sandstone formations to the famous natural arch — a circular window worn through the rock that perfectly frames the Z-Bend of the Murchison River below. Time your visit for the golden hour before sunset and you'll take the best photograph of your entire trip.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Coastal Cliffs</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Kalbarri's other side is its coastline — a series of dramatic red bluff headlands dropping straight into the Indian Ocean. Red Bluff, Mushroom Rock, and Island Rock are all accessible by sealed road from the township and each one is spectacular. Watching the Southern Ocean swell explode against 60-metre red sandstone cliffs while dolphins surf the waves below is the kind of scene that makes you pull over and just stand there for a while.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Kalbarri Township</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The town of Kalbarri sits at the mouth of the Murchison River, with a beautiful estuary beach, a main street of cafés and restaurants, and the kind of relaxed small-town energy that you only find in WA's coastal towns. Fresh fish and chips on the riverbank, a sundowner at one of the waterfront bars, then watching pelicans glide across the estuary at dusk — that's an evening well spent.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            From November to April, whale sharks are visible off the coast from boats, and humpback whales pass through between July and October. If your timing is right, the marine life here is extraordinary.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Quick Trip Facts</h2>
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 not-prose">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-slate-700"><strong>Distance from Perth Airport:</strong> ~590 km north (Brand Hwy then North West Coastal Hwy)</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-slate-700"><strong>Drive time:</strong> ~6 hours non-stop — best as a 2-night trip</span>
              </li>
              <li className="flex items-start gap-3">
                <Mountain className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-slate-700"><strong>Must-sees:</strong> Kalbarri Skywalk, Nature's Window, Z-Bend, Red Bluff coastal cliffs</span>
              </li>
              <li className="flex items-start gap-3">
                <Car className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-slate-700"><strong>Vehicle:</strong> Any 2WD sedan or SUV handles all sealed roads; 4WD for backcountry tracks</span>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-slate-700"><strong>Best season:</strong> April–September (cooler, clear skies — perfect gorge walking weather)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What Car Do You Need?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            For the standard Kalbarri experience — Skywalk, Nature's Window, Z-Bend, coastal cliffs — any 2WD car handles the sealed road network perfectly well. Our mid-size sedans and small SUVs are excellent choices: fuel-efficient on the long highway stretch, comfortable on a multi-day trip, and easy to manoeuvre on the gorge access roads.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            If you're planning to venture further into the park's backcountry — The Loop walk access road or the more remote inland tracks — a SUV gives you more clearance and confidence on the unsealed surfaces. Either way, you'll leave Kalbarri already planning the next visit. It has that effect.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12 not-prose">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to See the Skywalk?</h3>
            <p className="text-slate-600 mb-6">
              Pick up your rental directly from Perth Airport T1-T4 — no transfers, no waiting. We'll get you on the road and at the gorge rim before lunch.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition"
            >
              Book Your Car Now <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
