import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.babookos.com',
          },
        ],
        destination: 'https://babookos.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;