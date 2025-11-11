import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/novel-ads-ui-demo',
  assetPrefix: '/novel-ads-ui-demo/',
};

export default nextConfig;
