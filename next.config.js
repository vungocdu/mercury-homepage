/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled for Next.js 15 compatibility
  trailingSlash: true,
  images: {
    domains: ['minova.vn'],
    unoptimized: true,
  },
}

module.exports = nextConfig 