import { notFound } from 'next/navigation'
import workshops from '@/data/workshops'
import { Metadata } from 'next'
import WorkshopDetails from '@/components/WorkshopDetails'

// Generate metadata for dynamic workshop pages
export async function generateMetadata({ params }: { params: { workshopId: string } }): Promise<Metadata> {
  const workshop = workshops.find((w) => w.id === params.workshopId)
  
  if (!workshop) {
    return {
      title: 'Workshop Not Found | Forgn Studio',
      description: 'The requested workshop could not be found.',
    }
  }

  return {
    title: `${workshop.title} | Forgn Studio`,
    description: workshop.description || `Join ${workshop.title} at Forgn Studio. Learn from expert instructors in a hands-on workshop environment.`,
    keywords: `art workshop, ${workshop.title.toLowerCase()}, art classes, creative workshop, Houston art studio, art education, hands-on learning, ${workshop.instructor ? `${workshop.instructor} workshop` : 'expert instruction'}`,
    openGraph: {
      title: `${workshop.title} - Forgn Studio`,
      description: workshop.description || `Join ${workshop.title} at Forgn Studio. Learn from expert instructors in a hands-on workshop environment.`,
      url: `https://forgn.art/workshops/${params.workshopId}`,
      type: 'website',
      images: workshop.image ? [
        {
          url: `https://forgn.art${workshop.image}`,
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
      images: workshop.image ? [`https://forgn.art${workshop.image}`] : undefined,
    },
  }
}

// Generate static params for all workshops
export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    workshopId: workshop.id,
  }))
}

interface ClassDetailsProps {
  params: {
    workshopId: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ClassDetails({ params, searchParams }: ClassDetailsProps) {
  const { workshopId } = params
  const workshop = workshops.find((workshop) => workshop.id === workshopId)

  if (!workshop) {
    return notFound()
  }

  return <WorkshopDetails workshop={workshop} searchParams={searchParams} />
}
