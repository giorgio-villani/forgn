/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'forgn.art', // Redirects from non-www to www
          },
        ],
        destination: 'https://www.forgn.art/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
