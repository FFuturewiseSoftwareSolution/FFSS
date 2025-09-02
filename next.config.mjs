/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: isGitHubPages
  },
  ...(isGitHubPages && {
    basePath: '/FFSS',
    assetPrefix: '/FFSS/'
  })
};

export default nextConfig;
