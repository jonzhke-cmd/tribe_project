// FRESH BLOG PAGE - GUARANTEED TO DEPLOY
export const dynamic = 'force-dynamic';

export default function FreshBlog() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>AutoTrip Blog - FRESH DEPLOYMENT</h1>
      
      <div style={{ background: '#ffebee', border: '2px solid red', padding: '1rem', borderRadius: '1rem', marginBottom: '2rem' }}>
        <h2>🔥 NEWEST: Swan Valley Wine & Food Trail</h2>
        <p><strong>Date:</strong> April 11, 2026</p>
        <p>Just 25 minutes from Perth Airport, the Swan Valley is WA's oldest wine region.</p>
        <a href="/blog/swan-valley-wine-food-trail-perth/" style={{ color: 'blue', fontWeight: 'bold' }}>
          Read Article →
        </a>
      </div>
      
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem' }}>
        <h3>Perth to Jurien Bay</h3>
        <p><strong>Date:</strong> April 9, 2026</p>
        <a href="/blog/perth-to-jurien-bay-turquoise-coast-2026/">Read →</a>
      </div>
      
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem' }}>
        <h3>Perth to Esperance</h3>
        <p><strong>Date:</strong> April 8, 2026</p>
        <a href="/blog/perth-to-esperance-road-trip-2026/">Read →</a>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#e8f5e8', borderRadius: '0.5rem' }}>
        <p><strong>✅ Cloudflare Pages Test Page</strong></p>
        <p>This is a fresh deployment test. If you see this, Next.js is working.</p>
        <p><strong>URL:</strong> https://autotrip.pages.dev</p>
        <p><strong>Time:</strong> {new Date().toISOString()}</p>
      </div>
    </div>
  );
}