import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import pressReleases from '@/data/pressReleases'
import PressReleasesClient from './PressReleasesClient'

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
  return <PressReleasesClient />
} 