import ImageGallery from '@/components/ImageGallery'
import { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import { generateVideoSchema } from '@/utils/videoSchema'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Digital Art Classes | Learn and Create',
  description:
    'Join Forgn Studio\'s digital art classes to explore creativity through technology. Perfect for beginners and professionals alike, these workshops inspire and innovate.',
  openGraph: {
    title: 'Digital Art Classes by Forgn Studio',
    description:
      'Discover your creative potential with Forgn Studio\'s digital art classes. Hands-on learning, innovative techniques, and expert guidance await.',
    url: 'https://forgn.art/digital',
    type: 'website',
    images: [
      {
        url: 'https://forgn.art/digital/digital-1.webp',
        width: 1200,
        height: 630,
        alt: 'Digital art creation process at Sesh Coworking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Art Classes by Forgn Studio',
    description: 'Discover your creative potential with Forgn Studio\'s digital art classes. Hands-on learning, innovative techniques, and expert guidance await.',
    images: ['https://forgn.art/digital/digital-1.webp'],
  },
}

export default function Digital() {
  // Video schema markup
  const videoSchema = generateVideoSchema({
    name: 'Digital Art Classes at Forgn Studio',
    description: 'Join our comprehensive digital art classes at FORGN Studio, where innovative techniques meet cutting-edge technology. Led by experienced digital artists, our classes cater to both beginners and advanced practitioners eager to explore the digital art landscape.',
    videoId: 'UAtzguIBgXQ',
    duration: 'PT5M',
    keywords: 'digital art, art classes, forgn studio, art education, digital creativity',
    genre: 'Education'
  })

  const images = [
    {
      src: '/digital/digital-1.webp',
      root: '/digital',
      width: 800,
      height: 600,
      alt: 'Digital art creation process at Sesh Coworking',
    },
    {
      src: '/digital/digital-2.webp',
      root: '/digital',
      width: 800,
      height: 600,
      alt: 'Digital art workshop in progress',
    },
    {
      src: '/digital/digital-3.webp',
      root: '/digital',
      width: 800,
      height: 600,
      alt: 'Students working on digital art projects',
    },
  ]

  return (
    <>
      {/* Video Schema Markup */}
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema),
        }}
      />
      
      <main className="flex flex-col items-center justify-between w-full min-h-screen">
        <Breadcrumbs items={createBreadcrumbs.single('Digital', '/digital')} />
        
        <section className=" max-w-[800px] w-full px-4 text-center">
          <h2 className="mb-6 text-4xl">Innovate with Digital Art</h2>
          <p className="mb-6 text-left text-center text-justify">
            Join our comprehensive digital art classes at FORGN Studio, where
            innovative techniques meet cutting-edge technology. Led by experienced
            digital artists, our classes cater to both beginners and advanced
            practitioners eager to explore the digital art landscape.
          </p>
          
          {/* Video Section */}
          <div className="mb-8">
            <div className="relative w-full max-w-4xl mx-auto" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/UAtzguIBgXQ"
                title="Digital Art Classes at Forgn Studio"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <ImageGallery images={images} />
          <h3 className="text-2xl mb-4">Class Offering:</h3>
          <ul className="list-inside text-justify pb-5">
            <li className="pb-3">
              <strong>Creative Coding:</strong> Explore the intersection of
              programming and art. Learn how to use code as a medium to create
              interactive and generative artworks, blending logic with creativity.
            </li>
            <li className="pb-3">
              <strong>AI Assisted Art:</strong> Discover how artificial
              intelligence can be a tool for artists. Learn to collaborate with AI
              in generating unique, thought-provoking pieces that push the
              boundaries of traditional art.
            </li>
            <li className="pb-3">
              <strong>Visualizations:</strong> Master the art of real-time visual
              creation. Learn to craft dynamic visualizations that respond to
              data, sound, and user interaction, perfect for installations and
              live performances.
            </li>
          </ul>

          <h3 className="text-2xl mb-4">Who Should Attend:</h3>
          <ul className="list-inside text-justify pb-5">
            <li className="pb-3">
              <strong>Beginners:</strong> Those new to digital art who want to
              learn the basics and build a strong foundation.
            </li>
            <li className="pb-3">
              <strong>Intermediate Artists:</strong> Digital artists looking to
              refine their techniques and expand their skill set.
            </li>
            <li className="pb-3">
              <strong>Advanced Practitioners:</strong> Experienced digital artists
              seeking to explore new methods and gain inspiration from industry
              experts.
            </li>
          </ul>
          <h3 className="text-2xl mb-4">What You Will Gain:</h3>
          <ul className="list-inside text-justify pb-5">
            <li className="pb-3">
              <strong>Technical Skills:</strong> Master the essential tools and
              techniques of digital art.
            </li>
            <li className="pb-3">
              <strong>Creative Expression:</strong> Learn how to effectively
              translate your creative vision into digital formats.
            </li>
            <li className="pb-3">
              <strong>Community:</strong> Connect with fellow digital artists and
              become part of the vibrant FORGN Studio community.
            </li>
          </ul>
          <h3 className="text-2xl mb-4">How to Register:</h3>
          <ul className="list-inside text-justify">
            <li className="pb-3">
              <strong>Online Registration:</strong> Register for <a className="text-customButton" href="/workshops/2">
              mailing list 
              </a>{' '} or <a className="text-customButton" href="/workshops/2">
              class
              </a> when scheduled{' '}
              
              to sign up for the classes.
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
