import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "superpower-website.b-cdn.net",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
