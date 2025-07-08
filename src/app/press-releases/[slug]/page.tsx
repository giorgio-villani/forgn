import { notFound } from 'next/navigation'
import pressReleases from '@/data/pressReleases'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import ReactMarkdown from 'react-markdown'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate()
  const dayWithSuffix = day + (['th','st','nd','rd'][(day%10>3||(day%100>=11&&day%100<=13))?0:day%10]||'th')
  return date.toLocaleString('en-US', { month: 'long' }) + ' ' + dayWithSuffix + ', ' + date.getFullYear()
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const pr = pressReleases.find((r) => r.slug === params.slug)
  if (!pr) {
    return {
      title: 'Press Release Not Found | Forgn Studio',
      description: 'This press release could not be found.',
    }
  }
  return {
    title: `${pr.title} | Forgn Studio`,
    description: pr.summary,
    openGraph: {
      title: `${pr.title} | Forgn Studio`,
      description: pr.summary,
      url: `https://forgn.art/press-releases/${pr.slug}`,
      type: 'article',
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
      title: `${pr.title} | Forgn Studio`,
      description: pr.summary,
      images: ['https://forgn.art/forgn_v2.png'],
    },
  }
}

export default function PressReleaseDetail({ params }: { params: { slug: string } }) {
  const pr = pressReleases.find((r) => r.slug === params.slug)
  if (!pr) return notFound()

  // Format date as 'Month Day, Year'
  const formattedDate = formatDate(pr.date)
  // Compose the new summary
  const summaryWithDateLocation = `${formattedDate}${pr.location ? ', ' + pr.location : ''}\n\n${pr.summary}`

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.single('Press Releases', '/press-releases').concat({ name: pr.title, href: `/press-releases/${pr.slug}` })} />
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-lg p-8 max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold mb-2">{pr.title}</h1>
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-customButton prose-blockquote:pl-4 prose-blockquote:italic prose-a:text-customButton prose-a:no-underline hover:prose-a:underline">
            <ReactMarkdown>{summaryWithDateLocation}</ReactMarkdown>
          </div>
          <div className="mt-8 border-t pt-6 text-sm text-gray-500">
            <strong>Media Contact:</strong><br />
            Forgn Studio<br />
            Giorgio Villani, Founder<br />
            Email: <a href="mailto:forgnstudio@gmail.com" className="text-customButton hover:underline">forgnstudio@gmail.com</a><br />
            Website: <a href="https://forgn.art" className="text-customButton hover:underline">forgn.art</a>
          </div>
        </article>
      </div>
    </div>
  )
} 