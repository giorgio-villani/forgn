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
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-center mb-8">
          Hackathons
        </h1>
        <div className="text-center">
          <p className="text-xl font-inter leading-relaxed mb-8 max-w-3xl mx-auto">
            Join innovative hackathons at Forgn Studio, where creativity meets technology. 
            Participate, learn, and collaborate on cutting-edge projects that push the boundaries 
            of art and digital innovation.
          </p>
          <div className="bg-gray-100 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-inter font-semibold mb-4">Coming Soon</h2>
            <p className="text-lg mb-6">
              We&apos;re planning exciting hackathon events that will bring together artists, 
              technologists, and innovators. Stay tuned for announcements about upcoming 
              opportunities to collaborate and create.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/workshops" 
                className="bg-customButton text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300"
              >
                Explore Workshops
              </a>
              <a 
                href="/calendar" 
                className="border border-customButton text-customButton px-6 py-3 rounded-full hover:bg-customButton hover:text-white transition duration-300"
              >
                View Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
