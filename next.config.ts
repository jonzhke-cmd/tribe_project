import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // We remove 'output: export' because we now use API routes (server-side logic)
  trailingSlash: true,
  swcMinify: true,
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
