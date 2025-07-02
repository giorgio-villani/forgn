import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'

export const metadata: Metadata = {
  title: 'Hackathons | Forgn Studio',
  description:
    'Join innovative hackathons at Forgn Studio, where creativity meets technology. Participate, learn, and collaborate on cutting-edge projects.',
  openGraph: {
    title: 'Forgn Studio Hackathons',
    description:
      'Explore our hackathons focused on the intersection of art and technology. Connect with like-minded individuals and create groundbreaking projects.',
    url: 'https://forgn.art/hackathons',
  },
}

export default function Hackathon() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.single('Hackathons', '/hackathons')} />
      hackathons
    </main>
  )
}
