import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Credits | Forgn Studio',
  description:
    'Acknowledgments and credits for those who contributed to Forgn Studio. Learn about the collaborators, partners, and supporters behind our work.',
  openGraph: {
    title: 'Forgn Studio Credits',
    description:
      'Explore the individuals and organizations who have contributed to Forgn Studio’s journey in art and technology.',
    url: 'https://forgn.art/credits',
  },
}

export default function Credit() {
  return (
    <div className="w-full h-screen flex flex-col font-poppins items-center ">
      <div className="max-w-[1200px]">
        <h1 className="text-5xl text-center pb-5">Credits</h1>
        <h2 className="text-3xl text-center pb-3">Icons</h2>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://www.flaticon.com/free-icons/sculpture"
              title="sculpture icons"
              className="text-customButton hover:underline"
            >
              Sculpture icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/art-gallery"
              title="art gallery icons"
              className="text-customButton hover:underline"
            >
              Art gallery icons created by Made by Made Premium - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/personalize"
              title="personalize icons"
              className="text-customButton hover:underline"
            >
              Personalize icons created by Icon home - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/workshop"
              title="workshop icons"
              className="text-customButton hover:underline"
            >
              Workshop icons created by Buandesign - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/team"
              title="team icons"
              className="text-customButton hover:underline"
            >
              Team icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/cogs"
              title="cogs icons"
              className="text-customButton hover:underline"
            >
              Cogs icons created by Prosymbols Premium - Flaticon
            </a>
          </li>
        </ul>
        <h2 className="text-3xl text-center py-3">Photos</h2>
        <ul className="list-inside list-disc">
          <li>
            Photo by{' '}
            <a
              href="https://www.instagram.com/thomasgrantmacdonald/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customButton hover:underline"
            >
              Thomas MacDonald
            </a>{' '}
            at the <em>&quot;Art of Gen&quot;</em> exhibition, featuring the
            work of{' '}
            <a
              href="https://www.instagram.com/dacaldera/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customButton hover:underline"
            >
              Daniel Calderon
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  )
}
