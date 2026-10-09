// next.config.js
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  webpack5: true,
  optimizeFonts: true,
  compress: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  async rewrites() {
    if (!isDev) return [];

    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://tutturunime.my.id/api/v1/:path*',
      },
    ];
  },
};

module.exports = nextConfig;   