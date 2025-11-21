// next.config.ts
import type { NextConfig } from "next";

const BUCKET = process.env.AWS_S3_BUCKET_NAME || "yds-storage";
const REGION = process.env.AWS_REGION || "ap-south-1";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com", pathname: "/**" }],
  },
};

export default nextConfig;
