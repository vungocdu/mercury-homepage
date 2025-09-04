/** @type {import('next').NextConfig} */
const nextConfig = {
  // For production deployment to GitLab Pages, use static export
  // For development with API routes, comment out the 'output' line below
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    domains: ['mercurysolutions.vn'],
    unoptimized: true,
  },
  // Enable external packages for server components
  experimental: {
    serverComponentsExternalPackages: ['resend']
  }
}

module.exports = nextConfig 