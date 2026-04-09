import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Car, Clock, ChevronRight } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "The Swan Valley Morning Food Trail: Perth's Best Foodie Drive (Under 30 Minutes from the City) | AutoTrip Perth",
  description: "Perth's most underrated morning is this: leave home at 9am, drive 25 minutes up the Great Northern Highway, and spend the next four hours eating your way t",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog/swan-valley-morning-food-trail-perth" },
};

export default function SwanValleyMorningFoodTrailPerth() {
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
            <li className="font-medium text-slate-900">Swan Valley Food Trail</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
            Food & Wine Trails
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            The Swan Valley Morning Food Trail: Perth's Best Foodie Drive (Under 30 Minutes from the City)
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>9 April 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>25 minutes from Perth CBD</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>Any car — this is an easy day</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
            alt="Swan Valley wine country near Perth, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
            <p className="text-sm font-medium text-slate-900">Swan Valley — Perth's backyard food and wine trail</p>
          </div>
        </div>

        {/* Article */}
        <article className="prose prose-lg prose-slate max-w-none">

          <p className="lead text-xl text-slate-700 font-medium mb-8">
            Perth's most underrated morning is this: leave home at 9am, drive 25 minutes up the Great Northern Highway, and spend the next four hours eating your way through the Swan Valley. Chocolate factories, nougat makers, a honey house, fresh bread, olive oil tastings, and wine before noon if you want it. It sounds excessive. It absolutely is. Do it anyway.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why the Swan Valley Gets Overlooked (And Shouldn't)</h2>
          <p>Everyone knows Margaret River. Swan Valley is what Perth locals actually do on a Sunday when they don't want a 3-hour drive. The valley is compact enough to cover in a morning, close enough that you're home for an afternoon nap, and diverse enough that no two visits are the same. It's also genuinely one of Australia's oldest wine regions — older than Barossa, older than Hunter Valley, though it doesn't shout about it.</p>

          <div className="bg-slate-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Local&apos;s Tip</h3>
            <p className="text-slate-700">
              Don&apos;t skip the small towns on the way. The servo owner in Dwellingup knows more about the karri forests than any tour guide, and the bakery in Nannup has been doing the same pie recipe since 1987. That&apos;s the WA road trip experience right there.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Stops Worth Making</h2>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Mondo Nougat</h3>
          <p>This is ground zero for Swan Valley food trail. Handmade nougat in every flavour imaginable, free tastings, and the kind of shop that makes you spend $60 on things you didn't know you needed. Get there early — it fills up fast on weekends.</p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. The Cheese Barrel</h3>
          <p>WA's best cheese selection under one roof. Tastings available, the staff know their product, and the smoked varieties are genuinely worth the drive alone. Pair with something from the valley's deli section and you've got lunch sorted.</p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Sandalford Wines</h3>
          <p>One of the valley's original wineries with proper seated tastings, a good restaurant, and grounds that make for excellent photos. Their Riesling and Verdelho are excellent. Book ahead on weekends for the restaurant.</p>

          {/* 3-Day Itinerary */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Itinerary (Local&apos;s Version)</h2>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Stop 1: 9am Start</div>
              <h4 className="font-bold text-slate-900 mb-2">Chocolate & Nougat</h4>
              <p className="text-slate-600 text-sm">Start at Margaret River Chocolate Company in West Swan for the free chocolate tasting (genuinely excellent) then Mondo Nougat. Budget $40-60 and about 45 minutes.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Stop 2: Late Morning</div>
              <h4 className="font-bold text-slate-900 mb-2">Cheese & Deli</h4>
              <p className="text-slate-600 text-sm">The Cheese Barrel for a proper tasting, followed by Garry's Smallgoods if you want the full deli experience. Grab ingredients for a picnic lunch in the valley.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Stop 3: Lunch</div>
              <h4 className="font-bold text-slate-900 mb-2">Wine & Lunch</h4>
              <p className="text-slate-600 text-sm">Sandalford or Oakover Grounds for a seated lunch with valley wines. Both have excellent views and menus that focus on local produce. Oakover has a great lawn area for families.</p>
            </div>
          </div>

          {/* When to Go */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">When to Go (And When to Avoid)</h2>
          <p><strong>Perfect timing:</strong> Year-round but particularly good in autumn (March-May) when the vines change colour and the heat has backed off. Winter weekday mornings are the quietest the valley gets.</p>
          <p className="mt-4"><strong>Summer (Dec-Feb):</strong> December to February is hot but the valley is well set up for it — plenty of shaded areas and air-conditioned cellar doors. Avoid summer weekends unless you like crowds.</p>
          <p className="mt-4"><strong>Winter (Jun-Aug):</strong> June to August is quieter, cooler, and the valley turns on some good winter lunch menus. Some smaller producers reduce hours, so check ahead.</p>

          {/* Car Rental Tips */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What You Need to Know About Renting a Car for This Trip</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <Car className="h-4 w-4" />
              </div>
              <span><strong>Park once, walk between stops:</strong> The main cluster of stops in the Upper Swan area are walkable from each other. Park at Margaret River Chocolate Company and walk. You'll want the exercise after the tastings.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <Car className="h-4 w-4" />
              </div>
              <span><strong>Weekday mornings are best:</strong> Saturday and Sunday get very busy by 10:30am. A Tuesday or Wednesday morning here is a completely different experience — peaceful, unhurried, and the staff have more time for you.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <Car className="h-4 w-4" />
              </div>
              <span><strong>Only 25 minutes from the airport:</strong> Perfect for visitors landing at Perth Airport. Pick up your AutoTrip rental, skip the CBD, and head straight to the valley — it's practically on the way.</span>
            </li>
          </ul>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Actually Do This Trip?</h3>
            <p className="text-slate-700 mb-6">Swan Valley is the easiest day trip from Perth Airport you'll ever do. Pick up your rental car from us at Horrie Miller Drive, take the Great Northern Highway north, and you're there in 25 minutes. No highway driving, no stress — and we'll give you the local tips on the best stops.</p>
            <p className="text-slate-600 text-sm mb-6">We&apos;re Perth locals who actually drive these roads. We&apos;ll set you up with the right vehicle and the right advice.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-slate-900 transition">
              Book Your Car (The Right Way)
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

        </article>

        {/* Author */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">AT</span>
              </div>
              <div>
                <p className="font-bold text-slate-900">Mike from AutoTrip</p>
                <p className="text-sm text-slate-600">Perth local, driven every WA road worth driving (and some that weren&apos;t)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-600">Share this:</p>
              <button className="text-slate-400 hover:text-primary transition">Twitter</button>
              <button className="text-slate-400 hover:text-primary transition">Facebook</button>
              <button className="text-slate-400 hover:text-primary transition">WhatsApp</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
