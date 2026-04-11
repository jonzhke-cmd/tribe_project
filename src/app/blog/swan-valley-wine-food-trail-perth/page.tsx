import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026 | AutoTrip",
  description:
    "Discover the Swan Valley — Perth's closest wine region, just 25 minutes from the airport. Artisan chocolates, craft breweries, boutique wineries and stunning autumn colours. Here's how to drive it.",
  keywords: [
    "Swan Valley day trip Perth",
    "Swan Valley wine trail car hire",
    "Perth wine region drive 2026",
    "Swan Valley road trip",
    "car rental Perth Swan Valley",
    "Perth autumn harvest drive",
  ],
};

export default function SwanValleyPost() {
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
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
            <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full">
              Day Trips
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> April 11, 2026
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> 6 min read
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Swan Valley Wine &amp; Food Trail: Perth&rsquo;s Best Day Trip Right
            Now
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Just 25 minutes from Perth Airport, the Swan Valley is WA&rsquo;s
            oldest wine region — and in autumn 2026, it has never looked (or
            tasted) better.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="/swan-valley-winery-sunset.jpg"
            alt="Golden hour sunset over Swan Valley vineyards with modern winery building, Perth Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-3xl mb-12 border border-amber-100">
            <p className="lead text-2xl text-slate-700 font-medium mb-0 text-center">
              ✨ <strong>2026 UPDATE:</strong> The Swan Valley is having its biggest year ever —
              with autumn harvest colours like you've never seen before.
            </p>
          </div>

          <p className="lead text-2xl text-slate-600 font-medium mb-8">
            Most visitors fly into Perth and immediately start plotting trips to Margaret River.
            Smart move — but there's a world-class wine and food trail hiding <strong>25 minutes from the airport</strong>
            that most travellers completely miss. The Swan Valley is the answer to
            &ldquo;what do I do on my first day before I've even checked into the hotel?&rdquo;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Perfect Timing
              </h3>
              <p className="text-slate-600">
                <strong>April-May 2026</strong> is harvest season — vines turn gold,
                cellar doors buzz with activity, and weekend festivals celebrate
                the region's artisan food scene.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Easy Access
              </h3>
              <p className="text-slate-600">
                <strong>30km from Perth Airport</strong> via Great Eastern Highway.
                All sealed roads, no 4WD needed. Perfect for day-one jetlag recovery.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            🍷 Why the Swan Valley Is Trending in 2026
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Western Australia welcomed <strong>over 11 million overnight visitors in 2025</strong>,
            generating a record $19.2 billion in tourism spending. In 2026,
            the numbers are climbing higher still, fuelled by Qantas's expanded
            direct services from London, Rome, and Paris.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed">
            Many of these international arrivals are choosing self-drive itineraries —
            and the Swan Valley is the <strong>perfect first-stop territory</strong>.
            It's close enough to tackle on arrival day, yet feels worlds away from the airport hustle.

          <div className="bg-gradient-to-br from-primary/5 to-amber-50 p-8 rounded-3xl mb-12 border border-primary/20">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-6">
              <MapPin className="text-primary h-7 w-7" /> Swan Valley at a Glance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">📍 Location</h4>
                  <p className="text-slate-600">30km north-east of Perth Airport (25-35 min drive)</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">📅 Best Season</h4>
                  <p className="text-slate-600">April-May (harvest) • July-October (wildflowers)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">⏱️ Trip Length</h4>
                  <p className="text-slate-600">Half-day (4 hours) to full day</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">🚗 Car Type</h4>
                  <p className="text-slate-600">Any AutoTrip vehicle — all sealed roads</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            🗺️ The Swan Valley Food & Wine Trail
          </h2>
          <p className="mb-6 text-slate-600 leading-relaxed">
            The official Swan Valley Food & Wine Trail is a <strong>self-guided driving loop</strong>
            connecting 150+ cellar doors, breweries, chocolate factories, and farm gates.
            The main loop is only 32km — you'll never feel rushed, but could easily
            spend a full day tasting your way through.
          </p>

          <div className="bg-gradient-to-r from-slate-50 to-white p-8 rounded-3xl mb-12 border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              🕐 Perfect Day Itinerary
            </h3>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl border-l-4 border-amber-500 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">9:00 AM</span>
                  Morning: West Swan Road Wineries
                </h4>
                <p className="text-slate-600 mb-3">
                  Pick up your AutoTrip rental at Perth Airport and head straight to West Swan Road.
                  Start at <strong>Sandalford Wines</strong> — one of WA's most historic estates —
                  for brunch and their Estate Chenin Blanc.
                </p>
                <p className="text-slate-600">
                  Continue to <strong>Houghton Wines</strong>, where the old stone cellar door
                  is framed by golden autumn vines. Even an hour here is worth the drive.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-rose-500 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-bold">12:00 PM</span>
                  Midday: Chocolate, Honey & Nougat Trail
                </h4>
                <p className="text-slate-600 mb-3">
                  The Swan Valley's artisan sugar trail is world-class. Stop at
                  <strong> House of Honey</strong> for infused honey tastings, then
                  <strong> Mondo Nougat</strong> for hand-pulled pistachio nougat.
                </p>
                <p className="text-slate-600">
                  <em>Pro tip:</em> These make perfect gifts — spend $8, leave with $80 worth.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                <h4 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-bold">2:00 PM</span>
                  Afternoon: Craft Breweries & River Views
                </h4>
                <p className="text-slate-600 mb-3">
                  The Swan River lights up in afternoon sun. Pull up at
                  <strong> Mash Brewing</strong> or <strong>Feral Brewing</strong>
                  for lunch on the deck with river views.
                </p>
                <p className="text-slate-600">
                  <em>Designated driver?</em> Both offer excellent non-alcoholic options
                  and cold-pressed local juices.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            💎 Hidden Gems Worth the Detour
          </h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            The mapped trail is fantastic, but the Swan Valley rewards those who wander off-script.
            Here are the local secrets:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
              <h4 className="text-lg font-bold text-slate-900 mb-2">🌳 Whiteman Park</h4>
              <p className="text-slate-600 text-sm">
                Massive bushland reserve with free walking trails, vintage tram,
                and one of Perth's best picnic spots. Free entry, 10 minutes from main trail.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100">
              <h4 className="text-lg font-bold text-slate-900 mb-2">💦 Bells Rapids</h4>
              <p className="text-slate-600 text-sm">
                White-water cascades most impressive in autumn. Short walk from car park,
                barely on tourist maps but genuinely spectacular.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100">
              <h4 className="text-lg font-bold text-slate-900 mb-2">🎨 Gomboc Gallery</h4>
              <p className="text-slate-600 text-sm">
                Private sculpture garden in 10 acres of bushland. Outdoor sculptures
                permanently installed among trees, changing with seasons.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-100">
              <h4 className="text-lg font-bold text-slate-900 mb-2">🍕 Colonial Brewing Co.</h4>
              <p className="text-slate-600 text-sm">
                Sun-drenched courtyard, wood-fired pizza, rotating seasonal beer list.
                Perfect late afternoon wind-down before heading back to Perth.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            🚗 What Car Do You Need?
          </h2>
          <div className="bg-gradient-to-r from-slate-50 to-white p-8 rounded-3xl mb-12 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">✅ The Good News</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>All roads are sealed, flat, and in excellent condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>No SUV or 4WD needed — any AutoTrip vehicle works</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Plentiful free parking throughout the valley</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">⚠️ Important Notes</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span>Plan your designated driver — WA has strict drink-driving laws</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">!</span>
                    <span>Cellar doors will remind you about drink-driving regularly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">💡</span>
                    <span>Need extra boot space? Choose larger sedans/SUVs for wine purchases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-3xl mt-12 border-2 border-primary/30 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="bg-primary text-white p-2 rounded-lg">🚀</span>
              AutoTrip Pro Tip: Make It a Two-Day Loop
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Day 1:</strong> Pick up car at Perth Airport → Drive to Swan Valley for afternoon arrival
              → Stay at boutique B&B or glamping site.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              <strong>Day 2:</strong> Full day exploring the trail properly → No stress driving back to city
              → Return car next morning before onward journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition shadow-lg hover:shadow-xl"
              >
                Book Your Swan Valley Rental →
              </Link>
              <p className="text-sm text-slate-500">
                Our 24/7 airport shuttle means no matter when you return, we'll get you to your terminal.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
            🛣️ Getting There from Perth Airport
          </h2>
          <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Simple Directions:</h3>
            <ol className="space-y-3 text-slate-700 list-decimal pl-5">
              <li>Head north on <strong>Tonkin Highway</strong> from Perth Airport</li>
              <li>Take <strong>Great Eastern Highway</strong> east</li>
              <li>See first cellar door signs within <strong>25 minutes</strong></li>
              <li>Follow Swan Valley Food & Wine Trail signage</li>
            </ol>
            <p className="mt-4 text-slate-600 text-sm">
              ✅ No tolls • ✅ No confusing interchanges • ✅ Perfect for beginners
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-3xl mt-12 border border-amber-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">🎯 The Bottom Line</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Western Australia in 2026 is having its biggest tourism moment ever.
              International visitor numbers are unprecedented, direct flights from Europe keep arriving,
              and travellers are discovering that WA rewards those who go beyond the obvious highlights.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The Swan Valley is proof of that — a wine and food trail so good it would be
              internationally famous if it existed anywhere else. It's here, it's
              <strong> 25 minutes from your arrival gate</strong>, and the cellar doors open at 10am.
            </p>
            <p className="text-slate-700 font-bold mt-6 text-lg">
              Your Perth adventure starts the moment you land. Plan accordingly. 🍷✨
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
