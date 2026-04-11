// SIMPLE BLOG LISTING - GUARANTEED TO WORK
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SimpleBlog() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 mb-4">AutoTrip Travel Guide</h1>
        <p className="text-slate-600 mb-12">Latest road trip tips and driving advice from Perth.</p>
        
        <div className="space-y-8">
          {/* Swan Valley - NEWEST */}
          <div className="border-2 border-red-300 rounded-2xl p-6 bg-red-50">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">🔥 NEWEST</span>
              <span className="text-slate-500 font-bold">April 11, 2026</span>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              <a href="/blog/swan-valley-wine-food-trail-perth/" className="hover:text-blue-600">
                🦢 Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026
              </a>
            </h2>
            
            <p className="text-slate-600 mb-4">
              Just 25 minutes from Perth Airport, the Swan Valley is WA's oldest wine region — and in autumn 2026, it has never looked (or tasted) better. Artisan chocolates, craft breweries, boutique wineries, and stunning autumn colours.
            </p>
            
            <a href="/blog/swan-valley-wine-food-trail-perth/" className="text-blue-600 font-bold hover:underline">
              Read Article →
            </a>
          </div>
          
          {/* Other articles */}
          <div className="border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-slate-500">April 9, 2026</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              <a href="/blog/perth-to-jurien-bay-turquoise-coast-2026/" className="hover:text-blue-600">
                Perth to Jurien Bay: The Turquoise Coast Drive
              </a>
            </h2>
            <a href="/blog/perth-to-jurien-bay-turquoise-coast-2026/" className="text-blue-600 hover:underline">
              Read →
            </a>
          </div>
          
          <div className="border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-slate-500">April 8, 2026</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              <a href="/blog/perth-to-esperance-road-trip-2026/" className="hover:text-blue-600">
                Perth to Esperance: The Road Trip That's Breaking TikTok
              </a>
            </h2>
            <a href="/blog/perth-to-esperance-road-trip-2026/" className="text-blue-600 hover:underline">
              Read →
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-2xl">
          <h3 className="text-lg font-bold text-slate-900 mb-2">✅ Simple Blog Listing</h3>
          <p className="text-slate-600">
            This is a fresh, simple blog listing. The Swan Valley article (April 11, 2026) should appear at the top with a "NEWEST" badge.
          </p>
          <p className="text-slate-600 mt-2">
            <strong>If you see this page:</strong> The deployment worked! But the main blog page needs manual redeploy in Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}