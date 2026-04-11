import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, MapPin } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';

export const metadata: Metadata = {
  title: "Perth Travel Guide | AutoTrip Perth",
  description:
    "Explore Perth and Western Australia with AutoTrip's travel guides. Road trip tips, national park guides, and local driving advice.",
  alternates: { canonical: "https://autotrip-five.vercel.app/blog" },
};

export default function BlogLanding() {
  const featuredPosts = [
    {
      id: "swan-valley-wine-food-trail-perth",
      title: "🦢 Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026",
      excerpt: "Just 25 minutes from Perth Airport, the Swan Valley is WA's oldest wine region — and in autumn 2026, it has never looked (or tasted) better. Artisan chocolates, craft breweries, boutique wineries.",
      date: "April 11, 2026",
      category: "Day Trips",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "perth-to-jurien-bay-turquoise-coast-2026",
      title: "Perth to Jurien Bay: The Turquoise Coast Drive Everyone Will Be Doing in 2026",
      excerpt: "Discover WA's Turquoise Coast — crystal-clear waters, sea lion colonies, and lobster shacks. Perfect weekend road trip from Perth with 2026 local insights.",
      date: "April 9, 2026",
      category: "Coastal Drives",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "perth-to-esperance-road-trip-2026",
      title: "Perth to Esperance: The Road Trip That's Breaking TikTok in 2026",
      excerpt: "Discover why Lucky Bay at Cape Le Grand National Park has gone viral on TikTok. Complete guide to the Perth to Esperance road trip, including car rental tips, must-see stops, and 2026 travel insights.",
      date: "April 8, 2026",
      category: "Viral Destinations",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "perth-airport-car-rental-tips-2026",
      title: "Perth airport car rental tips",
      excerpt: "Discover the best of Western Australia with this perth airport car rental tips. Perfect for international visitors and locals alike, this guide covers everything you need for an unforgettable road trip experience in 2026.",
      date: "April 7, 2026",
      category: "Road Trips",
      image: "/perth-airport-car-rental-sign.jpg"
    },
    {
      id: "perth-to-broome-highway-1-road-trip",
      title: "Perth to Broome: The Drive That Will Change How You See Australia",
      excerpt: "2,200km of WA's most spectacular coast — pindan cliffs, Ningaloo Reef, whale sharks, and Cable Beach sunsets. The epic Highway 1 road trip everyone is talking about in 2026.",
      date: "April 7, 2026",
      category: "Epic Road Trips",
      image: "/broome-wa-coast.jpg"
    },
    {
      id: "albany-coastal-cliffs-2026",
      title: "Albany's Coastal Cliffs: Why This is WA's Best Road Trip (And Everyone's Missing It)",
      excerpt: "Forget Margaret River. Albany's coastline makes everything else look like a practice run. Local's guide to the Great Southern route with proper WA road trip advice.",
      date: "April 7, 2026",
      category: "Great Southern Road Trips",
      image: "/albany-cliff-view.jpg"
    },
    {
      id: "pinnacles-desert-day-trip-perth",
      title: "Perth to Pinnacles: The Perfect Day Trip Drive in 2026",
      excerpt: "The Pinnacles Desert is WA's most otherworldly landmark — and it's just 2.5 hours from Perth Airport. Here's exactly how to do the perfect day trip by rental car.",
      date: "April 5, 2026",
      category: "Day Trips",
      image: "/pinnacles-user-photo.jpg"
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
            AutoTrip offers a curated fleet of late-model rental cars, all maintained to the highest standards. Whether you need a compact city car for navigating Perth's suburbs or a spacious SUV for a family road trip along the Coral Coast, we have the right vehicle for your WA adventure.
          </p>
          <p className="mt-4">
            Our blog provides honest, locally-informed travel advice to help you plan the perfect Western Australia road trip. From hidden beaches to the best winery stops, we share the insights that only locals know.
          </p>
        </div>
      </div>
    </div>
  );
}