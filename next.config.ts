import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns :[
      {
        protocol: "https",
        hostname: "https://airbnbnew.cybersoft.edu.vn/",
        port: "",
        pathname: "**"
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
