import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-placeholder.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
