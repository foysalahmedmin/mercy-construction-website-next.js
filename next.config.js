/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com", "assets1.csnews.com", "foodbrandlogo.com"],
  },
}

module.exports = nextConfig
