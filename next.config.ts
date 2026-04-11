import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove standalone output for Vercel compatibility
  images: {
    unoptimized: false, // Enable image optimization for Vercel
  },
};

export default nextConfig;