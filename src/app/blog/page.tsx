// Simple blog listing that works even with broken builds
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BlogLanding() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 mb-4">AutoTrip Travel Guide</h1>
        <p className="text-slate-600 mb-12">
          Local insights, road trip itineraries, and driving tips from Perth's trusted independent car rental team.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">🚨 Temporary Blog Listing</h2>
          <p className="text-slate-600">
            We're experiencing deployment issues. Here are our latest articles:
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Swan Valley - NEWEST */}
          <article className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-bold rounded-full">NEW</span>
              <span className="text-slate-500">April 11, 2026</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-bold rounded-full">Day Trips</span>
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
          </article>
          
          {/* Jurien Bay */}
          <article className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-slate-500">April 9, 2026</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-bold rounded-full">Turquoise Coast</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              <a href="/blog/perth-to-jurien-bay-turquoise-coast-2026/" className="hover:text-blue-600">
                Perth to Jurien Bay: The Turquoise Coast Drive Everyone Will Be Doing in 2026
              </a>
            </h2>
            <p className="text-slate-600 mb-4">
              Swim with wild sea lions, sandboard the world's tallest coastal dunes, and eat lobster straight off the boat. The Turquoise Coast is WA's best-kept secret — and it's only 3 hours from Perth Airport.
            </p>
            <a href="/blog/perth-to-jurien-bay-turquoise-coast-2026/" className="text-blue-600 font-bold hover:underline">
              Read Article →
            </a>
          </article>
          
          {/* Esperance */}
          <article className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-slate-500">April 8, 2026</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full">Road Trips</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              <a href="/blog/perth-to-esperance-road-trip-2026/" className="hover:text-blue-600">
                Perth to Esperance: The Road Trip That's Breaking TikTok in 2026
              </a>
            </h2>
            <p className="text-slate-600 mb-4">
              Lucky Bay has the whitest sand in Australia, kangaroos that sunbathe on the beach, and water so turquoise it looks photoshopped. This is WA's most underrated drive — and travellers are finally discovering it.
            </p>
            <a href="/blog/perth-to-esperance-road-trip-2026/" className="text-blue-600 font-bold hover:underline">
              Read Article →
            </a>
          </article>
          
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">More Articles</h3>
            <ul className="space-y-3">
              <li><a href="/blog/perth-airport-car-rental-tips-2026/" className="text-blue-600 hover:underline">Perth Airport Car Rental Tips for 2026</a> <span className="text-slate-500 text-sm">(April 7)</span></li>
              <li><a href="/blog/perth-to-broome-highway-1-road-trip/" className="text-blue-600 hover:underline">Perth to Broome: The Drive That Will Change How You See Australia</a> <span className="text-slate-500 text-sm">(April 7)</span></li>
              <li><a href="/blog/albany-coastal-cliffs-2026/" className="text-blue-600 hover:underline">Albany's Coastal Cliffs: Why This is WA's Best Road Trip</a> <span className="text-slate-500 text-sm">(April 7)</span></li>
              <li><a href="/blog/pinnacles-desert-day-trip-perth/" className="text-blue-600 hover:underline">Perth to Pinnacles: The Perfect Day Trip Drive in 2026</a> <span className="text-slate-500 text-sm">(April 5)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}