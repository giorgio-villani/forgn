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

            {artist.instagram && (
              <div className="mb-6">
                <a 
                  href={artist.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @{artist.instagram.split('/').pop()}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <p 
                className="text-gray-700 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: unescapeHtml(artist.description) }}
              />
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