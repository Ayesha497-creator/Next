/* eslint-disable */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '/my-landing',
  assetPrefix: '/my-landing',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // <- completely ignore ESLint errors during build
  },
});

