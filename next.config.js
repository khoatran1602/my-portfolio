/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["assets.codepen.io"],
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
};

module.exports = nextConfig;
