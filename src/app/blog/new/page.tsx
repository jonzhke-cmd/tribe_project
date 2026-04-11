import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AutoTrip Blog - Latest Articles",
  description: "Latest travel guides and road trip tips from AutoTrip Perth",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const articles = [
  {
    slug: "swan-valley-wine-food-trail-perth",
    title: "🦢 Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026",
    excerpt: "Just 25 minutes from Perth Airport, the Swan Valley is WA's oldest wine region — and in autumn 2026, it has never looked (or tasted) better.",
    date: "April 11, 2026",
    category: "Day Trips",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&auto=format&fit=crop&q=80",
  },
  {
    slug: "perth-to-jurien-bay-turquoise-coast-2026",
    title: "Perth to Jurien Bay: The Turquoise Coast Drive Everyone Will Be Doing in 2026",
    excerpt: "Swim with wild sea lions, sandboard the world's tallest coastal dunes, and eat lobster straight off the boat.",
    date: "April 9, 2026",
    category: "Turquoise Coast Road Trips",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
  },
  {
    slug: "perth-to-esperance-road-trip-2026",
    title: "Perth to Esperance: The Road Trip That's Breaking TikTok in 2026",
    excerpt: "Lucky Bay has the whitest sand in Australia, kangaroos that sunbathe on the beach, and water so turquoise it looks photoshopped.",
    date: "April 8, 2026",
    category: "Road Trips",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
  },
];

export default function NewBlogListing() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900 mb-2">AutoTrip Blog</h1>
        <p className="text-slate-600 mb-12">Latest travel guides and road trip tips</p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded">
                  {article.category}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                <Link href={`/blog/${article.slug}/`} className="hover:text-blue-600">
                  {article.title}
                </Link>
              </h2>
              
              <p className="text-slate-600 mb-4">{article.excerpt}</p>
              
              <Link
                href={`/blog/${article.slug}/`}
                className="inline-flex items-center gap-1 text-blue-600 font-bold hover:gap-2 transition-all"
              >
                Read Article <ChevronRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-xl font-bold text-slate-900 mb-2">✅ Blog Listing Fixed</h3>
          <p className="text-slate-600">
            This is a fresh blog listing page created to bypass Vercel caching issues. 
            The Swan Valley article (April 11, 2026) should now appear at the top.
          </p>
          <p className="text-slate-600 mt-2">
            <Link href="/blog/" className="text-blue-600 font-bold">Back to main blog</Link>
          </p>
        </div>
      </div>
    </div>
  );
}