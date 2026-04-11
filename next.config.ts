import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // We remove 'output: export' because we now use API routes (server-side logic)
  trailingSlash: true,

  // Use webpack instead of Turbopack to fix PostCSS build errors
  experimental: {
    turbo: undefined, // Disable Turbopack
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.getyourguide.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, max-age=0',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
