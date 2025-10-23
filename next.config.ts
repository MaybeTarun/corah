import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["revoicons"],
  images: {
    domains: ["framerusercontent.com"],
  },
};

export default nextConfig;
