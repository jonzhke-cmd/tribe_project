import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Perth to Albany: WA's Most Underrated Road Trip Is About to Blow Up",
  description: "Autumn 2026 is driving renewed interest in WA's Great Southern coastal route — ancient tingle forests at Walpole, the stunning Greens Pool at William Bay, cool-climate Denmark wineries, and Albany's dramatic Torndirrup cliffs are all going viral as a wilder, crowd-free alternative to the well-worn Margaret River trail.",
  keywords: "Perth to Albany road trip, Great Southern WA road trip, Albany Western Australia drive, WA south coast road trip, rent a car Perth Albany",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog/perth-to-albany-great-southern-road-trip" },
  openGraph: {
    title: "Perth to Albany: WA's Most Underrated Road Trip Is About to Blow Up",
    description: "Discover the Great Southern coastal route — WA's best kept secret for autumn 2026 road trips.",
    type: "article",
    publishedTime: "2026-04-07T00:05:00+08:00",
    authors: ["AutoTrip"],
  },
};

export default function PerthToAlbanyRoadTrip() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      {/* Back to Blog */}
      <div className="container mx-auto px-6 lg:px-8 mb-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition">
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to all articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold">Road Trips</span>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time>April 7, 2026</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>5 min read</span>
          </div>
        </div>

        <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-8">
          Perth to Albany: WA's Most Underrated Road Trip Is About to Blow Up
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-10">
          Autumn 2026 is driving renewed interest in WA's Great Southern coastal route — ancient tingle forests at Walpole, the stunning Greens Pool at William Bay, cool-climate Denmark wineries, and Albany's dramatic Torndirrup cliffs are all going viral as a wilder, crowd-free alternative to the well-worn Margaret River trail.
        </p>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 mb-12">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
            alt="Great Southern coastal drive in Western Australia"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why the Great Southern Is 2026's Breakout Destination</h2>
          <p>
            While everyone knows about Margaret River, WA's Great Southern region has quietly been transforming into one of Australia's most compelling road trip destinations. The 420km drive from Perth to Albany takes you through some of the state's most diverse landscapes — from the ancient forests of the South West to the dramatic coastline of the Southern Ocean.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Perfect 4-Day Itinerary</h2>
          
          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Day 1: Perth to Walpole (4.5 hours)</h3>
          <p>
            Start early and head south on the Kwinana Freeway. Your first major stop should be the <strong>Valley of the Giants Tree Top Walk</strong> near Walpole. These 400-year-old tingle trees (some with bases wide enough to drive a car through) are unique to this region. Stay overnight in Walpole or nearby Denmark.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Day 2: Walpole to Albany via Denmark (2.5 hours)</h3>
          <p>
            This is where the magic happens. From Walpole, take the scenic route through William Bay National Park to see <strong>Greens Pool</strong> — a natural rock pool so perfect it looks Photoshopped. Continue to Denmark for lunch at one of the region's acclaimed wineries (The Lake House is a local favorite), then drive the final hour to Albany.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Day 3: Albany Exploration</h3>
          <p>
            Albany is WA's oldest European settlement, and it's packed with history and natural wonders. Don't miss:
          </p>
          <ul>
            <li><strong>Torndirrup National Park:</strong> See the Gap and Natural Bridge — two of Australia's most dramatic coastal formations</li>
            <li><strong>National Anzac Centre:</strong> One of Australia's best military museums</li>
            <li><strong>Middleton Beach:</strong> Perfect for a morning swim or walk</li>
            <li><strong>Albany Wind Farm:</strong> Stunning coastal views</li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Day 4: Albany to Perth (4.5 hours)</h3>
          <p>
            Take the inland route back via Mount Barker and Kojonup for a different perspective. Stop at <strong>Porongurup National Park</strong> for a short hike among the ancient granite peaks, or visit one of the Mount Barker wineries before heading back to Perth.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">2026 Travel Tips</h2>
          
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Best Time to Go</h3>
          <p>
            <strong>Autumn (March-May) 2026</strong> is ideal. The summer crowds have left, the weather is still warm enough for swimming, and the vineyards are at their most beautiful. Wildflowers start appearing in September if you prefer spring.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Vehicle Recommendations</h3>
          <p>
            This route is fully paved and accessible with any standard rental car. However, if you want to explore some of the gravel roads to more remote beaches or national park areas, consider upgrading to an SUV. Our Toyota RAV4 or similar is perfect for this route.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Booking Advice for 2026</h3>
          <p>
            With this route gaining popularity, accommodation in Denmark and Albany books out quickly on weekends. For April-October 2026 travel, book at least 2-3 months in advance. Mid-week trips offer better availability and often lower rates.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why This Beats Margaret River (For Some Travelers)</h2>
          <p>
            Don't get us wrong — Margaret River is spectacular. But if you're looking for:
          </p>
          <ul>
            <li><strong>Fewer crowds:</strong> Even at peak times, you'll find solitude here</li>
            <li><strong>More dramatic coastline:</strong> The Southern Ocean delivers bigger waves and wilder scenery</li>
            <li><strong>Ancient forests:</strong> The tingle forests are older and more unique than anything up north</li>
            <li><strong>Cool-climate wines:</strong> A completely different wine experience</li>
            <li><strong>Historical significance:</strong> Albany's role in Australian history adds depth to your trip</li>
          </ul>

          <div className="bg-slate-50 rounded-2xl p-8 my-12 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Explore the Great Southern?</h3>
            <p className="mb-6">
              Book your Perth rental car today and discover why this underrated road trip is about to become WA's next big thing. Our team can help you choose the perfect vehicle and provide detailed maps and recommendations for your Great Southern adventure.
            </p>
            <Link href="/" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-full hover:bg-primary/90 transition">
              Book Your Rental Car
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Essential Stops (Don't Miss These!)</h2>
          
          <div className="grid gap-6 md:grid-cols-2 my-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Valley of the Giants</h4>
              <p className="text-slate-600">Walk among 400-year-old tingle trees on the famous Tree Top Walk near Walpole.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Greens Pool</h4>
              <p className="text-slate-600">William Bay's natural rock pool — arguably WA's most beautiful swimming spot.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">The Gap & Natural Bridge</h4>
              <p className="text-slate-600">Torndirrup National Park's dramatic coastal formations where the Southern Ocean meets granite cliffs.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Denmark Wineries</h4>
              <p className="text-slate-600">Cool-climate wines in a stunning forest setting. The Lake House and Boston Brewing are must-visits.</p>
            </div>
          </div>

          <p className="text-lg font-medium text-slate-700 mt-12">
            The Perth to Albany road trip offers everything that makes Western Australia special — world-class natural beauty, excellent food and wine, and that feeling of discovery that comes from exploring somewhere still relatively undiscovered. In 2026, this route is poised to become WA's next iconic drive.
          </p>
        </div>

        {/* Article Footer */}
        <div className="border-t border-slate-200 mt-16 pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-slate-500">Published by</p>
              <p className="text-lg font-bold text-slate-900">AutoTrip — Perth's Independent Car Rental</p>
              <p className="text-slate-600 mt-2">Local insights for your WA road trip adventures.</p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-slate-900 transition font-bold">
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}