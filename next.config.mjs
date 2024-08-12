/** @type {import('next').NextConfig} */
import { i18n } from './next-i18next.config.mjs';
const nextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'], // Pastikan ini adalah array
  },
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
  images: {
    domains: ['images.cakeresume.com', 'media.cakeresume.com', 'via.placeholder.com'], // Tambahkan domain di sini
  },
};

export default nextConfig;