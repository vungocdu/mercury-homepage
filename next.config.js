/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static export to allow API routes and server components
  // output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mercurysolutions.vn',
      },
    ],
    unoptimized: true,
  },
  // Enable external packages for server components
  serverExternalPackages: ['resend']
}

module.exports = nextConfig 