import DonationBar from '@/components/DonationBar'
import type { Metadata } from 'next'

const unescapeHtml = (escapedStr: string) => {
  return escapedStr
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

export const metadata: Metadata = {
  title: 'Giving Tuesday Campaign: Donate to Art & Technology',
  description:
    'Support FORGN STUDIO in blending art and technology to build a vibrant, innovative community. Your donation funds artist residencies, collaborative projects, and free educational workshops for the Houston area.',
  openGraph: {
    title: 'Support FORGN STUDIO’s Art & Technology Mission',
    description:
      'Be part of a creative future! Donate to FORGN STUDIO to help fund artist residencies, community events, and transformative art-tech spaces.',
    url: 'https://forgn.art/campaign',
  },
}

export default function Campaign() {
  const StudioHighlight = <span className="text-red-400">FORGN STUDIO</span>

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white">
      <h1 className="text-5xl text-center mb-8">
        Donate to Giving Tuesday Campaign
      </h1>
      <section className="max-w-[800px] w-full px-4 text-center">
        <h2 className="mb-6 text-4xl">
          <a
            href="https://www.givingtuesday.org/"
            className="text-2xl text-customButton underline mb-6 block"
          >
            <img
              className="p-7 mx-auto"
              alt="Fresh Arts"
              src="/campaign/GT_logo_stacked2.png"
            />
          </a>
        </h2>
        <p className="mb-6 text-center">
          {unescapeHtml(
            "Giving Tuesday is a global movement held on the Tuesday after Thanksgiving, encouraging people to give back to their communities through donations, volunteering, and acts of kindness. It's a day dedicated to generosity and supporting nonprofit organizations, aiming to make a positive impact during the holiday season."
          )}
        </p>
        <h3 className="text-3xl mb-6 text-customHighlight">
          Support Our Cause
        </h3>
        <DonationBar goal={5000} current={5165.12} />
        <p className="mb-6 text-center">
          {unescapeHtml(
            `${StudioHighlight} is dedicated to fusing art and technology, building a sustainable community where traditional craftsmanship meets digital innovation. By transforming industrial spaces into dynamic hubs, we create an environment where artists and technologists collaborate, pushing the boundaries of creativity. At the East End Maker Hub in Houston, we offer residency programs, free workshops, and public exhibitions that spotlight this art-tech fusion. Your support fuels initiatives that empower local creators, drive technological exploration in art, and bring cutting-edge installations to the community. Join us in crafting a future where art and technology inspire and transform.`
          )}
        </p>
      </section>
    </div>
  )
}
