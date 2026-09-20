import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow mobile testing on the local network
  allowedDevOrigins: [
    "192.168.0.101",
    "192.168.0.101:3000",
    "192.168.0.*",
    "192.168.*.*",
    "192.168.0.100",
    "192.168.0.100:3000",
    "192.168.0.103",
    "192.168.0.103:3000",
    "192.168.0.104",
    "192.168.0.104:3000",
    "192.168.0.105",
    "192.168.0.105:3000",
  ],
  async headers() {
    return [
      {
        source: "/:path*.pdf",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: "inline",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: 'inline; filename="Bhavya Darji - Resume.pdf"; filename*=UTF-8\'\'Bhavya%20Darji%20%E2%80%94%20Resume.pdf',
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*Resume.pdf",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: 'inline; filename="Bhavya Darji - Resume.pdf"; filename*=UTF-8\'\'Bhavya%20Darji%20%E2%80%94%20Resume.pdf',
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/resume.pdf",
        destination: "/Bhavya%20Darji%20%E2%80%94%20Resume.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
