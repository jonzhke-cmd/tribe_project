import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Perth Travel Guide | AutoTrip Perth",
  description:
    "Explore Perth and Western Australia with AutoTrip's travel guides. Road trip tips, national park guides, and local driving advice.",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const articles = [
  {
    slug: "swan-valley-wine-food-trail-perth",
    title: "🦢 Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026",
    excerpt: "Just 25 minutes from Perth Airport, the Swan Valley is WA's oldest wine region — and in autumn 2026, it has never looked (or tasted) better. Artisan chocolates, craft breweries, boutique wineries, and stunning autumn colours.",
    date: "April 11, 2026",
    category: "Day Trips",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&auto=format&fit=crop&q=80&v=20260411",
  },
  {
    slug: "perth-to-jurien-bay-turquoise-coast-2026",
    title: "Perth to Jurien Bay: The Turquoise Coast Drive Everyone Will Be Doing in 2026",
    excerpt: "Swim with wild sea lions, sandboard the world's tallest coastal dunes, and eat lobster straight off the boat. The Turquoise Coast is WA's best-kept secret — and it's only 3 hours from Perth Airport.",
    date: "April 9, 2026",
    category: "Turquoise Coast Road Trips",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80&v=20260411",
  },
  {
    slug: "perth-to-esperance-road-trip-2026",
    title: "Perth to Esperance: The Road Trip That's Breaking TikTok in 2026",
    excerpt: "Lucky Bay has the whitest sand in Australia, kangaroos that sunbathe on the beach, and water so turquoise it looks photoshopped. This is WA's most underrated drive — and travellers are finally discovering it.",
    date: "April 8, 2026",
    category: "Road Trips",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80&v=20260411",
  },
  {
    slug: "perth-airport-car-rental-tips-2026",
    title: "Perth Airport Car Rental Tips for 2026",
    excerpt: "Discover the best of Western Australia with these Perth airport car rental tips. Perfect for international visitors and locals alike.",
    date: "April 7, 2026",
    category: "Road Trips",
    image: "/perth-airport-car-rental-sign.jpg?v=20260411",
  },
  {
    slug: "perth-to-broome-highway-1-road-trip",
    title: "Perth to Broome: The Drive That Will Change How You See Australia",
    excerpt: "2,200km of WA's most spectacular coast — pindan cliffs, Ningaloo Reef, whale sharks, and Cable Beach sunsets. The epic Highway 1 road trip everyone is talking about in 2026.",
    date: "April 7, 2026",
    category: "Epic Road Trips",
    image: "/broome-wa-coast.jpg?v=20260411",
  },
  {
    slug: "albany-coastal-cliffs-2026",
    title: "Albany's Coastal Cliffs: Why This is WA's Best Road Trip",
    excerpt: "Forget Margaret River. Albany's coastline makes everything else look like a practice run. Local's guide to the Great Southern route.",
    date: "April 7, 2026",
    category: "Great Southern Road Trips",
    image: "/albany-cliff-view.jpg?v=20260411",
  },
  {
    slug: "pinnacles-desert-day-trip-perth",
    title: "Perth to Pinnacles: The Perfect Day Trip Drive in 2026",
    excerpt: "The Pinnacles Desert is WA's most otherworldly landmark — and it's just 2.5 hours from Perth Airport. Here's exactly how to do the perfect day trip by rental car.",
    date: "April 5, 2026",
    category: "Day Trips",
    image: "/pinnacles-user-photo.jpg?v=20260411",
  },
];

export default function BlogLanding() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      {/* Hero */}
      <div className="bg-slate-50 border-b border-slate-100 pb-20 pt-10">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Travel Guide
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Explore Western Australia.
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Local insights, road trip itineraries, and driving tips from Perth's trusted independent car rental team. We help you make the most of your WA adventure.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-6 py-20 lg:px-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Latest Articles</h2>
          <div className="hidden sm:flex gap-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-full">
              Road Trips
            </button>
            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-full">
              Tips
            </button>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col items-start justify-between"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  unoptimized={article.image.startsWith("http")}
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-900">
                  {article.category}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <Calendar className="h-3.5 w-3.5" />
                <time>{article.date}</time>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-primary transition">
                <Link href={`/blog/${article.slug}/`}>
                  <span className="absolute inset-0"></span>
                  {article.title}
                </Link>
              </h3>

              <p className="text-slate-600 mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              <Link
                href={`/blog/${article.slug}/`}
                className="mt-auto flex items-center gap-1 text-sm font-bold text-primary hover:text-slate-900 transition"
              >
                Read Article{" "}
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Why Rent Section */}
      <div className="container mx-auto px-6 py-12 lg:px-8 bg-slate-50 rounded-[3rem] mt-12">
        <div className="max-w-3xl mx-auto prose prose-slate text-slate-600 text-sm">
          <h2 className="text-slate-900 text-2xl font-bold mb-4">
            Why Rent a Car in Perth?
          </h2>
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