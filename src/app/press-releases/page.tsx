import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import pressReleases from '@/data/pressReleases'

function getShortSummary(fullText: string, maxLength: number = 200) {
  // Strip markdown formatting to get plain text
  const plainText = fullText
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/^>\s+/gm, '') // Remove blockquotes
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
  
  // Get the first sentence or truncate
  if (plainText.length > maxLength) {
    return plainText.substring(0, maxLength).trim() + '...'
  }
  
  return plainText
}

export const metadata: Metadata = {
  title: 'Press Releases | Forgn Studio',
  description: 'Browse all press releases from Forgn Studio. Stay up to date with our latest news, announcements, and art-tech initiatives in Houston.',
  openGraph: {
    title: 'Press Releases | Forgn Studio',
    description: 'Browse all press releases from Forgn Studio. Stay up to date with our latest news, announcements, and art-tech initiatives in Houston.',
    url: 'https://forgn.art/press-releases',
    type: 'website',
    images: [
      {
        url: 'https://forgn.art/forgn_v2.png',
        width: 1200,
        height: 630,
        alt: 'Forgn Studio Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press Releases | Forgn Studio',
    description: 'Browse all press releases from Forgn Studio. Stay up to date with our latest news, announcements, and art-tech initiatives in Houston.',
    images: ['https://forgn.art/forgn_v2.png'],
  },
}

export default function PressReleasesList() {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.single('Press Releases', '/press-releases')} />
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">Press Releases</h1>
        <ul className="space-y-8">
          {pressReleases.map((pr) => (
            <li key={pr.slug} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/press-releases/${pr.slug}`} className="text-customButton hover:underline">
                  {pr.title}
                </Link>
              </h2>
              <div className="text-gray-500 text-sm mb-2">{pr.date}</div>
              <p className="mb-2 text-gray-700">{getShortSummary(pr.summary)}</p>
              <Link href={`/press-releases/${pr.slug}`} className="text-customButton hover:underline">
                Read more &rarr;
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 