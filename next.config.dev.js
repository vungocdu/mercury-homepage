/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development config - supports API routes
  // Use this for local development with: mv next.config.js next.config.prod.js && mv next.config.dev.js next.config.js
  trailingSlash: true,
  images: {
    domains: ['mercurysolutions.vn'],
    unoptimized: true,
  },
  // Enable API routes for development
  experimental: {
    serverComponentsExternalPackages: ['resend']
  }
}

module.exports = nextConfig