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
      { source: '/admin', destination: 'https://ambitious-cactus-1589a7699f.strapiapp.com/admin', permanent: true },
    ]
  },
}

module.exports = nextConfig 