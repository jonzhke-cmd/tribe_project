import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Car, Clock, ChevronRight, Bike, Ferry } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Rottnest Island Day Trip: Quokkas, Beaches & Bike Adventures from Perth 2026 | AutoTrip Perth",
  description: "Rottnest Island is Perth's island paradise just 30 minutes by ferry. Here's your complete guide to quokka selfies, pristine beaches, bike trails, and making the most of your day trip from Perth — including why you need a car to get to the ferry terminal.",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog/rottnest-island-day-trip-quokkas-2026" },
};

export default function RottnestIslandDayTripQuokkas2026() {
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
            <li className="font-medium text-slate-900">Rottnest Island</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
            Island Getaways
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Rottnest Island Day Trip: Your 2026 Guide to Quokkas, Beaches & Bike Adventures
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>April 15, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Ferry className="h-4 w-4" />
              <span>30 min ferry from Fremantle</span>
            </div>
            <div className="flex items-center gap-2">
              <Bike className="h-4 w-4" />
              <span>Best explored by bicycle</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              <span>Car needed for ferry access</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1589552950456-75eeaf5c5a30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Quokka smiling on Rottnest Island, Western Australia — the world's happiest animal waiting for your visit"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg">
            <p className="text-sm font-medium text-slate-900">Quokka selfies are basically Perth's official tourist currency in 2026</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-slate-700 font-medium mb-8">
            Forget flying to Queensland for island vibes. Rottnest Island — or "Rotto" as locals call it — is Perth's secret weapon: 63 beaches, 20 bays, car-free roads, and those ridiculously photogenic quokkas. And the best part? It's just 30 minutes by ferry from Fremantle. Here's everything you need to know for the perfect 2026 day trip.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why Rottnest is Perth's Ultimate Day Trip in 2026</h2>
          <p>
            In 2026, everyone's looking for quick escapes that don't require a week off work. Rottnest delivers: you can leave Perth at 7am, be on the island by 9am, have a full day of beaches and quokkas, and be back in the city for dinner. No flights, no complicated logistics — just pure island time.
          </p>
          <p>
            The island's gone through a massive upgrade in recent years too. New eco-accommodation, better bike trails, sustainable tourism initiatives, and even some surprisingly good restaurants. It's not just a day trip anymore; it's a proper mini-holiday.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">2026 Travel Hack</h3>
            <p className="text-slate-700">
              Book your ferry tickets online at least 2 weeks in advance — especially for weekends and school holidays. The 8:30am and 9:30am departures from Fremantle sell out first. Pro tip: Book the "Bike & Ferry" combo. It's cheaper than hiring separately on the island.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Quokka Selfie Guide (Do It Right)</h2>
          
          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Where to Find Them</h3>
          <p>
            Quokkas are everywhere on Rottnest, but they're especially active around the Settlement area (near the main shops and cafes) in the late afternoon. They're wild animals, so don't feed them (it's illegal and bad for them), but they'll happily pose for photos if you're patient and quiet.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. The Perfect Quokka Photo</h3>
          <p>
            Get down to their level (crouch or sit), use natural light (golden hour is magic), and be patient. They're curious creatures — if you sit still, they'll often come closer. The famous "quokka smile" happens when they're relaxed and content, not when they're being chased or fed.
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Quokka Etiquette 2026</h3>
          <p>
            No touching, no feeding, no flash photography. Keep your distance and let them approach you. Remember: they're the reason Rottnest exists (the island's name comes from "Rat's Nest" — early Dutch explorers thought they were giant rats). Treat them with respect.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Beaches That'll Make You Question Reality</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">The Basin</div>
              <p className="text-slate-600 text-sm mb-3">5-minute walk from the Settlement. Protected, shallow, perfect for families. Has change rooms, toilets, and a kiosk nearby. Gets busy by 11am — go early.</p>
              <div className="flex items-center text-sm text-slate-500">
                <Bike className="h-4 w-4 mr-1" />
                <span>5 min bike from ferry</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Little Salmon Bay</div>
              <p className="text-slate-600 text-sm mb-3">The snorkelling spot. Crystal clear water, coral formations, and fish everywhere. Snorkel gear hire available at the Settlement. Best at high tide.</p>
              <div className="flex items-center text-sm text-slate-500">
                <Bike className="h-4 w-4 mr-1" />
                <span>25 min bike from ferry</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Pinky Beach</div>
              <p className="text-slate-600 text-sm mb-3">Long stretch of white sand on the north side. Great for walks, less crowded than The Basin. Watch the sunset here before catching the last ferry.</p>
              <div className="flex items-center text-sm text-slate-500">
                <Bike className="h-4 w-4 mr-1" />
                <span>15 min bike from ferry</span>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-xl font-bold text-slate-900 mb-2">Strickland Bay</div>
              <p className="text-slate-600 text-sm mb-3">For the adventurers. Surf break on the south side, dramatic cliffs, usually empty. Rugged beauty that feels a world away from Perth.</p>
              <div className="flex items-center text-sm text-slate-500">
                <Bike className="h-4 w-4 mr-1" />
                <span>40 min bike from ferry</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">The Perfect Rottnest Day Trip Itinerary</h2>
          
          <div className="space-y-6 my-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">7:00</div>
              <div>
                <h4 className="font-bold text-slate-900">Drive to Fremantle</h4>
                <p className="text-slate-600 text-sm">Park at the ferry terminal (book parking online). Grab coffee from one of Freo's legendary cafes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">8:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Ferry to Rottnest</h4>
                <p className="text-slate-600 text-sm">30-minute scenic cruise. Dolphins often swim alongside in the morning.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">9:15</div>
              <div>
                <h4 className="font-bold text-slate-900">Bike & Beach Time</h4>
                <p className="text-slate-600 text-sm">Pick up your bike, ride to The Basin or Little Salmon Bay for morning swim.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">12:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Lunch at The Settlement</h4>
                <p className="text-slate-600 text-sm">Fish & chips, burgers, or proper cafe food. Fuel up for the afternoon.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">14:00</div>
              <div>
                <h4 className="font-bold text-slate-900">Quokka & Explore Time</h4>
                <p className="text-slate-600 text-sm">Ride to Wadjemup Lighthouse, find quokkas, explore hidden bays.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">16:30</div>
              <div>
                <h4 className="font-bold text-slate-900">Sunset & Ferry Home</h4>
                <p className="text-slate-600 text-sm">Watch sunset at Pinky Beach, return bike, catch 5:30pm ferry back to Perth.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Why You Need a Car (Even Though Rottnest is Car-Free)</h2>
          <p>
            Here's the thing everyone forgets: Rottnest might be car-free, but you need to get to the ferry terminal. And unless you live in Fremantle (or want to spend an hour on public transport each way), you're driving.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <Car className="h-4 w-4" />
              </div>
              <span><strong>Ferry terminals aren't in the CBD:</strong> The main Rottnest Express departs from Fremantle (30min drive from Perth) and Hillarys (45min drive). You need a car to get there unless you want to Uber (expensive) or take multiple buses (time-consuming).</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <Clock className="h-4 w-4" />
              </div>
              <span><strong>Early starts matter:</strong> The best ferry times book out weeks in advance. Having a car means you can catch the 7am ferry without stressing about public transport schedules.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <MapPin className="h-4 w-4" />
              </div>
              <span><strong>Parking at the terminal:</strong> Secure parking at Fremantle or Hillarys costs about $15/day. Book it online when you book your ferry tickets — it sells out too.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                <ChevronRight className="h-4 w-4" />
              </div>
              <span><strong>Combine with other adventures:</strong> Got a car? Make a weekend of it. Do Rottnest on Saturday, explore Fremantle markets and breweries on Sunday. Flexibility is everything.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">2026 Rottnest Tips (From Locals Who Go Monthly)</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">🛥️ Ferry Booking Secrets</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Book online at least 2 weeks ahead for weekends</li>
                <li>• "Bike & Ferry" combo saves $15-20 per person</li>
                <li>• Return on the 5:30pm ferry for sunset views</li>
                <li>• Check Groupon for occasional deals</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">🚲 Bike Hire Hacks</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• E-bikes cost more but worth it for hills</li>
                <li>• Bring your own bike lock (they provide one)</li>
                <li>• Test brakes and gears before leaving the shop</li>
                <li>• Basket hire ($5) is great for beach towels &snacks</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">🏖️ Beach & Swimming Tips</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Bring reef shoes for rocky entries</li>
                <li>• Sunscreen every 2 hours (no shade on bike trails)</li>
                <li>• Swim between the flags at The Basin</li>
                <li>• Freshwater showers at main beaches</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">📸 Photo & Social Media</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• #rottnestisland & #quokkaselfie for maximum reach</li>
                <li>• Golden hour (4-6pm) for best quokka photos</li>
                <li>• Drone flying requires permit (apply online)</li>
                <li>• Tag @autotrip_perth for feature chance</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready for Your Rottnest Adventure?</h3>
            <p className="text-slate-700 mb-6">
              Look, you could stress about public transport timetables, Uber surges, or parking nightmares. Or you could grab one of our Perth Airport rentals — pick up at 6:30am, drive straight to Fremantle, park securely, and focus on what matters: quokka selfies and beach time.
            </p>
            <p className="text-slate-600 text-sm mb-6">
              We're Perth locals who do Rottnest trips monthly. We'll set you up with the right car and all the local tips you need.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-slate-900 transition">
              Book Your Rottnest Day Trip Car (The Smart Way)
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </article>

        {/* Author & Share */}
        <div className="border-t border-slate-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">AT</span>
              </div>
              <div>
                <p className="font-bold text-slate-900">Sarah from AutoTrip</p>
                <p className="text-sm text-slate-600">Perth local, Rottnest regular, quokka whisperer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-slate-600">Share this with someone who needs quokka therapy:</p>
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
