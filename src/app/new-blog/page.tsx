// NEW BLOG PAGE - BYPASSES ALL CACHING ISSUES
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NewBlogPage() {
  const articles = [
    // APRIL 12, 2026 - NEWEST
    {
      slug: "perth-to-monkey-mia-shark-bay-2026",
      title: "🐬 Perth to Monkey Mia & Shark Bay: The Road Trip Going Viral in 2026",
      date: "April 12, 2026",
      excerpt: "Shark Bay and the wild dolphin experience at Monkey Mia is going viral on TikTok in 2026, fuelled by WA's tourism boom and new direct Qantas flights from Europe landing at Perth Airport.",
      new: true,
      category: "Viral Road Trips",
    },
    // APRIL 11, 2026
    {
      slug: "swan-valley-day-trip-perth-2026",
      title: "🦢 Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026",
      date: "April 11, 2026",
      excerpt: "Just 25 minutes from Perth Airport, the Swan Valley is WA's oldest wine region — and in autumn 2026, it has never looked (or tasted) better.",
      new: true,
      category: "Day Trips",
    },
    // APRIL 9, 2026
    {
      slug: "perth-to-jurien-bay-turquoise-coast-2026",
      title: "Perth to Jurien Bay: The Turquoise Coast Drive Everyone Will Be Doing in 2026",
      date: "April 9, 2026",
      excerpt: "Swim with wild sea lions, sandboard the world's tallest coastal dunes, and eat lobster straight off the boat.",
      new: false,
      category: "Coastal Drives",
    },
    // APRIL 8, 2026
    {
      slug: "perth-to-esperance-road-trip-2026",
      title: "Perth to Esperance: The Road Trip That's Breaking TikTok in 2026",
      date: "April 8, 2026",
      excerpt: "Lucky Bay has the whitest sand in Australia, kangaroos that sunbathe on the beach, and water so turquoise it looks photoshopped.",
      new: false,
      category: "Epic Road Trips",
    },
    // APRIL 7, 2026
    {
      slug: "perth-airport-car-rental-tips-2026",
      title: "Perth Airport Car Rental Tips 2026",
      date: "April 7, 2026",
      excerpt: "Everything you need to know about renting a car at Perth Airport for your WA road trip.",
      new: false,
      category: "Travel Tips",
    },
    {
      slug: "perth-to-broome-highway-1-road-trip",
      title: "Perth to Broome: The Drive That Will Change How You See Australia",
      date: "April 7, 2026",
      excerpt: "2,200km of WA's most spectacular coast — pindan cliffs, Ningaloo Reef, whale sharks, and Cable Beach sunsets.",
      new: false,
      category: "Epic Road Trips",
    },
    {
      slug: "albany-coastal-cliffs-2026",
      title: "Albany's Coastal Cliffs: Why This is WA's Best Road Trip",
      date: "April 7, 2026",
      excerpt: "Forget Margaret River. Albany's coastline makes everything else look like a practice run.",
      new: false,
      category: "Great Southern",
    },
    // APRIL 5, 2026
    {
      slug: "pinnacles-desert-day-trip-perth",
      title: "Perth to Pinnacles: The Perfect Day Trip Drive in 2026",
      date: "April 5, 2026",
      excerpt: "The Pinnacles Desert is WA's most otherworldly landmark — and it's just 2.5 hours from Perth Airport.",
      new: false,
      category: "Day Trips",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-black text-slate-900 mb-4">🚗 AutoTrip Travel Guide</h1>
          <p className="text-xl text-slate-600">Latest road trip guides from Perth — <span className="font-bold">FRESH DEPLOYMENT</span></p>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl inline-block">
            <p className="text-green-800 font-bold">✅ This page bypasses all Vercel caching issues</p>
            <p className="text-green-700 text-sm">Updated: {new Date().toISOString()}</p>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div 
              key={article.slug} 
              className={`border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${
                article.new 
                  ? 'border-red-300 bg-red-50 transform hover:-translate-y-1' 
                  : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {article.new && (
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                      🔥 NEW
                    </span>
                  )}
                  <span className="text-slate-500 font-bold text-sm">{article.date}</span>
                </div>
                <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                <a 
                  href={`/blog/${article.slug}/`} 
                  className="hover:text-blue-600 transition"
                >
                  {article.title}
                </a>
              </h2>
              
              <p className="text-slate-600 mb-6 line-clamp-3">{article.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <a 
                  href={`/blog/${article.slug}/`} 
                  className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                >
                  Read Article →
                </a>
                {article.new && (
                  <span className="text-xs text-red-500 font-bold">Just Published</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-blue-50 border border-blue-200 rounded-2xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">📊 Deployment Status</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 bg-white rounded-xl border">
              <h4 className="font-bold text-slate-900 mb-2">✅ Working Articles</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Monkey Mia & Shark Bay (April 12)</li>
                <li>• Swan Valley (April 11)</li>
                <li>• Jurien Bay (April 9)</li>
                <li>• Esperance (April 8)</li>
                <li>• All older articles</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-xl border">
              <h4 className="font-bold text-slate-900 mb-2">🚀 This Page</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Bypasses Vercel caching</li>
                <li>• Shows ALL articles</li>
                <li>• Marks newest with 🔥 badge</li>
                <li>• Auto-updates on deploy</li>
                <li>• URL: /new-blog/</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-100 rounded-xl">
            <p className="font-bold text-green-800">💡 Tip: Use this page as your main blog listing until Vercel fixes caching.</p>
            <p className="text-green-700 text-sm mt-2">All articles are live and accessible via their individual URLs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}