import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'

import artists from '@/data/artists'

interface TeamMemberProps {
  name: string
  description: string
  imgSrc: string
  imgClass?: string
  reverse?: boolean
  website?: string
}

export const metadata: Metadata = {
  title: 'Forgn Studio Team | From Traditional To Digital',
  description:
    'Get to know the talented individuals behind Forgn Studio. Our team is dedicated to innovating at the intersection of art and technology.',
  openGraph: {
    title: 'Forgn Studio Team',
    description:
      'Meet the creative minds at Forgn Studio who are pushing the boundaries of art and technology.',
    url: 'https://forgn.art/team',
  },
}

const unescapeHtml = (escapedStr: string) => {
  return escapedStr
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
}

const teamMember = ({
  name,
  description,
  imgSrc,
  reverse = false,
  website = '',
}: TeamMemberProps) => (
  <div
    className={`max-w-screen-xl mx-auto font-poppins flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center`}
  >
    <div className="w-full md:w-1/2 p-4">
      {/* <img
        src={imgSrc}
        alt={name}
        className={`w-full h-auto object-cover max-w-full max-h-[500px] object-cover`}
      /> */}
      <Image
        src={imgSrc}
        alt={name}
        width={750}
        height={500}
        className={`w-full h-auto object-cover max-w-full max-h-[500px] object-cover`}
      />
    </div>
    <div className="w-full md:w-1/2 flex p-4">
      <div className="px-5">
        <h2 className="mb-4">
          <div
            className="pt-5 text-4xl md:text-5xl"
            style={{ wordWrap: 'break-word' }}
          >
            {name}
          </div>
        </h2>
        {website && (
          <p className="hover:underline text-customButton pb-3">
            <a href={website}>{website}</a>
          </p>
        )}
        <p
          className="leading-relaxed text-justify mb-4"
          style={{ wordWrap: 'break-word' }}
        >
          {unescapeHtml(description)}
        </p>
      </div>
    </div>
  </div>
)

export default function Team() {
  return (
    <div className="w-full">
      <h1 className="text-5xl text-center font-inter">Team</h1>
      {artists.map((artist, index) => (
        <section
          key={artist.name}
          className={`${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-b from-gray-100 to-white'} py-5 lg:py-10`}
        >
          {teamMember({
            name: artist.name,
            description: artist.description,
            imgSrc: `/team/${artist.picture}`,
            imgClass: 'max-w-full max-h-[500px] object-cover',
            reverse: index % 2 !== 0,
            website: artist.website,
          })}
        </section>
      ))}
    </div>
  )
}
