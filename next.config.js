/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ambitious-cactus-1589a7699f.media.strapiapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/workshops/0', destination: '/workshops/sculpture-class-terracotta', permanent: true },
      { source: '/workshops/1', destination: '/workshops/sculpture-class-polymer-clay', permanent: true },
      { source: '/workshops/2', destination: '/workshops/digital-art-101', permanent: true },
      { source: '/workshops/3', destination: '/workshops/video-editing-davinci', permanent: true },
      { source: '/workshops/4', destination: '/workshops/ai-art-stable-diffusion', permanent: true },
      { source: '/workshops/5', destination: '/workshops/website-design-figma', permanent: true },
      { source: '/workshops/6', destination: '/workshops/blender-3d-sculpting', permanent: true },
      { source: '/sculpture', destination: '/blog/sculpture-classes-at-forgn-studio', permanent: true },
      { source: '/digital', destination: '/blog/innovate-with-digital-art', permanent: true },
      { source: '/activations', destination: '/blog/activations', permanent: true },
      { source: '/gallery', destination: '/blog/forgn-the-art-gallery', permanent: true },
    ]
  },
}

module.exports = nextConfig 