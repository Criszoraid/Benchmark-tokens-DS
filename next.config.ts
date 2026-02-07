import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Benchmark-tokens-DS",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;