import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import IncubatorClient from './IncubatorClient'

export const metadata: Metadata = {
  title: 'Forgn Incubator | Houston Art-Tech Innovation',
  description:
    'Discover why Houston needs the Forgn Incubator and why East End Maker Hub is the perfect location for transforming art-tech ideas into consumer products.',
  openGraph: {
    title: 'Forgn Incubator - Houston Art-Tech Innovation',
    description:
      'Learn why Houston needs this incubator and why East End Maker Hub is the ideal location for art-tech innovation.',
    url: 'https://forgn.art/incubator',
    type: 'website',
    images: [
      {
        url: 'https://forgn.art/incubator/eemh.png',
        width: 1200,
        height: 630,
        alt: 'East End Maker Hub - Houston Art-Tech Incubator Location',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgn Incubator - Houston Art-Tech Innovation',
    description: 'Learn why Houston needs this incubator and why East End Maker Hub is the ideal location for art-tech innovation.',
    images: ['https://forgn.art/incubator/eemh.png'],
  },
}

export default function Incubator() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.single('Incubator', '/incubator')} />
      <IncubatorClient />
    </main>
  )
} 