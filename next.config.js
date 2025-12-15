/** @type {import('next').NextConfig} */
const ENV = process.env.NEXT_PUBLIC_ENV;

let basePath = '/Next';
if (ENV === 'test') basePath = '/Next/test';
if (ENV === 'stage') basePath = '/Next/stage';

module.exports = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
};

