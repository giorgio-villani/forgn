import { notFound } from 'next/navigation'
import workshops from '@/data/workshops'
import { Metadata } from 'next'
import WorkshopDetails from '@/components/WorkshopDetails'


// Generate metadata for dynamic workshop pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const workshop = workshops.find((w) => w.slug === params.slug)
  
  if (!workshop) {
    return {
      title: 'Workshop Not Found | Forgn Studio',
      description: 'The requested workshop could not be found.',
    }
  }

  return {
    title: `${workshop.title} | Forgn Studio`,
    description: workshop.description || `Join ${workshop.title} at Forgn Studio. Learn from expert instructors in a hands-on workshop environment.`,
    keywords: `${workshop.keywords || ''}, art workshop, ${workshop.title.toLowerCase()}, art classes, creative workshop, Houston art studio, art education, hands-on learning, creative skills, artistic development, art techniques, creative expression, art instruction, studio art, art fundamentals, creative workshop Houston, art classes Houston, ${workshop.instructor ? `${workshop.instructor} workshop` : 'expert instruction'}`,
    openGraph: {
      title: `${workshop.title} - Forgn Studio`,
      description: workshop.description || `Join ${workshop.title} at Forgn Studio. Learn from expert instructors in a hands-on workshop environment.`,
      url: `https://forgn.art/workshops/${params.slug}`,
      type: 'website',
      images: workshop.images && workshop.images.length > 0 ? [
        {
          url: `https://forgn.art${workshop.images[0]}`,
          width: 1200,
          height: 630,
          alt: workshop.title,
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${workshop.title} - Forgn Studio`,
      description: workshop.description || `Join ${workshop.title} at Forgn Studio. Learn from expert instructors in a hands-on workshop environment.`,
      images: workshop.images && workshop.images.length > 0 ? [`https://forgn.art${workshop.images[0]}`] : undefined,
    },
  }
}

// Generate static params for all workshops
export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.slug,
  }))
}

interface ClassDetailsProps {
  params: {
    slug: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ClassDetails({ params, searchParams }: ClassDetailsProps) {
  const { slug } = params
  const workshop = workshops.find((workshop) => workshop.slug === slug)

  if (!workshop) {
    return notFound()
  }

  return <WorkshopDetails workshop={workshop} searchParams={searchParams} />
} 