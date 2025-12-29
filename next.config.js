/** @type {import('next').NextConfig} */

// Ye variable hum environment file (.env) se uthayenge
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  
  // 1. BasePath: Isse saare internal links (/about, /contact) theek ho jayenge
  basePath: basePath,

  // 2. AssetPrefix: Isse CSS, JS aur Images ke paths theek ho jayenge
  assetPrefix: basePath,
}

module.exports = nextConfig
