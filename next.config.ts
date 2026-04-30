import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable static generation for marketing pages
  output: "standalone",
};

export default nextConfig;
