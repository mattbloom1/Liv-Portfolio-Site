// On a custom domain (repo variable CUSTOM_DOMAIN) the site lives at the root;
// on <user>.github.io it lives under the repo name.
const domain = process.env.CUSTOM_DOMAIN?.trim();
const repo = domain ? "" : "/Liv-Portfolio-Site";
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
