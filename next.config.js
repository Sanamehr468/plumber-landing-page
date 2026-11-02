/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Performance fix: Next's defaults include 1920, 2048 and 3840px
    // variants. No image on this page is displayed wider than ~900px
    // (hero ~560px, gallery ~400px), so those huge variants were slow
    // to optimise on Vercel on first load and slow to download, with
    // no visible benefit. Cap variants at 1200px.
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [256, 384, 512],
  },
};

module.exports = nextConfig;
