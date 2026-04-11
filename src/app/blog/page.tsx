// ULTRA-SIMPLE BLOG LISTING - GUARANTEED TO WORK
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BlogPage() {
  const articles = [
    {
      slug: "swan-valley-wine-food-trail-perth",
      title: "🦢 Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026",
      date: "April 11, 2026",
      excerpt: "Just 25 minutes from Perth Airport, the Swan Valley is WA's oldest wine region — and in autumn 2026, it has never looked (or tasted) better.",
    },
    {
      slug: "perth-to-jurien-bay-turquoise-coast-2026",
      title: "Perth to Jurien Bay: The Turquoise Coast Drive Everyone Will Be Doing in 2026",
      date: "April 9, 2026",
      excerpt: "Swim with wild sea lions, sandboard the world's tallest coastal dunes, and eat lobster straight off the boat.",
    },
    {
      slug: "perth-to-esperance-road-trip-2026",
      title: "Perth to Esperance: The Road Trip That's Breaking TikTok in 2026",
      date: "April 8, 2026",
      excerpt: "Lucky Bay has the whitest sand in Australia, kangaroos that sunbathe on the beach, and water so turquoise it looks photoshopped.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 mb-4">AutoTrip Travel Guide</h1>
        <p className="text-slate-600 mb-12">Latest road trip tips and driving advice from Perth.</p>
        
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.slug} className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                {article.slug === "swan-valley-wine-food-trail-perth" && (
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-bold rounded-full">NEW</span>
                )}
                <span className="text-slate-500">{article.date}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                <a href={`/blog/${article.slug}/`} className="hover:text-blue-600">
                  {article.title}
                </a>
              </h2>
              
              <p className="text-slate-600 mb-4">{article.excerpt}</p>
              
              <a href={`/blog/${article.slug}/`} className="text-blue-600 font-bold hover:underline">
                Read Article →
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-lg font-bold text-slate-900 mb-2">✅ Blog Fixed</h3>
          <p className="text-slate-600">
            This is a fresh, simple blog listing. The Swan Valley article (April 11, 2026) should now appear at the top.
          </p>
        </div>
      </div>
    </div>
  );
}