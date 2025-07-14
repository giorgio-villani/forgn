import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Support Forgn Studio | Donate to Art & Technology',
  description:
    'Help Forgn Studio continue its mission to blend art and technology. Your donation supports innovative programs, artist collaborations, and community workshops.',
  openGraph: {
    title: 'Support Forgn Studio',
    description: 'Join us in supporting a creative future by donating to Forgn Studio\'s art and technology initiatives.',
    url: 'https://forgn.art/donate',
  },
}

export default function Donate() {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white">
      <Breadcrumbs items={createBreadcrumbs.single('Donate', '/donate')} />
      <h1 className="text-5xl text-center mb-8">
        Empower Artists at FORGN Studio
      </h1>
      <section className="max-w-[800px] w-full px-4 text-center">
        <h2 className="mb-6 text-4xl">Advancing Art and Technology</h2>
        <p className="mb-6 text-left text-center text-justify">
          FORGN Studio is dedicated to fostering a vibrant community of artists
          at the intersection of art and technology. Our mission is to support
          creators through a variety of initiatives, including residency
          programs, exhibitions, and free workshops. By focusing on innovation
          and accessibility, we aim to make digital art a powerful tool for
          expression and change.
        </p>

        <h3 className="text-3xl mb-6 text-customHighlight">
          Support Our Cause
        </h3>
        <Image
          className="p-7"
          alt="Fresh Arts"
          src="/donate/fresh-arts.jpg"
          width={400}
          height={300}
        />
        <p className="mb-6 text-left text-center text-justify">
          As a fiscally sponsored project of Fresh Arts, a nonprofit dedicated
          to empowering artists, we benefit from their support in managing our
          operations. Your donations enable us to establish monthly residencies,
          curate innovative exhibitions, and offer free workshops to aspiring
          digital artists. By contributing, you&apos;re directly supporting our
          mission and helping to cultivate a vibrant arts community through
          Fresh Arts.
        </p>

        <a
          href="https://fresharts.app.neoncrm.com/forms/fs-forgn-studio"
          className="text-2xl text-customButton underline mb-6 block"
        >
          Donate now to support our mission!
        </a>

        <h3 className="text-2xl mb-4">Our Programs:</h3>
        <ul className="list-inside text-justify pb-5">
          <li className="pb-3">
            <strong>Residency Program:</strong> Offering monthly residencies
            that provide artists with the time, space, and resources needed to
            explore and expand their creative practices at the convergence of
            art and technology.
          </li>
          <li className="pb-3">
            <strong>Exhibitions:</strong> Curating exhibitions that challenge
            traditional boundaries of art by integrating cutting-edge technology
            and fostering collaboration among artists.
          </li>
          <li className="pb-3">
            <strong>Workshops:</strong> Providing free workshops to make digital
            art more accessible to everyone, especially those new to the field.
            These workshops cover a range of topics from digital illustration to
            AI-driven art.
          </li>
        </ul>

        <h3 className="text-2xl mb-4">Why Your Support Matters:</h3>
        <ul className="list-inside text-justify pb-5">
          <li className="pb-3">
            <strong>Empowering Artists:</strong> Your contributions enable us to
            support artists in their creative journeys, offering them
            opportunities to develop and showcase their work.
          </li>
          <li className="pb-3">
            <strong>Building Community:</strong> We aim to create a vibrant
            community where artists can connect, collaborate, and inspire one
            another.
          </li>
          <li className="pb-3">
            <strong>Expanding Access:</strong> By providing free educational
            resources and workshops, we ensure that digital art is accessible to
            all, regardless of background or experience level.
          </li>
        </ul>
        <p>Support FORGN Studio today and be a part of our mission!</p>
      </section>
    </div>
  )
}
