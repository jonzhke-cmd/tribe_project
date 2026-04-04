import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, Car, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Perth to the Coral Coast: The Ultimate 2026 Road Trip Guide | AutoTrip",
  description:
    "Drive north from Perth to the Coral Coast and discover the Pinnacles, Jurien Bay sea lions, and the turquoise waters of Cervantes. Your full 2026 itinerary starts here.",
  keywords: [
    "Perth Coral Coast road trip",
    "car hire Perth Airport",
    "Turquoise Coast WA drive",
    "Cervantes Pinnacles day trip",
    "Western Australia road trip 2026",
  ],
};

export default function CoralCoastPost() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-slate-900 transition mb-12"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Guides
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6 flex-wrap">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">
              Road Trips
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> April 4, 2026
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> 6 min read
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Perth to the Coral Coast: The Road Trip Everyone is Talking About in 2026
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            With international visitor numbers hitting record highs and Qantas&apos;s new direct European routes
            funnelling fresh eyes into Perth, the Coral Coast drive is officially WA&apos;s hottest road-trip
            itinerary right now. Here is exactly how to nail it.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop&q=80"
            alt="Turquoise waters of the Coral Coast, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-2xl text-slate-600 font-medium mb-8">
            Point your rental car north out of Perth Airport and within two hours the Indian Ocean turns a
            shade of blue that frankly belongs on a screensaver. This is the Coral Coast — and in 2026 it
            is the most-searched road trip in all of Western Australia.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Why the Coral Coast is Trending Right Now
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Western Australia welcomed a staggering 11 million overnight visitors in 2025, generating $19.2 billion
            in visitor spending — a state record. In 2026 the momentum has only accelerated, partly thanks to
            Qantas expanding its direct Perth–London, Perth–Rome, and Perth–Paris services, adding nearly
            10,000 extra inbound seats this season alone. Travellers who land fresh off a long-haul flight and
            walk out into the WA sunshine are increasingly skipping the east coast entirely and heading straight
            up the Coral Coast highway. TikTok and Instagram have done the rest: the luminous turquoise lagoons
            at Jurien Bay, the other-worldly limestone spires of the Pinnacles, and the wild sea-lion colony at
            Seal Island have all gone viral multiple times in the past twelve months.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The best part? This drive is totally underrated compared to the east coast, meaning you will share
            those beaches with a handful of locals rather than a tour bus. For now. Grab a car from AutoTrip at
            Perth Airport and get moving before the secret is fully out.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            The Route at a Glance
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The classic Coral Coast road trip follows the Brand Highway and Indian Ocean Drive north from Perth.
            The full loop to Kalbarri and back covers roughly 1,600 km — doable in a long weekend if you push
            it, or a leisurely four to five days if you want to actually swim at every beach you pass (spoiler:
            you will want to swim at every beach). For most visitors, a three-day sprint to Cervantes,
            Jurien Bay, and the Pinnacles Desert is the sweet spot.
          </p>

          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <MapPin className="text-primary h-6 w-6" /> 3-Day Coral Coast Highlights
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li>
                <strong>Day 1 — Perth Airport → Lancelin (2.5 hrs):</strong> Fuel up at one of AutoTrip&apos;s
                fully-prepped cars at the airport and head straight up the Indian Ocean Drive. Your first stop is
                Lancelin, a wind-beaten surfing village with enormous white sand dunes you can sandboard down.
                Stay overnight at one of the caravan parks right on the beach — sunsets here are extraordinary.
              </li>
              <li>
                <strong>Day 2 — Cervantes & The Pinnacles (45 mins north):</strong> This is the centrepiece of the
                drive. The Pinnacles Desert inside Nambung National Park is a landscape of thousands of limestone
                columns rising from the golden desert floor — it looks like a science-fiction set and photographs
                unlike anything else in Australia. Go at sunrise or golden hour if at all possible. From Cervantes,
                it&apos;s a short drive down to the Thirsty Point Lookout for your first proper Coral Coast ocean view.
              </li>
              <li>
                <strong>Day 3 — Jurien Bay & the Sea Lions:</strong> Continue north to Jurien Bay, where a colony
                of wild Australian sea lions lounges on Seal Island, a short boat trip from the foreshore. The
                town itself has a gorgeous sheltered bay with water calm enough to kayak. Swim, snorkel, grab fish
                and chips on the jetty, then point the car back south toward Perth, arriving by evening.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Hidden Gems Worth the Detour
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The Coral Coast has a few spots that don&apos;t quite make the mainstream lists yet — which means they
            are still glorious and crowd-free.
          </p>
          <ul className="space-y-3 mb-8 text-slate-600">
            <li>
              <strong>Lake Thetis, Cervantes:</strong> One of only a handful of places on Earth where you can see
              living stromatolites — ancient microbial mats that are essentially the same life forms that
              oxygenated our planet 3.5 billion years ago. A 1 km boardwalk loops the lake and it is completely
              free to visit.
            </li>
            <li>
              <strong>Hangover Bay:</strong> A tiny cove just north of the Pinnacles turnoff. No facilities,
              almost no visitors, perfect snorkelling over reef. If the turquoise-water content on your social
              feeds isn&apos;t filling up fast enough, this is the fix.
            </li>
            <li>
              <strong>Lesueur National Park:</strong> If you&apos;re making the drive in wildflower season
              (July–October), this park hosts more plant species than the entire British Isles. The Lesueur Range
              road is unsealed but manageable in a standard 2WD SUV from our fleet.
            </li>
            <li>
              <strong>Green Head:</strong> A small fishing town between Jurien Bay and Cervantes with three
              sheltered bays in walking distance of each other. Fishermen still launch boats off the beach at
              dawn. It&apos;s the WA coast as it was twenty years ago.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            What Car Do You Need?
          </h2>

          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <Car className="text-primary h-6 w-6" /> AutoTrip Fleet Recommendations
            </h3>
            <ul className="space-y-4 text-slate-700">
              <li>
                <strong>Sedan (e.g. Hyundai i30):</strong> Perfect if you are sticking to sealed roads — Brand
                Highway and Indian Ocean Drive are fully sealed all the way to Jurien Bay. Economical on fuel and
                easy to park in small coastal towns.
              </li>
              <li>
                <strong>Mid-size SUV (e.g. MG ZS or Nissan X-Trail):</strong> The sweet spot for this drive.
                Higher clearance handles the occasional unsealed detour (Green Head, Lesueur), you can pack
                camping gear or a cooler in the boot, and the better visibility makes the drive more enjoyable.
              </li>
              <li>
                <strong>People Mover (e.g. Kia Carnival):</strong> Travelling with family or a group of four or
                more? The Carnival&apos;s sliding doors and massive luggage space make it genuinely brilliant for a
                beach road trip where you&apos;re loading and unloading wetsuits, boogie boards, and sandy towels
                at every stop.
              </li>
            </ul>
          </div>

          <p className="mb-6 text-slate-600 leading-relaxed">
            A full 4WD is not necessary for the highlights on this itinerary. Unless you are planning to push
            further north to Kalbarri Gorge&apos;s offroad trails or Shark Bay&apos;s remote stations, save the
            4WD hire costs and put the money toward seafood in Jurien Bay instead.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Practical Tips for 2026
          </h2>

          <div className="bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4">
              <Waves className="text-primary h-6 w-6" /> Know Before You Go
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>
                <strong>Fuel up in Lancelin or Cervantes.</strong> There are no petrol stations between these
                towns on the Indian Ocean Drive. Budget fuel stops carefully — in a standard sedan you are looking
                at roughly 10–12L/100km, so top up whenever you see a servo.
              </li>
              <li>
                <strong>Buy a National Parks pass.</strong> The Pinnacles sit inside Nambung National Park. A
                WA Holiday Pass ($30 for four weeks, 2026 pricing) covers all state parks and saves money if you
                plan on visiting more than two parks.
              </li>
              <li>
                <strong>Mobile coverage is patchy north of Lancelin.</strong> Download offline Google Maps for the
                route before you leave Perth. AutoTrip vehicles have phone mounts — ask our team at pickup.
              </li>
              <li>
                <strong>Swim between the flags.</strong> The Coral Coast is the Indian Ocean — swells can be
                powerful even in calm-looking conditions. Swim at patrolled beaches where possible and always
                tell someone your plan if you&apos;re heading to remote bays.
              </li>
              <li>
                <strong>Leave early on weekends.</strong> The Pinnacles car park fills by 10 AM on public holidays.
                Aim to arrive before 8 AM for sunrise light and empty paths.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            Getting Started: Perth Airport Pickup
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            AutoTrip operates a premium meet-and-greet service from all Perth Airport terminals. Once you land —
            whether you&apos;ve flown in from London, Singapore, or Sydney — our courtesy shuttle meets you at the
            terminal kerb and drives you to our depot where your car is washed, fuelled, and ready with the keys
            in the ignition. No long queues. No dragging luggage through car parks. Just pick up and drive north
            into that impossibly blue horizon.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Booking takes under three minutes online and you can add extras like a roof rack, child seats, or a
            portable Wi-Fi hotspot (useful for those patchy stretches of Indian Ocean Drive). For the Coral Coast
            trip specifically, we&apos;d recommend adding our basic roadside assistance package — not because
            problems are likely, but because peace of mind is worth it when you are an hour from the nearest town.
          </p>

          <div className="mt-16 bg-primary/5 rounded-[3rem] p-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Hit the Coral Coast?
            </h3>
            <p className="text-slate-600 mb-8">
              Pick up your car directly from Perth Airport T1–T4 with zero wait times. The Pinnacles are waiting.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-slate-900"
            >
              Check Vehicle Availability
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
