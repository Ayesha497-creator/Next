/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,

  // --- YE DO HISSE ADD KAREIN ---
  eslint: {
    // Ye build ke waqt formatting errors ko ignore karega
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ye typescript ke errors ko ignore karega
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
