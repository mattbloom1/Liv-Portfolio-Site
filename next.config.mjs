const repo = "/Liv-Portfolio-Site";
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
export default {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? repo : "",
};
