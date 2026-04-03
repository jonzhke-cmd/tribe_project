import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Perth Travel Guide & Tips | AutoTrip Car Rental",
  description: "Discover the best road trips, hidden gems, and travel tips for Perth and Western Australia from the local car rental experts.",
  keywords: ["Perth road trips", "WA travel guide", "car rental tips Perth", "Margaret River drive", "Pinnacles desert"],
};

export default function BlogLanding() {
  const featuredPosts = [
    {
      id: "margaret-river-road-trip",
      title: "The Ultimate Margaret River Weekend Drive",
      excerpt: "Everything you need to know about driving from Perth to Margaret River. Best stops, wineries, and coastal views.",
      date: "April 1, 2026",
      category: "Road Trips",
      image: "/margaret-river.jpg"
    },
    {
      id: "perth-airport-rental-guide",
      title: "How to Navigate Perth Airport Car Rentals",
      excerpt: "Skip the counter queues. Our guide to the fastest, most stress-free way to collect your rental car at Perth T1-T4.",
      date: "March 28, 2026",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "wa-national-parks",
      title: "5 WA National Parks Accessible by 2WD",
      excerpt: "Think you need a 4x4 to explore Western Australia? Think again. These spectacular national parks are perfect for our standard fleet.",
      date: "March 15, 2026",
      category: "Destinations",
      image: "/wa-national-parks.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      {/* Hero */}
      <div className="bg-slate-50 border-b border-slate-100 pb-20 pt-10">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Travel Guide</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Explore Western Australia.
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Local insights, road trip itineraries, and driving tips from Perth's trusted independent car rental team. We help you make the most of your WA adventure.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-6 py-20 lg:px-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
          <div className="hidden sm:flex gap-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full">All</button>
            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-full">Road Trips</button>
            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-full">Tips</button>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article key={post.id} className="group flex flex-col items-start justify-between">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-900">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <Calendar className="h-3.5 w-3.5" />
                <time>{post.date}</time>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-primary transition">
                <Link href={`/blog/${post.id}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-slate-600 mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <Link href={`/blog/${post.id}`} className="mt-auto flex items-center gap-1 text-sm font-bold text-primary hover:text-slate-900 transition">
                Read Article <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
      
      {/* SEO Footer Text Block */}
      <div className="container mx-auto px-6 py-12 lg:px-8 bg-slate-50 rounded-[3rem] mt-12">
        <div className="max-w-3xl mx-auto prose prose-slate text-slate-600 text-sm">
          <h2 className="text-slate-900 text-2xl font-bold mb-4">Why Rent a Car in Perth?</h2>
          <p>
            Perth is the sunniest capital city in Australia, and the gateway to some of the world's most spectacular coastal drives. While the city center is well-connected by public transport, exploring the vast landscapes of Western Australia—from the pristine beaches of Margaret River to the ancient Pinnacles Desert—requires the freedom of your own vehicle.
          </p>
          <p className="mt-4">
            At AutoTrip, we specialize in providing reliable, late-model rental cars straight from Perth Airport (T1-T4). As a local, independent operator with over 30 years of experience, we offer transparent pricing, zero hidden fees, and vehicles perfectly suited for WA's unique driving conditions. Whether you need a compact car for city business or an SUV for a family coastal road trip, our fleet is ready.
          </p>
        </div>
      </div>
    </div>
  );
}
