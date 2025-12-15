/** @type {import('next').NextConfig} */
const ENV = process.env.NEXT_PUBLIC_ENV; // set by pipeline: development/test/stage

let basePath = '/Next'; // default for development
if (ENV === 'test') basePath = '/Next/test';
if (ENV === 'stage') basePath = '/Next/stage';

const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
}

module.exports = nextConfig;
