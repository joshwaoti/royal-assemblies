import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "pastorfavouradeola.com" },
      { protocol: "https", hostname: "shop.royalassembly.church" },
      { protocol: "https", hostname: "www.instagram.com" },
      { protocol: "https", hostname: "platform.instagram.com" },
      { protocol: "https", hostname: "www.facebook.com" }
    ]
  }
};

export default nextConfig;
