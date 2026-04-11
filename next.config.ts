import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Required for Cloudflare Pages
  },
};

export default nextConfig;