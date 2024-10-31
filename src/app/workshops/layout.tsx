import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgn Studio Workshops: Explore Art & Technology Classes',
  description:
    'Discover a range of workshops at Forgn Studio. Learn from experts in art and technology with hands-on classes designed for all skill levels.',
  openGraph: {
    title: 'Forgn Studio Workshops',
    description:
      'Explore our workshops to dive into the intersection of art and technology. Join hands-on classes led by experienced artists and technologists.',
    url: 'https://forgn.art/workshops',
  },
}

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
