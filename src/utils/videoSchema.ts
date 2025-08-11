interface VideoSchemaProps {
  name: string
  description: string
  videoId: string
  uploadDate?: string
  duration?: string
  keywords?: string
  genre?: string
  publisherName?: string
  publisherUrl?: string
  publisherLogo?: string
}

export function generateVideoSchema({
  name,
  description,
  videoId,
  uploadDate = '2024-01-01T00:00:00+00:00',
  duration = 'PT5M',
  keywords = '',
  genre = 'Education',
  publisherName = 'Forgn Studio',
  publisherUrl = 'https://forgn.art',
  publisherLogo = 'https://forgn.art/logo.png'
}: VideoSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    uploadDate,
    duration,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      url: publisherUrl,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo
      }
    },
    creator: {
      '@type': 'Organization',
      name: publisherName
    },
    keywords,
    genre,
    inLanguage: 'en-US',
    isFamilyFriendly: true
  }
}
