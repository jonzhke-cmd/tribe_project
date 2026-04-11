import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Star, ShieldCheck, Zap, Plane } from "lucide-react";
import { fleet } from "@/app/data/fleet";
import BookingBar from "@/components/BookingBar";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/perth-hero.jpg"
            alt="Perth city skyline at sunset - AutoTrip car rental"
            fill
            className="object-cover z-0"
            priority
          />
        </div>

        <div className="container relative z-20 mx-auto px-6 py-24 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              Perth's Premium Independent Car Rental
            </div>
            
            <h1 className="max-w-5xl text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl gradient-text">
              Drive Perth Your Way.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-400">
              Premium vehicles, transparent pricing, and 24/7 airport support. AutoTrip combines the reliability of 30+ years in Perth with a modern, effortless booking experience.
            </p>

            {/* Quick Booking Bar */}
            <div className="mt-12 w-full max-w-5xl">
              <BookingBar />
            </div>

            <div className="mt-12 flex items-center gap-8 opacity-60 grayscale filter">
              {/* Trust badges placeholders */}
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Local Perth Favorite</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Airport Authorized</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">30+ Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW BLOG BANNER */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-8 border-y border-blue-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">🚀 NEW: Latest Road Trip Guides</h3>
              <p className="text-slate-600">Monkey Mia, Swan Valley, and all new articles now available</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="/new-blog/" 
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition"
              >
                View All Articles →
              </a>
              <a 
                href="/blog/perth-to-monkey-mia-shark-bay-2026/" 
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition"
              >
                Read Monkey Mia Article
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AutoTrip */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Perth Chooses AutoTrip</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not another faceless rental chain. We're Perth locals who understand WA roads better than anyone.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Local Expertise</h3>
              <p className="text-slate-600">
                30+ years operating in Perth means we know every shortcut, every scenic route, and every road condition you'll encounter.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Airport Priority</h3>
              <p className="text-slate-600">
                Our shuttle meets every flight. No queues, no paperwork delays — just your keys and a quick vehicle orientation.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Curated Fleet</h3>
              <p className="text-slate-600">
                Every vehicle is selected for WA conditions. From compact city cars to family SUVs that handle gravel roads with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Perth Fleet</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Late-model vehicles maintained to the highest standards. Perfect for everything from city driving to outback adventures.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {fleet.slice(0, 3).map((car) => (
              <div key={car.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="relative h-64">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{car.name}</h3>
                      <p className="text-slate-500">{car.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">${car.price}/day</div>
                      <p className="text-sm text-slate-500">incl. insurance</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {car.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book"
                    className="block w-full text-center py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition"
                  >
                    Book This Vehicle
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition"
            >
              View Full Fleet <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Travel Guide CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Explore Western Australia</h2>
            <p className="text-xl text-slate-300 mb-10">
              Our travel guides are written by Perth locals who've driven every road in WA. Get honest advice on the best routes, hidden gems, and practical tips for your road trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/new-blog/"
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition inline-flex items-center justify-center gap-2"
              >
                🚀 View Latest Articles <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                href="/blog/perth-to-monkey-mia-shark-bay-2026/"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition"
              >
                Read Monkey Mia Guide
              </Link>
            </div>
            <p className="mt-8 text-slate-400 text-sm">
              All articles include practical driving advice, fuel stops, accommodation tips, and local insights.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}