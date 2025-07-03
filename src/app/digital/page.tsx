import ImageGallery from '@/components/ImageGallery'
import { Metadata } from 'next'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'

export const metadata: Metadata = {
  title: 'Digital Art Classes | Learn and Create',
  description:
    'Join Forgn Studio\'s digital art classes to explore creativity through technology. Perfect for beginners and professionals alike, these workshops inspire and innovate.',
  openGraph: {
    title: 'Digital Art Classes by Forgn Studio',
    description:
      'Discover your creative potential with Forgn Studio\'s digital art classes. Hands-on learning, innovative techniques, and expert guidance await.',
    url: 'https://forgn.art/digital',
  },
}

const images = [
  { src: 'digital-1.webp', root: 'digital', width: 710, height: 400, alt: 'Digital art creation process at Sesh Coworking' },
  { src: 'digital-2.webp', root: 'digital', width: 710, height: 400, alt: 'Digital art workshop in progress at Sesh Coworking' },
  { src: 'digital-3.webp', root: 'digital', width: 710, height: 400, alt: 'Digital art tools and technology setup at Sesh Coworking' },
  { src: 'digital-4.webp', root: 'digital', width: 710, height: 400, alt: 'Digital art student working on project at Sesh Coworking' },
]

export default function Digital() {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white">
      <Breadcrumbs items={createBreadcrumbs.single('Digital Art Classes', '/digital')} />
      
      <h1 className="text-5xl text-center mb-8">
        Digital Art Classes at FORGN Studio
      </h1>
      <section className=" max-w-[800px] w-full px-4 text-center">
        <h2 className="mb-6 text-4xl">Innovate with Digital Art</h2>
        <p className="mb-6 text-left text-center text-justify">
          Join our comprehensive digital art classes at FORGN Studio, where
          innovative techniques meet cutting-edge technology. Led by experienced
          digital artists, our classes cater to both beginners and advanced
          practitioners eager to explore the digital art landscape.
        </p>
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
    </div>
  )
}
