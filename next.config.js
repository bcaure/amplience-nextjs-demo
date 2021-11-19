/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    DYNAMIC_CONTENT_HUB_NAME: process.env.DYNAMIC_CONTENT_HUB_NAME,
    DYNAMIC_CONTENT_BASE_URL: process.env.DYNAMIC_CONTENT_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    domains: ['cdn.media.amplience.net'],
  },
}
