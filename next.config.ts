import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com", // Servidor de Mercado Libre
        pathname: "/**", // Aceptar cualquier imagen desde esta URL
      },
      {
        protocol: "https",
        hostname: "meli.com",
        pathname: "/**",
      }
    ]
  }
  
};

export default nextConfig;
