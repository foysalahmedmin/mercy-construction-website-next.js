import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com", "assets1.csnews.com", "foodbrandlogo.com"],
  },
};

export default nextConfig;
