 
const nextConfig = {
  webpack5: true,
  optimizeFonts: true,
  compress: true,  
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://tutturunime.my.id/api/v1/:path*',
      },
    ];
  },
}


// next.config.js
  
module.exports = nextConfig
