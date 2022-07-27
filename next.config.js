/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");
const nextConfig = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
});

module.exports = nextConfig;
