import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow mobile testing on the local network
  allowedDevOrigins: ["192.168.0.100", "192.168.0.100:3000", "http://192.168.0.100", "http://192.168.0.100:3000"],
};

export default nextConfig;
