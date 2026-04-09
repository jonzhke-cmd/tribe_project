import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Car, Clock, ChevronRight, Waves } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Perth to Jurien Bay: The Turquoise Coast Drive Everyone's Talking About in 2026 | AutoTrip Perth",
  description: "Swim with wild sea lions, sandboard the world's tallest coastal dunes, and eat fresh lobster straight off the boat. The Turquoise Coast is WA's best-kept secret — 3 hours from Perth Airport.",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog/perth-to-jurien-bay-turquoise-coast-2026" },
};

export default function PerthToJurienBayTurquoiseCoast2026() {
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
            <li className="font-medium text-slate-900">Perth to Jurien Bay</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
            Turquoise Coast Road Trips
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Perth to Jurien Bay: The Turquoise Coast Drive Everyone Will Be Doing in 2026
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>April 9, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>3 hours from Perth CBD · 2.5 hrs from Perth Airport</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>Any car handles it fine</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
            alt="Crystal turquoise water and white sand beach on Western Australia's Turquoise Coast near Jurien Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
            <p className="text-sm font-medium text-slate-900">Jurien Bay Marine Park — sea lions swim here. Voluntarily. With tourists.</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            Here&apos;s the thing about the Turquoise Coast: it&apos;s been sitting there the entire time, three hours north of Perth, doing absolutely nothing to market itself — while everyone else is fighting for Instagram spots at the Pinnacles or queuing for Margaret River cellar doors. Wild sea lions that actually want to swim with you. Sandboarding dunes that go for kilometres. Lobster so fresh you can hear the boat engine. And hardly anyone there. Not for much longer, though — the TikToks are out, the word is spreading, and 2026 is the year the Turquoise Coast stops being a local secret.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why the Turquoise Coast is Blowing Up in 2026</h2>
          <p>
            Western Australia is having a moment. International visitor numbers have surpassed pre-pandemic levels — the only Australian state to have managed it — and with Qantas adding direct flights from Rome, Paris, and London, a fresh wave of European travellers is arriving at Perth Airport ready to explore. What they&apos;re discovering is that WA has a lot more than Sydney Harbour and Bondi Beach.
          </p>
          <p>
            The Turquoise Coast sits about 260km north of Perth, stretching from Lancelin through Cervantes to Jurien Bay. It&apos;s been a local favourite for decades — Perth families making the school holiday run north — but it&apos;s only now getting the attention it deserves from interstate and international visitors. The sea lion snorkelling content has been going legitimately viral. And once you do it, you&apos;ll understand why.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">The Numbers</h3>
            <p className="text-slate-700 mb-0">
              <strong>Distance from Perth CBD:</strong> 260km · <strong>From Perth Airport:</strong> ~230km · <strong>Drive time:</strong> 2.5–3 hours · <strong>Fuel stops:</strong> Lancelin, Cervantes, Jurien Bay · <strong>Phone signal:</strong> Good on Brand Highway, patchy on coastal roads
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Three Stops You Actually Need to Make</h2>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Lancelin: The Sandboarding Capital of WA (Maybe the World)</h3>
          <p>
            About 130km north of Perth, Lancelin is the first proper stop on this drive — and it earns it. The coastal dunes here are enormous. We&apos;re talking 10-storey-high walls of white sand that roll for kilometres along the coastline, and you&apos;re absolutely allowed to slide down them on a board. Hire one from a local operator for about $20 and spend an hour making a complete fool of yourself. It&apos;s brilliant.
          </p>
          <p>
            Lancelin is also WA&apos;s kitesurfing and windsurfing capital — the wind comes in hard and consistent off the Indian Ocean, which is why the world championships have been held here. Even if you&apos;re not getting on a board, watching the kiteboarders doing aerial tricks above the bay is genuinely spectacular. Grab breakfast at the bakery on the main street before you push north.
          </p>

          <div className="bg-slate-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Local&apos;s Tip</h3>
            <p className="text-slate-700 mb-0">
              Go early at Lancelin. The dunes are best in the morning light and before the afternoon wind kicks in and starts sandblasting everyone. Leave Perth by 7am and you&apos;ll have the dunes almost to yourself.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Cervantes: Fresh Lobster and the Gateway to the Pinnacles</h3>
          <p>
            Cervantes is a tiny fishing town that punches well above its weight in the food department. This is where WA&apos;s rock lobster industry is centred — the boats go out, the lobsters come back, and if you time it right you can buy one straight off the wharf. The Lobster Shack does tours of the processing facility followed by a lobster lunch that is, without question, one of the best meals you can have in WA. Not fancy — just absurdly fresh seafood in a weatherboard building by the sea.
          </p>
          <p>
            Cervantes is also the closest town to the Pinnacles Desert, about 17km down the road if you want to add that to your day. But honestly? If you&apos;ve read our <Link href="/blog/pinnacles-desert-day-trip-perth" className="text-blue-700 hover:underline">Pinnacles day trip guide</Link> and done that separately, there&apos;s more than enough to keep you busy on the coast.
          </p>

          {/* Image */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden my-10">
            <Image
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Fresh lobster from Cervantes WA - the Lobster Shack is one of WA's best seafood experiences"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm font-medium text-slate-900">Cervantes lobster — freshest you&apos;ll eat anywhere in Australia</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Jurien Bay: Swimming With Sea Lions (The Whole Point)</h3>
          <p>
            This is why you drove 260km. Jurien Bay Marine Park is home to a resident colony of Australian sea lions — and unlike the famous Rockingham sea lions near Perth, these ones are genuinely wild. No fenced swim areas, no crowd management, just you in turquoise water with curious, playful sea lions that have absolutely no fear of humans and will swim up and inspect your mask.
          </p>
          <p>
            Several local operators run snorkelling trips out to the colony. You&apos;re in the water with them for about 45 minutes and it is, without exaggeration, one of the best wildlife experiences in Australia. The water visibility is exceptional year-round — 10-20 metres in calm conditions — and the bay is sheltered enough that it&apos;s accessible most days of the year.
          </p>
          <p>
            If snorkelling isn&apos;t your thing (or the conditions are rough), the town itself is genuinely lovely — a proper WA coastal community with good coffee, a marina, and the kind of fish and chips that reminds you why you live here.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Wildflower Bonus (September–November Only)</h2>
          <p>
            If you&apos;re doing this drive between September and November, you get something extraordinary thrown in for free: WA&apos;s wildflower season. Lesueur National Park, just inland from Jurien Bay, is one of the most biodiverse areas on Earth — over 900 plant species in a relatively small area, many of them flowering simultaneously in spring.
          </p>
          <p>
            The drive through Lesueur in October looks like someone went mad with a paint palette. Banksias, hakeas, grevilleas, kangaroo paws — all going off at once across rolling heath country. It adds maybe 30 minutes to the route and is absolutely worth it if the timing works.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Perfect Itinerary: Day Trip vs Weekend Escape</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Day Trip (Doable)</div>
              <h4 className="font-bold text-slate-900 mb-3">The Ambitious One-Dayer</h4>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• <strong>7:00am</strong> — Pick up your AutoTrip car at Perth Airport</li>
                <li>• <strong>9:30am</strong> — Lancelin dunes (1 hour)</li>
                <li>• <strong>11:00am</strong> — Cervantes, Lobster Shack lunch</li>
                <li>• <strong>1:30pm</strong> — Jurien Bay, sea lion snorkelling tour</li>
                <li>• <strong>4:00pm</strong> — Start the drive back south</li>
                <li>• <strong>7:00pm</strong> — Back in Perth. Exhausted, happy, smelling faintly of the ocean.</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Weekend (Ideal)</div>
              <h4 className="font-bold text-slate-900 mb-3">The Proper Way to Do It</h4>
              <ul className="text-slate-600 text-sm space-y-2">
                <li>• <strong>Friday PM</strong> — Drive up, overnight in Jurien Bay</li>
                <li>• <strong>Saturday AM</strong> — Sea lion tour at dawn, quietest water</li>
                <li>• <strong>Saturday PM</strong> — Lesueur National Park or Cervantes</li>
                <li>• <strong>Saturday Eve</strong> — Seafood dinner on the marina</li>
                <li>• <strong>Sunday AM</strong> — Lancelin dunes on the way home</li>
                <li>• <strong>Sunday PM</strong> — Back in Perth, car returned, memories downloaded.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">When to Go</h2>
          <p>
            <strong>September to November</strong> is the sweet spot — wildflowers, mild temperatures (18–24°C), and the sea lion colony is at its most active. Spring weekdays are genuinely quiet.
          </p>
          <p className="mt-4">
            <strong>March to May</strong> (autumn) is almost as good — the summer crowds are gone, water temperatures are still warm enough for comfortable snorkelling (around 22°C), and the light is gorgeous for photography.
          </p>
          <p className="mt-4">
            <strong>June to August</strong> (winter) — the sea lions don&apos;t care what season it is, but the water is cold (17°C) and some snorkelling operators scale back. Lancelin dunes are still great and Cervantes lobster is year-round. Worth it if you&apos;re after solitude.
          </p>
          <p className="mt-4">
            <strong>Summer (December to February)</strong> — hot, busy with Perth families, but the water is perfect (25°C+) and if you can handle the heat and book accommodation early, it&apos;s stunning. Jurien Bay is very popular for summer holidays so book your car and your accommodation well ahead.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Practical Bits: What You Need to Know Before You Go</h2>
          <ul className="space-y-3 not-prose">
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1 shrink-0">
                <Car className="h-4 w-4" />
              </div>
              <span className="text-slate-700"><strong>Any car works for this drive.</strong> Brand Highway is excellent tarmac all the way to Jurien Bay — no 4WD required. A comfortable sedan or small SUV is perfect, and all AutoTrip vehicles come with unlimited kilometres so you&apos;re not watching the odometer tick over.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1 shrink-0">
                <Waves className="h-4 w-4" />
              </div>
              <span className="text-slate-700"><strong>Book the sea lion tour before you leave Perth.</strong> There are only a handful of operators and spots fill fast in school holidays. A quick Google for &ldquo;Jurien Bay sea lion snorkelling&rdquo; will get you sorted — most tours run in the morning for best conditions.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1 shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <span className="text-slate-700"><strong>Fuel up at Cervantes or Jurien Bay.</strong> There are no servos between Lancelin and Cervantes, and fuel in these towns is only marginally dearer than Perth — don&apos;t stress about it.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1 shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <span className="text-slate-700"><strong>Mobile signal:</strong> Good on Brand Highway and in town. Patchy on the coastal tracks west of the highway. Download Google Maps offline before you leave, or rely on the built-in GPS in your AutoTrip rental (all our vehicles have it).</span>
            </li>
          </ul>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8 my-12 text-center not-prose">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Drive North?</h3>
            <p className="text-slate-700 mb-4">
              The Turquoise Coast is the kind of WA day trip that makes you question why you ever bothered going anywhere else. Pick up your AutoTrip rental at Perth Airport — you&apos;re 2.5 hours away from sea lions, sandboarding, and the freshest lobster of your life.
            </p>
            <p className="text-slate-600 text-sm mb-6">
              All our vehicles include unlimited kilometres, 24/7 roadside assistance, and zero hidden fees. We&apos;re a Perth Airport car hire company run by people who actually live here and drive these roads.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-slate-900 transition">
              Book Your Jurien Bay Road Trip Car
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">More WA Road Trips Worth Your Time</h2>
          <p>
            The Turquoise Coast is a great entry point into WA&apos;s incredible north — but there&apos;s plenty more. If you&apos;re planning a longer trip, have a read of our <Link href="/blog/perth-coral-coast-road-trip-2026" className="text-blue-700 hover:underline">Coral Coast road trip guide</Link> (the next chapter up from Jurien Bay) or the <Link href="/blog/pinnacles-desert-day-trip-perth" className="text-blue-700 hover:underline">Pinnacles day trip guide</Link> if you want to combine both on a two-day itinerary. And if you&apos;re more of a south-coast person, the <Link href="/blog/perth-to-esperance-road-trip-2026" className="text-blue-700 hover:underline">Esperance coastal cliffs drive</Link> is the other bookend to everything we love about WA.
          </p>
          <p>
            Either way, you&apos;re going to need a car. Might as well be a good one.
          </p>
        </article>

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">More from the AutoTrip Blog</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/perth-coral-coast-road-trip-2026" className="group block bg-white border border-slate-100 rounded-2xl p-6 hover:border-primary transition">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Coral Coast</span>
              <h4 className="font-bold text-slate-900 mt-2 group-hover:text-primary transition">Perth to the Coral Coast: The Road Trip Everyone is Talking About</h4>
            </Link>
            <Link href="/blog/pinnacles-desert-day-trip-perth" className="group block bg-white border border-slate-100 rounded-2xl p-6 hover:border-primary transition">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Day Trips</span>
              <h4 className="font-bold text-slate-900 mt-2 group-hover:text-primary transition">Perth to the Pinnacles: The Perfect Day Trip Drive in 2026</h4>
            </Link>
            <Link href="/blog/perth-to-esperance-road-trip-2026" className="group block bg-white border border-slate-100 rounded-2xl p-6 hover:border-primary transition">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Great Southern</span>
              <h4 className="font-bold text-slate-900 mt-2 group-hover:text-primary transition">Perth to Esperance: The Road Trip Breaking TikTok in 2026</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
