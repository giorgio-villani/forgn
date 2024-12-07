import type { Metadata } from 'next'
import ImageGallery from '@/components/ImageGallery'

export const metadata: Metadata = {
  title: 'Forgn Studio Gallery | Art and Technology',
  description:
    'Discover the unique fusion of art and technology at Forgn Studio Gallery.',
  openGraph: {
    title: 'Forgn Studio Gallery',
    description:
      'Experience innovative art at the intersection of digital and physical mediums.',
    url: 'https://forgn.art/gallery',
  },
}

const images = [
  { src: 'misty.jpg', width: 1215, height: 1800 },
  { src: 'group.jpg', width: 800, height: 600 },
  { src: 'claire.jpg', width: 1215, height: 1800 },
  { src: 'shelley.jpg', width: 1215, height: 1800 },
  { src: 'wade.jpg', width: 1215, height: 1800 },
  { src: 'thuy_1.jpg', width: 1215, height: 1800 },
  { src: 'will.jpg', width: 1215, height: 1800 },
  { src: 'thuy_2.jpg', width: 203, height: 300 },
]

export default function Gallery() {
  return (
    <div className="w-full flex flex-col font-poppins items-center ">
      <div className="max-w-[1200px]">
        <h1 className="text-5xl text-center ">FORGN Studio Gallery</h1>
        <section className="py-10 max-w-[800px] w-full px-4 text-center">
          <p className="mb-6 text-justify">
            Welcome to the FORGN Studio Gallery, where tradition meets
            innovation. Our gallery is dedicated to showcasing the cutting-edge
            creativity of artists who blend physical and digital art forms.
          </p>
          <div className="flex justify-center pb-5">
            <img src="/gallery/ai_gallery.webp" alt="ai art gallery" />
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
