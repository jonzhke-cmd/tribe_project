// SIMPLE BLOG LISTING - No Tailwind, no complex dependencies
// This bypasses all build issues and shows articles immediately

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AutoTrip Blog - Latest Articles",
  description: "Latest travel guides and road trip tips from AutoTrip Perth.",
};

// Simple inline CSS - no Tailwind, no PostCSS
const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background: #ffffff; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
  header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 3rem 0; margin-bottom: 3rem; }
  .header-content { text-align: center; }
  .logo { font-size: 2.5rem; font-weight: 900; margin-bottom: 1rem; }
  .tagline { font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }
  .alert { background: #fef3c7; border: 2px solid #f59e0b; border-radius: 12px; padding: 1.5rem; margin: 2rem auto; max-width: 800px; }
  .alert h2 { color: #92400e; margin-bottom: 0.5rem; }
  .articles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2rem; margin: 3rem 0; }
  .article-card { border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; background: white; }
  .article-card:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
  .article-image { width: 100%; height: 200px; object-fit: cover; }
  .article-content { padding: 1.5rem; }
  .article-category { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.75rem; }
  .article-date { color: #6b7280; font-size: 0.875rem; margin-bottom: 0.5rem; }
  .article-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem; color: #1f2937; }
  .article-excerpt { color: #4b5563; margin-bottom: 1rem; line-height: 1.5; }
  .article-link { color: #3b82f6; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; }
  .article-link:hover { text-decoration: underline; }
  .featured-article { grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; background: linear-gradient(135deg, #f8fafc, #f1f5f9); border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0; }
  .featured-image { height: 300px; object-fit: cover; width: 100%; }
  .featured-content { padding: 2rem; }
  .featured-badge { background: #dc2626; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem; display: inline-block; }
  footer { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; }
  .back-link { display: inline-block; margin-top: 1rem; color: #3b82f6; text-decoration: none; font-weight: 600; }
  .back-link:hover { text-decoration: underline; }
  @media (max-width: 768px) {
    .articles-grid { grid-template-columns: 1fr; }
    .featured-article { grid-template-columns: 1fr; }
    .featured-image { height: 200px; }
    .logo { font-size: 2rem; }
  }
`;

const articles = [
  {
    id: "swan-valley-wine-food-trail-perth",
    title: "🦢 Swan Valley Wine & Food Trail: Perth's Best Day Trip in 2026",
    excerpt: "Just 25 minutes from Perth Airport, the Swan Valley is WA's oldest wine region — and in autumn 2026, it has never looked (or tasted) better. Artisan chocolates, craft breweries, boutique wineries, and stunning autumn colours.",
    date: "April 11, 2026",
    category: "Day Trips",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "perth-to-jurien-bay-turquoise-coast-2026",
    title: "Perth to Jurien Bay: The Turquoise Coast Drive Everyone Will Be Doing in 2026",
    excerpt: "Discover WA's Turquoise Coast — crystal-clear waters, sea lion colonies, and lobster shacks. Perfect weekend road trip from Perth with 2026 local insights.",
    date: "April 9, 2026",
    category: "Coastal Drives",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: "perth-to-esperance-road-trip-2026",
    title: "Perth to Esperance: The Road Trip That's Breaking TikTok in 2026",
    excerpt: "Discover why Lucky Bay at Cape Le Grand National Park has gone viral on TikTok. Complete guide to the Perth to Esperance road trip, including car rental tips and must-see stops.",
    date: "April 8, 2026",
    category: "Viral Destinations",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=80",
    featured: false
  },
  {
    id: "perth-airport-car-rental-tips-2026",
    title: "Perth Airport Car Rental Tips for 2026",
    excerpt: "Discover the best of Western Australia with these Perth airport car rental tips. Perfect for international visitors and locals alike.",
    date: "April 7, 2026",
    category: "Road Trips",
    image: "/perth-airport-car-rental-sign.jpg",
    featured: false
  },
  {
    id: "perth-to-broome-highway-1-road-trip",
    title: "Perth to Broome: The Drive That Will Change How You See Australia",
    excerpt: "2,200km of WA's most spectacular coast — pindan cliffs, Ningaloo Reef, whale sharks, and Cable Beach sunsets.",
    date: "April 7, 2026",
    category: "Epic Road Trips",
    image: "/broome-wa-coast.jpg",
    featured: false
  },
  {
    id: "albany-coastal-cliffs-2026",
    title: "Albany's Coastal Cliffs: Why This is WA's Best Road Trip",
    excerpt: "Forget Margaret River. Albany's coastline makes everything else look like a practice run. Local's guide to the Great Southern route.",
    date: "April 7, 2026",
    category: "Great Southern Road Trips",
    image: "/albany-cliff-view.jpg",
    featured: false
  },
  {
    id: "pinnacles-desert-day-trip-perth",
    title: "Perth to Pinnacles: The Perfect Day Trip Drive in 2026",
    excerpt: "The Pinnacles Desert is WA's most otherworldly landmark — and it's just 2.5 hours from Perth Airport. Here's exactly how to do the perfect day trip by rental car.",
    date: "April 5, 2026",
    category: "Day Trips",
    image: "/pinnacles-user-photo.jpg",
    featured: false
  }
];

export default function SimpleBlogPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      <header>
        <div className="container header-content">
          <div className="logo">AutoTrip Perth</div>
          <p className="tagline">Local insights, road trip itineraries, and driving tips from Perth's trusted independent car rental team.</p>
        </div>
      </header>

      <div className="container">
        <div className="alert">
          <h2>📝 Simple Blog Listing</h2>
          <p>This is a simplified version of the blog listing while we fix the main system.</p>
          <p><strong>Latest articles are below. All articles are fully accessible.</strong></p>
        </div>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "2rem", textAlign: "center" }}>
          Latest Travel Guides
        </h1>

        <div className="articles-grid">
          {articles.map((article) => (
            article.featured ? (
              <article key={article.id} className="featured-article">
                <img src={article.image} alt={article.title} className="featured-image" />
                <div className="featured-content">
                  <span className="featured-badge">NEWEST</span>
                  <span className="article-category">{article.category}</span>
                  <div className="article-date">{article.date}</div>
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <Link href={`/blog/${article.id}/`} className="article-link">
                    Read Full Article →
                  </Link>
                </div>
              </article>
            ) : (
              <article key={article.id} className="article-card">
                <img src={article.image} alt={article.title} className="article-image" />
                <div className="article-content">
                  <span className="article-category">{article.category}</span>
                  <div className="article-date">{article.date}</div>
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <Link href={`/blog/${article.id}/`} className="article-link">
                    Read Article →
                  </Link>
                </div>
              </article>
            )
          ))}
        </div>

        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>Looking for more travel inspiration?</p>
          <Link 
            href="/" 
            style={{ display: "inline-block", background: "#3b82f6", color: "white", padding: "1rem 2rem", borderRadius: "9999px", textDecoration: "none", fontWeight: 600 }}
          >
            Book Your Perth Car Rental →
          </Link>
        </div>
      </div>

      <footer>
        <div className="container">
          <p>© 2026 AutoTrip Perth. Simple blog listing version.</p>
          <Link href="/" className="back-link">← Back to AutoTrip Home</Link>
        </div>
      </footer>
    </>
  );
}