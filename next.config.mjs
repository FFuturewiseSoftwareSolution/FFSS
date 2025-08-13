/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  eslint: {
    ignoreDuringBuilds: true // skip lint if you don't want TS-related errors
  }
  ,
  images: {
    unoptimized: true,
  }
};



export default nextConfig;
