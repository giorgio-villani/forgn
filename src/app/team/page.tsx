import React from 'react'
import Image from 'next/image'
import artists from '@/data/artists.json'

interface TeamMemberProps {
  name: string
  description: string
  imgSrc: string
  imgClass?: string
  reverse?: boolean
  website?: string
}

type Artist = {
  name: string
  picture: string
  description: string
}

type Data = {
  shelley: Artist
  bailey: Artist
  olesia: Artist
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
  imgClass = '',
  reverse = false,
  website = '',
}: TeamMemberProps) => (
  <div
    className={`max-w-screen-xl mx-auto flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center`}
  >
    <div className="w-full md:w-1/2">
      <img src={imgSrc} className={`w-full md:w-auto ${imgClass}`} alt={name} />
    </div>
    <div className="w-full md:w-1/2 flex">
      <div className="px-5">
        <h2 className="mb-4">
          <div
            className="pt-5 font-inter text-4xl md:text-7xl"
            style={{ textWrap: 'balance' }}
          >
            {name}
          </div>
        </h2>
        <p
          className="text-xl font-inter leading-relaxed mb-4"
          style={{ textWrap: 'balance' }}
        >
          {unescapeHtml(description)}
        </p>
        {website && (
          <p className="underline text-customButton ">
            <a href={website}>Website</a>
          </p>
        )}
      </div>
    </div>
  </div>
)

export default function Team() {
  const artistsData: Data = artists

  return (
    <div className="w-full">
      <section className="bg-white py-10">
        {teamMember({
          name: artistsData.shelley.name,
          description: artistsData.shelley.description,
          imgSrc: `./team/${artistsData.shelley.picture}`,
          imgClass: 'min-w-[600px]',
          website:
            'http://sculpturestudieswithshelley.info/Houstons_Premiere_Ceramic_Figure_Sculpture_Studio.html',
        })}
      </section>
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        {teamMember({
          name: artistsData.bailey.name,
          description: artistsData.bailey.description,
          imgSrc: `./team/${artistsData.bailey.picture}`,
          imgClass: 'max-h-[500px]',
          reverse: true,
          website: 'https://linktr.ee/skogsnegl',
        })}
      </section>
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        {teamMember({
          name: artistsData.olesia.name,
          description: artistsData.olesia.description,
          imgSrc: `./team/${artistsData.olesia.picture}`,
          imgClass: 'max-h-[500px]',
        })}
      </section>
    </div>
  )
}
