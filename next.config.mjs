import pkg from 'next-compose-plugins';
import dynamic from "next/dynamic";

const ClientOnlyComponent = dynamic(() => import("../components/ClientOnlyComponent"), {
  ssr: false,
});

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
