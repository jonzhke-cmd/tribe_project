import Link from "next/link";
import { Mail, Phone, MapPin, Clock3, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-slate-300">
            Contact Us
          </span>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
            We're here to help you get moving.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Serving Perth since 1982. Whether you're a local, a FIFO worker, or visiting for business, our team is ready to assist with your vehicle needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-950">Call Us</h3>
                <p className="mt-1 text-slate-600">Available for arrivals and enquiries.</p>
                <a href="tel:0894794900" className="mt-2 block text-2xl font-bold text-slate-950 hover:text-orange-600">
                  08 9479 4900
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-950">Email</h3>
                <p className="mt-1 text-slate-600">General enquiries and booking support.</p>
                <a href="mailto:enquiry@autotrip.com.au" className="mt-2 block text-lg font-medium text-slate-950 hover:text-blue-600">
                  enquiry@autotrip.com.au
                </a>
              </div>
            </div>

            <div className="flex gap-6 border-t border-slate-100 pt-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-950">Our Office</h3>
                <p className="mt-1 text-slate-600">Conveniently located near Perth Airport.</p>
                <p className="mt-2 text-slate-900 font-medium">Perth, Western Australia</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">Send an Enquiry</h3>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Full Name" className="rounded-2xl border border-slate-200 bg-white px-5 py-3 focus:border-orange-500 focus:outline-none" />
                <input type="email" placeholder="Email Address" className="rounded-2xl border border-slate-200 bg-white px-5 py-3 focus:border-orange-500 focus:outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 focus:border-orange-500 focus:outline-none" />
              <textarea placeholder="How can we help?" rows={4} className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 focus:border-orange-500 focus:outline-none"></textarea>
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-4 font-semibold text-white transition hover:bg-slate-800">
                <MessageSquare className="h-4 w-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
