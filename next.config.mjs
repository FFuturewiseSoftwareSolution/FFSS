/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  eslint: {
    ignoreDuringBuilds: true // skip lint errors during build
  },
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  basePath: '/FFSS', // 👈 replace with your actual repo name
  assetPrefix: '/FFSS/', // ensures assets load from the correct path
};

export default nextConfig;
