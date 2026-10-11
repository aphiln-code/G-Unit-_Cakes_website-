import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Cloudflare tooling and optional D1 examples belong to the Vinext build.
    tsconfigPath: "tsconfig.next.json",
  },
};

export default nextConfig;
