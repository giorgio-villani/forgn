import ImageGallery from '@/components/ImageGallery'
import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'

export const metadata: Metadata = {
  title: 'Sculpture Classes | Shape Your Creativity',
  description:
    'Discover the art of sculpture at Forgn Studio. Our classes offer hands-on learning to bring your creative visions to life, from traditional to modern techniques.',
  openGraph: {
    title: 'Sculpture Classes by Forgn Studio',
    description:
      'Unleash your artistic potential with Forgn Studio\'s sculpture classes. Explore diverse materials and techniques with expert guidance.',
    url: 'https://forgn.art/sculpture',
    type: 'website',
    images: [
      {
        url: 'https://forgn.art/sculpture/group.webp',
        width: 1200,
        height: 630,
        alt: 'Group sculpture class at Forgn Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sculpture Classes by Forgn Studio',
    description: 'Unleash your artistic potential with Forgn Studio\'s sculpture classes. Explore diverse materials and techniques with expert guidance.',
    images: ['https://forgn.art/sculpture/group.webp'],
  },
}

const images = [
  { src: 'misty.webp', root: 'sculpture', width: 1215, height: 1800, alt: 'Misty working on sculpture' },
  { src: 'group.webp', root: 'sculpture', width: 800, height: 600, alt: 'Group sculpture class' },
  { src: 'claire.webp', root: 'sculpture', width: 1215, height: 1800, alt: 'Claire creating sculpture artwork' },
  { src: 'shelley.webp', root: 'sculpture', width: 1215, height: 1800, alt: 'Shelley working on terracotta sculpture' },
  { src: 'wade.webp', root: 'sculpture', width: 1215, height: 1800, alt: 'Wade sculpting clay artwork' },
  { src: 'thuy_1.webp', root: 'sculpture', width: 1215, height: 1800, alt: 'Model Thuy having fun between sculpting sessions' },
  { src: 'will.webp', root: 'sculpture', width: 1215, height: 1800, alt: 'Will creating sculpture' },
  { src: 'thuy_2.webp', root: 'sculpture', width: 203, height: 300, alt: 'Thuy modeling in front of a sculpture of her' },
]

export default function Sculpture() {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white">
      <Breadcrumbs items={createBreadcrumbs.single('Sculpture Classes', '/sculpture')} />
      
      <h1 className="text-5xl text-center mb-8">
        Sculpture Classes at FORGN Studio
      </h1>
      <section className="max-w-[800px] w-full px-4 text-center">
        <h2 className="mb-6 text-4xl">Discover the Art of Sculpture</h2>
        <p className="mb-6 text-left text-center text-justify">
          Immerse yourself in the art of sculpture at FORGN Studio, where
          traditional techniques meet innovative creativity. Our classes cater
          to artists of all levels, offering specialized experiences in both
          polymer and terracotta sculpting. Led by experienced sculptors, these
          classes foster exploration and artistic expression in a dynamic
          environment that bridges physical and digital art.
        </p>
        <ImageGallery images={images} />
        <h3 className="text-2xl mb-4">Class Offering:</h3>
        <ul className="list-inside text-justify pb-5">
          <li className="pb-3">
            <strong>Terracotta Sculpture:</strong> Delve into the rich tradition
            of terracotta sculpting. Learn to mold and shape this classic
            material, known for its earthy texture and historical significance,
            while also exploring modern applications.
          </li>
          <li className="pb-3">
            <strong>Live Model Sessions:</strong> Gain hands-on experience by
            sculpting from live models, enhancing your understanding of human
            anatomy and form.
          </li>
          <li className="pb-3">
            <strong>Clay Techniques:</strong> Learn fundamental techniques in
            clay sculpting, including molding, shaping, and detailing.
          </li>
          <li className="pb-3">
            <strong>Form and Space:</strong> Develop your skills in creating
            three-dimensional art, focusing on the interaction between form and
            space.
          </li>
          <li className="pb-3">
            <strong>Personal Guidance:</strong> Receive personalized feedback
            and guidance from instructor to refine your sculpting abilities.
          </li>
        </ul>        
        <h3 className="text-2xl mb-4">How to Register:</h3>
        <ul className="list-inside text-justify">
          <li className="pb-3">
            <strong>Online Registration:</strong> Register for <a className="text-customButton" href="/workshops/0">
            mailing list 
            </a>{' '} or <a className="text-customButton" href="/workshops/0">
            class
            </a> when scheduled{' '}
            
            to sign up for the classes.
          </li>
        </ul>
      </section>
    </div>
  )
}
