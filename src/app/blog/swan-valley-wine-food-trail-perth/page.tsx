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

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-bold">
              Day Trips
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> April 11, 2026
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Perth, WA
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 25 min drive
            </div>
          </div>

          <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-6">
            🦢 Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Just 25 minutes from Perth Airport, the Swan Valley is WA's
            oldest wine region — and in autumn 2026, it has never looked (or tasted) better.
            Artisan chocolates, craft breweries, boutique wineries, and stunning autumn colours.
          </p>

          {/* Hero Image */}
          <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Swan Valley vineyards in autumn"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 rounded-3xl mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">✨ 2026 UPDATE</h2>
            <p className="text-slate-700">
              The Swan Valley is having its biggest year ever — international visitor numbers are up 40%,
              new cellar doors have opened, and autumn 2026 colours are predicted to be the most vibrant in a decade.
              This guide includes all the latest openings and 2026-specific tips.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Swan Valley in 2026?</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Forget the 2-hour drive to Margaret River. The Swan Valley delivers world-class wine,
            food, and scenery in under 30 minutes from Perth Airport. In 2026, with international
            tourism booming, it's the perfect introduction to Western Australia.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Perfect Swan Valley Day Trip</h2>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">🚗 Morning (10:00 AM - 12:00 PM)</h3>
            <p className="text-slate-700 mb-4">
              <strong>Start at Mandoon Estate</strong> — WA's most awarded winery. Their 2025
              Reserve Chardonnay is getting international attention. Tasting flight: $25.
            </p>
            <p className="text-slate-700">
              <strong>Drive to The House of Honey</strong> — free tastings of 20+ honey varieties,
              including rare Jarrah honey (WA exclusive).
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">🍷 Lunch & Afternoon (12:00 PM - 4:00 PM)</h3>
            <p className="text-slate-700 mb-4">
              <strong>Lunch at Feral Brewery</strong> — craft beer paddles and modern Australian pub food.
              Try the Hop Hog IPA (2026 Gold Medal winner).
            </p>
            <p className="text-slate-700 mb-4">
              <strong>Chocolate & Wine Pairing at Margaret River Chocolate Co.</strong> — free tastings,
              watch chocolate being made, and pick up gifts.
            </p>
            <p className="text-slate-700">
              <strong>Finish at Sandalford Wines</strong> — historic estate with river views.
              Their 2024 Chenin Blanc is perfect for Perth's autumn weather.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">🚗 Car Rental Tips for Swan Valley</h2>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-amber-500 text-white rounded-full text-center mr-3 flex-shrink-0">1</span>
                <span><strong>Book a compact or midsize car</strong> — parking at wineries is easy, no need for a large SUV.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-amber-500 text-white rounded-full text-center mr-3 flex-shrink-0">2</span>
                <span><strong>Add GPS or use Google Maps</strong> — mobile reception is excellent throughout the Valley.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 bg-amber-500 text-white rounded-full text-center mr-3 flex-shrink-0">3</span>
                <span><strong>Consider a designated driver package</strong> — some rental companies offer this for wine regions.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">📍 Essential Stops Map</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8">
            <p className="text-slate-700 mb-4">
              The Swan Valley is a compact 32km loop. Start at Perth Airport, take Great Eastern Highway,
              and follow the brown tourist signs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">🍷 Wineries</h4>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Mandoon Estate (award-winning)</li>
                  <li>• Sandalford Wines (historic)</li>
                  <li>• Houghton Winery (iconic)</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">🍺 Breweries & Distilleries</h4>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Feral Brewery (craft beer)</li>
                  <li>• Old Young's Distillery (gin)</li>
                  <li>• Mash Brewing (brewpub)</li>
                </ul>
              </div>
            </div>
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

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-gradient-to-r from-primary to-cyan-600 rounded-3xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Swan Valley?</h2>
            <p className="text-lg mb-8 opacity-90">
              Book your Perth car rental with AutoTrip and get our exclusive Swan Valley map
              with 2026 insider tips.
            </p>
            <Link
              href="/book"
              className="inline-block bg-white text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-slate-100 transition text-lg"
            >
              Book Your Car Now →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}