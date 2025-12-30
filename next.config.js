/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  // assetPrefix ko hata dein ya comment kar dein
  // assetPrefix: basePath, 
  
  trailingSlash: true, // Yeh add karein taake redirect loop khatam ho

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
