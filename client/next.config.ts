import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  "devIndicators": false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm2025-s3-images.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};
export default nextConfig;
