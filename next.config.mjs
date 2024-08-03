  /** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Include your specific option here
  // Make sure to replace `ignoreduringbuilds` with the appropriate setting or plugin configuration
};

export default nextConfig;
