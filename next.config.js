/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['links.papareact.com'],
  },
  env:{
    mapbox_key:'pk.eyJ1Ijoic2VnYXlpIiwiYSI6ImNsMHFwbHp6NTI4N2YzYnB3cHdmbWFwaDMifQ.nTceYGPGpNtpix-OYTcvVw'
  },
}

module.exports = nextConfig
