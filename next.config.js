/** @type {import('next').NextConfig} */
const ENV = process.env.NEXT_PUBLIC_ENV;

let basePath = '/Next';
if (ENV === 'test') basePath = '/Next/test';
if (ENV === 'stage') basePath = '/Next/stage';

const nextConfig = {
  reactStrictMode: true,

  output: 'export',              // ⭐ REQUIRED
  images: { unoptimized: true }, // ⭐ REQUIRED

  basePath,
  assetPrefix: basePath,
};

module.exports = nextConfig;
