import pkg from 'next-compose-plugins';

const { withPlugins } = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, 
  },
};

// Compose plugins (optional)
const composedConfig = withPlugins([], nextConfig);

export default composedConfig;
