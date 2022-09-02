/* eslint-disable import/no-extraneous-dependencies */

// const optimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  reactStrictMode: true,
  env: {
    STYTCH_PUBLIC_TOKEN: process.env.STYTCH_PUBLIC_TOKEN,
    STYTCH_PROJECT_ENV: process.env.STYTCH_PROJECT_ENV,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

module.exports = nextConfig;
