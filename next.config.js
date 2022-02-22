/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // it should be false by default

  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
