/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['links.papareact.com'],
    env:['mapbox_key']
  }
}

module.exports = nextConfig
