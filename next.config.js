/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      '127.0.0.1',
      'images.unsplash.com',
      'via.placeholder.com',
      'picsum.photos',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'standalone',
  env: {
    // Default environment variables can be set here
    // They will be overridden by actual environment variables if present
  },
}

module.exports = nextConfig
