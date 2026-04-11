export default function TestDeploy() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>✅ Vercel Deployment Test</h1>
      <p>If you see this page, Vercel is deploying new builds.</p>
      <p><strong>Time:</strong> {new Date().toISOString()}</p>
      <p><strong>Monkey Mia Article:</strong> Should be at /blog/perth-to-monkey-mia-shark-bay-2026/</p>
      <p><strong>Swan Valley Article:</strong> Should be at /blog/swan-valley-day-trip-perth-2026/</p>
    </div>
  );
}