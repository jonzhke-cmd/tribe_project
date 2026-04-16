import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Car, Clock, ChevronRight } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Valley of the Giants & Denmark: WA's Ancient Forest Road Trip | AutoTrip Perth",
  description: "Walk 40 metres above 400-year-old tingle trees at Walpole's Valley of the Giants, then eat the best cheese in WA in Denmark. 5.5 hours from Perth Airport.",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog/valley-of-the-giants-denmark-wa-2026" },
};

export default function ValleyOfTheGiantsDenmarkWA2026() {
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
            <li className="font-medium text-slate-900">Valley of the Giants</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
            Great Southern Road Trips
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Valley of the Giants & Denmark: The Ancient Forest Road Trip That WA Has Been Hiding From You
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>April 16, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>5.5 hours from Perth Airport</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>Any car — sealed roads all the way</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&auto=format&fit=crop&q=80"
            alt="Ancient tingle forest canopy in the Valley of the Giants, Walpole, Western Australia"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
            <p className="text-sm font-medium text-slate-900">Valley of the Giants, Walpole — 40m above the forest floor</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none">

          {/* Lead paragraph */}
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            There's a forest in the south of Western Australia where the trees are so big, so ancient, and so utterly prehistoric that standing underneath them feels genuinely humbling. The Valley of the Giants near Walpole is home to Red Tingle trees — monsters of the eucalypt world that have been growing quietly for four centuries while the rest of Australia got on with things. And the best part? Most people drive straight past on their way to Margaret River without ever knowing it exists.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What Actually Is the Valley of the Giants?</h2>
          <p>
            About 15 minutes east of the tiny town of Walpole, buried in the Walpole–Nornalup National Park, sits one of Western Australia's most extraordinary natural experiences. The Valley of the Giants is a remnant ancient forest of Red Tingle trees (<em>Eucalyptus jacksonii</em>) — a species found nowhere else on Earth except this small corner of the WA south coast.
          </p>
          <p className="mt-4">
            These trees live for over 400 years. Some grow to 24 metres in circumference — that's a trunk so wide it would take a dozen people linking arms to wrap around it. Their hollow bases, carved out by ancient fires and root decay, are so large that some of the old-timers used to drive cars inside them. You'll see why when you get there.
          </p>
          <p className="mt-4">
            The headline attraction is the <strong>Tree Top Walk</strong> — a 600-metre elevated metal walkway that takes you 40 metres above the forest floor, weaving through the canopy of the tingle forest. No ropes, no harnesses, just an engineering marvel suspended above one of the oldest forests in Australia. Looking down through the canopy at the ferny understory below is genuinely surreal.
          </p>
          <p className="mt-4">
            For those who prefer ground level, the <strong>Ancient Empire Boardwalk</strong> is a 450-metre loop through the forest floor among the base of the ancient tingle trees. You can step inside hollow trunks, touch bark that was already 200 years old before the First Fleet landed, and get completely absorbed in the green stillness. It's genuinely one of the most peaceful experiences WA offers.
          </p>

          {/* Local Tip Box */}
          <div className="bg-slate-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Local's Tip</h3>
            <p className="text-slate-700">Go early morning — by 9am on weekends there can already be a few buses from tour groups. Get there at 8:30am and you'll have the canopy walk almost entirely to yourself. April is genuinely the best month: the summer heat is gone, the light is soft and golden through the leaves, and the forest feels alive in a way it doesn't in the dry summer months.</p>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Best Stops Between Walpole and Denmark</h2>
          <p>
            Denmark is about 55 kilometres east of Walpole — a half-hour drive through rolling farmland and coastal heath. But don't rush between the two. The stretch of road has a few genuinely excellent stops that most people miss.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Greens Pool & Elephant Rocks (William Bay National Park)</h3>
          <p>
            About 15 minutes west of Denmark, this is the kind of place that doesn't feel real when you first see it. Greens Pool is a natural rock-enclosed swimming area with crystal-clear green water that looks more Caribbean than Southern Ocean. Elephant Rocks nearby are exactly what they sound like — smooth granite boulders the size of elephants, rising from the sand in the most photogenic way possible. This is genuinely one of the most beautiful beach spots in all of Western Australia, and people who've seen the Instagram photos are consistently shocked at how much better it looks in person.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. The Cheese Barrel, Denmark</h3>
          <p>
            Denmark's most beloved institution is a small cheese shop on the main street that locals will fight you over. The Cheese Barrel stocks an extraordinary range of local and imported cheeses, plus local smallgoods and condiments. Grab a wedge of something strong and a sourdough loaf, drive five minutes to the Denmark River inlet, and eat lunch on the grass while black swans paddle past. It's a perfect, effortless afternoon.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Pepper & Salt Restaurant, Forest Hill Winery</h3>
          <p>
            About 20 minutes outside Denmark, Forest Hill Winery is one of the Great Southern's finest. And Pepper & Salt, the restaurant on site, is regularly cited as one of the best regional dining experiences in Western Australia. Chef Silas Masih's modern Australian menu uses local produce — the lamb is from the paddock you can see through the window, the wines are made 50 metres away. Book ahead. You will not regret this.
          </p>

          {/* Inline photo */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden my-8">
            <Image
              src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80"
              alt="Great Southern wine region vineyards near Denmark, Western Australia"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
              <p className="text-sm font-medium text-slate-900">Great Southern wine country — within 30 minutes of Denmark</p>
            </div>
          </div>

          {/* 3-Day Itinerary Grid */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Perfect 3-Day Great Southern Road Trip (Local's Version)</h2>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Day 1: Perth → Albany</div>
              <h4 className="font-bold text-slate-900 mb-2">The Drive Down</h4>
              <p className="text-slate-600 text-sm">Collect your car from Perth Airport early. Stop at Mandurah for coffee, then drive straight through to Albany (4.5 hours). Check in, walk the harbour precinct, eat fish and chips at the waterfront. Get an early night — tomorrow's the big day.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Day 2: Albany → Walpole → Denmark</div>
              <h4 className="font-bold text-slate-900 mb-2">Trees, Granite & Cheese</h4>
              <p className="text-slate-600 text-sm">Leave Albany at 7:30am. Valley of the Giants open at 9am — be there early. Ancient Empire walk, Tree Top Walk, take your time. Drive to William Bay NP for Greens Pool swim before lunch. Arrive Denmark, cheese from the Barrel, dinner at a local pub. Stay overnight.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">Day 3: Denmark → Perth</div>
              <h4 className="font-bold text-slate-900 mb-2">Wine & the Long Drive Home</h4>
              <p className="text-slate-600 text-sm">Morning coffee at a Denmark café, then Forest Hill Winery for a 11am tasting (they open early). Lunch at Pepper & Salt if you booked. Drive home via Albany and the South Western Hwy. Back in Perth by 7pm. You'll feel like a completely different person.</p>
            </div>
          </div>

          {/* When to Go */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">When to Go (And When to Avoid)</h2>
          <p><strong>Perfect timing:</strong> April and May are the sweet spot. The summer heat has gone, the trees are at their most vibrant green, Greens Pool is still warm enough to swim, and the wineries are doing their autumn harvest — meaning fresh-pressed wines and a buzz in the air around Denmark that you won't find any other time of year.</p>
          <p className="mt-4"><strong>Summer (Dec-Feb):</strong> The valley itself stays cool under the canopy, but the drive down is long and hot, the roads are busy, and you'll be competing with school holiday crowds for accommodation. Greens Pool gets genuinely packed.</p>
          <p className="mt-4"><strong>Winter (Jun-Aug):</strong> Moody, dramatic, and very different. The Southern Ocean gets rough, the light is extraordinary, and you'll have Greens Pool almost entirely to yourself. Pack a rain jacket and embrace it — the tingle forest in the rain is a whole different experience.</p>

          {/* Car Rental Tips */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">What You Need to Know About Renting a Car for This Trip</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <Car className="h-4 w-4" />
              </div>
              <span><strong>Any standard car works fine:</strong> Every road on this route is sealed. You don't need a 4WD or an SUV — a comfortable mid-size sedan or hatchback is perfect. If there are two of you, a smaller car is actually better for the narrow national park roads near Walpole.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <Clock className="h-4 w-4" />
              </div>
              <span><strong>Allow three days minimum:</strong> You can technically drive to Walpole and back in two days, but you'll spend the whole time driving. Three days means you actually experience the place rather than just ticking it off.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <MapPin className="h-4 w-4" />
              </div>
              <span><strong>Collect from Perth Airport:</strong> The most efficient way to start this trip is to pick up your car straight from Perth Airport and hit the road. AutoTrip's fleet at T1-T4 means zero waiting around — you can be out of the city and on the Albany Highway within 30 minutes of landing.</span>
            </li>
          </ul>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Stand Among 400-Year-Old Trees?</h3>
            <p className="text-slate-700 mb-6">The Valley of the Giants is one of those experiences that genuinely changes your sense of scale. You drive five hours south of Perth, walk into a forest, and suddenly realise that trees have been quietly doing their thing here since before Shakespeare was born. It's worth every kilometre.</p>
            <p className="text-slate-600 text-sm mb-6">We're Perth locals who actually drive these roads. We'll set you up with the right vehicle and the right advice — from the best fuel stop on the Albany Highway to where to eat in Denmark when you arrive.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-slate-900 transition">
              Book Your Great Southern Road Trip Car
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

        </article>

        {/* Author Footer */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">AT</span>
              </div>
              <div>
                <p className="font-bold text-slate-900">Mike from AutoTrip</p>
                <p className="text-sm text-slate-600">Perth local, driven every WA road worth driving (and some that weren't)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-600">Share this with someone who needs a proper road trip:</p>
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
