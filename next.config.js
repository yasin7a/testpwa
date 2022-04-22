/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa");

const nextConfig = {
  pwa: {
    disable: !isProd,
    dest: "public",
  },
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
module.exports = nextConfig;
