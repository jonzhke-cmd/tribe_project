// Cloudflare Pages Functions for Next.js
export default {
  async fetch(request, env, ctx) {
    // This is a placeholder for Cloudflare Pages Functions
    // Next.js will handle routing via the static export
    return new Response('Cloudflare Pages - AutoTrip', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};