/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/drive/my-drive",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
