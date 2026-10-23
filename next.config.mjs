const repo = "/Liv-Portfolio-Site";
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
export default {
  output: "export",
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? repo : "" },
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? repo : "",
};
