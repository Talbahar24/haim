/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimize for mobile performance
  compress: true,
  poweredByHeader: false,
  // Reduce bundle size
  swcMinify: true,
};

module.exports = nextConfig; 