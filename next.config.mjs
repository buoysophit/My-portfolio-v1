/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/devicons/devicon/**',
      },
      {
        protocol: 'https', 
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/**',
      }
    ],
  },
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
