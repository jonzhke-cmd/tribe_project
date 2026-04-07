import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Perth airport car rental tips | AutoTrip",
  description: "${content.substring(0, 150)}...",
  keywords: [
    "${slug.replace(/-/g, ' ')}",
    "Perth car rental",
    "Western Australia road trip",
    "Australia travel 2026"
  ],
};

export default function BlogPost() {
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
          <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> April 7, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> 5 min read
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Western Australia
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Perth airport car rental tips
          </h1>
          
          <p className="text-lg text-slate-700">
            Discover the best of Western Australia with this perth airport car rental tips. Perfect for international visitors and locals alike, this guide covers everything you need for an unforgettable road trip experience in 2026.
          </p>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80"
            alt="Perth airport car rental tips"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Why This Route is Perfect in 2026</h2>
          <p>
            With international tourism to Western Australia growing by 15% year-on-year,
            and new direct flights from Europe and Asia, 2026 is the perfect year to
            explore beyond Perth. This route combines accessibility with authentic
            Australian experiences.
          </p>

          <h2>What You'll Need</h2>
          <ul>
            <li>A reliable rental car (AutoTrip recommends the Hyundai Tucson or similar)</li>
            <li>3-5 days for the full experience</li>
            <li>Camera for the stunning landscapes</li>
            <li>Comfortable walking shoes</li>
          </ul>

          <h2>Best Time to Visit</h2>
          <p>
            Autumn (March-May) offers perfect driving conditions with mild temperatures
            (18-25°C) and fewer crowds. Spring (September-November) is also excellent,
            with wildflowers blooming across the region.
          </p>

          <h2>AutoTrip Tips</h2>
          <p>
            Book your rental car at least 2 weeks in advance for the best rates and
            vehicle selection. Consider adding excess reduction insurance for peace of
            mind on longer drives.
          </p>

          <div className="bg-slate-50 rounded-2xl p-8 my-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Explore?</h3>
            <p className="mb-6">
              AutoTrip makes Perth road trips simple. Pick up your rental car at Perth
              Airport and hit the road within minutes.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-slate-900 rounded-full transition"
            >
              Book Your Perth Rental Car
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}