import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/**",
      },
    ],
    // альтернатива, если не нужна оптимизация:
    // unoptimized: true,
  },
};

export default nextConfig;
