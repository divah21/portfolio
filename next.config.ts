import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure the (non-public) CV file is bundled into the /api/cv serverless function on Vercel.
  outputFileTracingIncludes: {
    "/api/cv": ["./private/**"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
