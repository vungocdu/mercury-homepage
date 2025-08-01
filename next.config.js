/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['minova.vn'],
    unoptimized: true,
  },
}

module.exports = nextConfig 