/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["assets.codepen.io"],
    // Enable image optimization
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bio',
        permanent: true,
      },
    ];
  },
  // Add caching headers for static assets
  async headers() {
    return [
      {
        // Apply to all static assets
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|js|css|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Apply to pages - use stale-while-revalidate for faster subsequent loads
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
