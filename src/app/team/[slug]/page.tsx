import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import artists from '@/data/artists'

// Generate metadata for dynamic artist pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const artist = artists.find((a) => a.slug === params.slug)
  
  if (!artist) {
    return {
      title: 'Artist Not Found | Forgn Studio',
      description: 'The requested artist could not be found.',
    }
  }

  return {
    title: `${artist.name} | Forgn Studio Team`,
    description: artist.description || `Meet ${artist.name}, a talented artist and instructor at Forgn Studio.`,
    openGraph: {
      title: `${artist.name} - Forgn Studio`,
      description: artist.description || `Meet ${artist.name}, a talented artist and instructor at Forgn Studio.`,
      url: `https://forgn.art/team/${params.slug}`,
      type: 'profile',
      images: [
        {
          url: `https://forgn.art/team/${artist.picture}`,
          width: 800,
          height: 800,
          alt: artist.name,
        },
      ],
    },
  }
}

// Generate static params for all artists
export async function generateStaticParams() {
  return artists
    .filter(artist => artist.active !== false)
    .map((artist) => ({
      slug: artist.slug,
    }))
}

interface ArtistPageProps {
  params: {
    slug: string
  }
}

const unescapeHtml = (escapedStr: string) => {
  return escapedStr
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = params
  const artist = artists.find((a) => a.slug === slug)

  if (!artist || artist.active === false) {
    return notFound()
  }

  return (
    <div className="w-full">
      <Breadcrumbs items={createBreadcrumbs.artist(artist.name, `/team/${artist.slug}`)} />
      
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Artist Image */}
          <div className="w-full lg:w-1/3">
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200">
              <Image
                src={`/team/${artist.picture}`}
                alt={artist.name}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Artist Info */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-inter mb-6">{artist.name}</h1>
            
            {artist.website && (
              <div className="mb-6">
                <a 
                  href={artist.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="mr-2">🌐</span>
                  {artist.website}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {unescapeHtml(artist.description)}
              </p>
            </div>

            {/* Back to Team Button */}
            <div className="mt-8">
              <Link 
                href="/team"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 