import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
  // SKIP Sanity Studio routes na production
  async rewrites() {
    return [
      {
        source: '/y/:path*',  // Sanity Studio admin
        destination: '/404',   // Presmeruj na 404
      },
    ]
  },
  // Pomoc pre Sanity s Next.js 16
  experimental: {
    serverComponentsExternalPackages: ['@sanity/client', '@sanity/image-url']
  }
}

export default nextConfig
