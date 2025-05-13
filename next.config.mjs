import { withSentryConfig } from '@sentry/nextjs';
import { withPlugins } from 'next-compose-plugins';

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Compose plugins (you can pass your plugins here if needed)
const composedConfig = withPlugins([], nextConfig);

// Wrap with Sentry
const sentryWrappedConfig = withSentryConfig(
  composedConfig,
  {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);

// Export default for ES modules
export default sentryWrappedConfig;