import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This will generate a static export suitable for Cloudflare Pages
};

export default nextConfig;
