/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for GitLab Pages
  trailingSlash: true,
  images: {
    domains: ['mercurysolutions.vn'],
    unoptimized: true,
  },
}

module.exports = nextConfig 