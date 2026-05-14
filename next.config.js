/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const ENV = process.env.NEXT_PUBLIC_ENV; // set by pipeline: development/test/stage

let basePath = '/Next'; // default for development
if (ENV === 'test') basePath = '/Next/test';
if (ENV === 'stage') basePath = '/Next/stage';

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
  assetPrefix: basePath,
}

module.exports = nextConfig;
