import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "http2.mlstatic.com"
      }
    ]
  }
  
};

export default nextConfig;
