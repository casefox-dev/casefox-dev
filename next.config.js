/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/casefox.in/',
  basePath: '/casefox.in',
}

module.exports = nextConfig