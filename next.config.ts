import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // We remove 'output: export' because we now use API routes (server-side logic)
  trailingSlash: true,
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
};

export default nextConfig;
