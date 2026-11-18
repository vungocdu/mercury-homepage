const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'minova.vn' }],
    unoptimized: true,
  },
}

module.exports = nextConfig
