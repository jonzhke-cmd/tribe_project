import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Clock, ChevronRight, Star, ShieldCheck, Zap, Plane } from "lucide-react";
import { fleet } from "@/app/data/fleet";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-bg text-white">
        <div className="absolute inset-0 z-0">
          <div className="hero-gradient absolute inset-0" />
          {/* Mock background image overlay */}
          <div className="absolute inset-0 opacity-40 bg-[url('/car-hero.svg')] bg-cover bg-center mix-blend-overlay" />
        </div>

        <div className="container relative z-10 mx-auto px-6 py-24 lg:px-8">
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
              <div className="glass-card flex flex-col gap-4 rounded-3xl p-4 md:flex-row md:items-center">
                <div className="flex flex-1 flex-col gap-1 px-4 text-left border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    <MapPin className="h-3 w-3" /> Pickup Location
                  </span>
                  <span className="text-sm font-medium">Perth Airport T1-T4</span>
                </div>
                <div className="flex flex-1 flex-col gap-1 px-4 text-left border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    <Calendar className="h-3 w-3" /> Pickup Date
                  </span>
                  <span className="text-sm font-medium">Select Date</span>
                </div>
                <div className="flex flex-1 flex-col gap-1 px-4 text-left border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                    <Clock className="h-3 w-3" /> Return Date
                  </span>
                  <span className="text-sm font-medium">Select Date</span>
                </div>
                <Link href="/book" className="flex h-14 items-center justify-center rounded-2xl bg-primary px-8 font-bold text-white transition hover:bg-primary-hover">
                  Find Your Car
                </Link>
              </div>
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

      {/* Featured Fleet (SIXT-style Horizontal Scroll/Grid) */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-end justify-between gap-4 border-b border-slate-100 pb-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                The AutoTrip Selection.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Choose from a curated range of well-maintained vehicles, from economical city cars to spacious family movers.
              </p>
            </div>
            <Link href="/fleet" className="group flex items-center gap-2 font-semibold text-primary transition">
              View all vehicles <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.slice(0, 3).map((car) => (
              <div key={car.name} className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-card-bg transition hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                <div className="relative aspect-[16/10] overflow-hidden p-8">
                  <Image
                    src={car.image || "/car-hero.svg"}
                    alt={car.name}
                    fill
                    className="object-contain p-8 transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-8 pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-widest uppercase text-slate-500">{car.type}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="text-xs font-bold">4.9</span>
                    </div>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">{car.name}</h3>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-6">
                    <div>
                      <span className="text-sm text-slate-500">From</span>
                      <div className="text-2xl font-black text-slate-950">${car.price}<span className="text-sm font-normal">/day</span></div>
                    </div>
                    <Link href="/book" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-primary">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Trust Section */}
      <section className="bg-dark-bg py-24 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-[3rem] bg-primary/20 blur-3xl" />
              <div className="glass-card relative overflow-hidden rounded-[3rem] p-4">
                <Image
                  src="/airport-transfer.svg"
                  alt="Airport Transfer Service"
                  width={960}
                  height={640}
                  className="rounded-[2.5rem] object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 space-y-8 lg:order-2">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Service Excellence</span>
              <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
                Arrive Perth. <br /> Drive AutoTrip.
              </h2>
              <p className="text-lg text-slate-400">
                Our airport service is uniquely streamlined. No counters, no long queues. Our concierge shuttle meets you at the terminal and has you behind the wheel within 15 minutes.
              </p>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, title: "24/7 Roadside", text: "Total peace of mind across WA." },
                  { icon: Zap, title: "Fast Handover", text: "Keys in hand in under 15 minutes." },
                  { icon: Plane, title: "T1-T4 Service", text: "Free shuttle to all terminals." },
                  { icon: Star, title: "Premium Fleet", text: "Newer models, clean and ready." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[4rem] bg-primary px-8 py-24 text-center text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent_70%)]" />
            <h2 className="relative text-5xl font-black tracking-tight sm:text-7xl">
              Ready to explore?
            </h2>
            <p className="relative mt-6 text-xl font-medium text-white/90">
              Book your car today and get an instant quote for your Perth trip.
            </p>
            <div className="relative mt-12 flex justify-center gap-4">
              <Link href="/book" className="flex h-16 items-center justify-center rounded-3xl bg-white px-10 font-bold text-primary transition hover:scale-105">
                Book Your Ride
              </Link>
              <Link href="/contact" className="flex h-16 items-center justify-center rounded-3xl border border-white/30 bg-white/10 px-10 font-bold text-white backdrop-blur transition hover:bg-white/20">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
