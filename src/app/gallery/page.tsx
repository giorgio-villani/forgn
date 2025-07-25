import type { Metadata } from 'next'
import ImageGallery from '@/components/ImageGallery'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'

export const metadata: Metadata = {
  title: 'Forgn Studio Gallery | Art and Technology',
  description:
    'Discover the unique fusion of art and technology at Forgn Studio Gallery.',
  openGraph: {
    title: 'Forgn Studio Gallery',
    description:
      'Experience innovative art at the intersection of digital and physical mediums.',
    url: 'https://forgn.art/gallery',
    type: 'website',
    images: [
      {
        url: 'https://forgn.art/gallery/studio-02.webp',
        width: 1200,
        height: 630,
        alt: 'Art exhibition space at Forgn Studio gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forgn Studio Gallery',
    description: 'Experience innovative art at the intersection of digital and physical mediums.',
    images: ['https://forgn.art/gallery/studio-02.webp'],
  },
}

const images = [
  {
    src: 'studio-01.webp',
    root: 'gallery',
    width: 4080,
    height: 3072,
    alt: 'Forgn Studio gallery space showcasing art and technology fusion',
  },
  {
    src: 'studio-02.webp',
    root: 'gallery',
    width: 4080,
    height: 3072,
    alt: 'Art exhibition space at Forgn Studio gallery',
  },
  {
    src: 'studio-03.webp',
    root: 'gallery',
    width: 4080,
    height: 3072,
    alt: 'Gallery installation featuring innovative art pieces',
  },
  // { src: './gallery/studio-04.webp', root: 'gallery', width: 4080, height: 3072 },
  // { src: './gallery/studio-05.webp', root: 'gallery', width: 4080, height: 3072 },
  {
    src: 'studio-06.webp',
    root: 'gallery',
    width: 4080,
    height: 3072,
    alt: 'Contemporary art display in Forgn Studio gallery',
  },
  {
    src: 'studio-07.webp',
    root: 'gallery',
    width: 4080,
    height: 3072,
    alt: 'Gallery space featuring digital and physical art integration',
  },
  {
    src: 'studio-08.webp',
    root: 'gallery',
    width: 4080,
    height: 3072,
    alt: 'Art exhibition showcasing technology-enhanced artwork',
  },
  {
    src: 'studio-09.webp',
    root: 'gallery',
    width: 4080,
    height: 3072,
    alt: 'Gallery interior with innovative art installations',
  },
  {
    src: 'studio-10.webp',
    root: 'gallery',
    width: 4080,
    height: 3072,
    alt: 'Forgn Studio gallery featuring cutting-edge art and technology',
  },
]

export default function Gallery() {
  return (
    <div className="w-full flex flex-col font-poppins items-center ">
      <Breadcrumbs items={createBreadcrumbs.single('Gallery', '/gallery')} />
      <div className="max-w-[1200px]">
        <h1 className="text-5xl text-center ">FORGN Studio Gallery</h1>
        <section className="py-10 max-w-[800px] w-full px-4 text-center">
          <p className="mb-6 text-justify">
            Welcome to the FORGN Studio Gallery, where tradition meets
            innovation. Our gallery is dedicated to showcasing the cutting-edge
            creativity of artists who blend physical and digital art forms.
          </p>
          <ImageGallery images={images} />
          <div className="flex justify-center pb-5">
            {/* <img src="/gallery/ai_gallery.webp" alt="ai art gallery" /> */}
          </div>
          <h2 className="mb-6 text-4xl">Purpose of the Gallery:</h2>
          <ul className="list-inside text-justify pb-5">
            <li className="pb-3">
              <strong>Highlighting Artists:</strong> Featuring visionary artists
              who excel in merging traditional craftsmanship with digital
              technology.
            </li>
            <li className="pb-3">
              <strong>Innovative Artworks:</strong> Presenting a unique fusion
              of physical and digital art that pushes the boundaries of
              creativity.
            </li>
            <li className="pb-3">
              <strong>Community Engagement:</strong> Building a vibrant network
              of artists, technologists, and art enthusiasts.
            </li>
            <li className="pb-3">
              <strong>Educational Opportunities:</strong> Offering insights into
              the future of art and technology through exhibitions and events.
            </li>
          </ul>
          <p className="mb-6 text-justify">
            Our gallery is more than just a space to view art; it is a hub for
            inspiration and collaboration. We aim to foster a community where
            artists can explore new possibilities and audiences can experience
            the future of art.
          </p>
          <p className="mb-6 text-justify">
            Visit the FORGN Studio Gallery to witness the transformative power
            of art and technology. Explore our exhibitions, engage with the art,
            and be inspired by the innovative works on display.
          </p>
        </section>
      </div>
    </div>
  )
}
