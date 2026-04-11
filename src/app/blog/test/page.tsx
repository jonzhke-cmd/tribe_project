import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TestBlogPage() {
  const testPosts = [
    {
      id: "swan-valley-wine-food-trail-perth",
      title: "✅ TEST: Swan Valley Article (Should Appear)",
      excerpt: "This is a test to see if the blog listing works.",
      date: "April 11, 2026",
      category: "Test",
    },
    {
      id: "test-article-2",
      title: "Test Article 2",
      excerpt: "Another test article.",
      date: "April 11, 2026",
      category: "Test",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Test Blog Page</h1>
        <p className="mb-8 text-red-600 font-bold">
          This is a test page to debug the blog listing. If you see this, the page is working.
        </p>
        
        <div className="grid gap-6">
          {testPosts.map((post) => (
            <div key={post.id} className="border p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <Link 
                href={`/blog/${post.id}`}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Read Article →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-yellow-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Debug Info:</h2>
          <p><strong>Current Time:</strong> {new Date().toISOString()}</p>
          <p><strong>Page:</strong> /blog/test</p>
          <p><strong>Status:</strong> If you see this, Next.js is rendering this page.</p>
          <p><strong>If Swan Valley appears above:</strong> The blog listing logic works.</p>
          <p><strong>If not:</strong> There's a deeper issue.</p>
        </div>
      </div>
    </div>
  );
}