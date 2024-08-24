/** @type {import('next').NextConfig} */
const nextConfig = {
  // serverExternalPackages: ["@node-rs/argon2"],
  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },
};

export default nextConfig;
