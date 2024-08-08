import React from 'react'
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
  website?: string
}

type Data = {
  shelley: Artist
  bailey: Artist
  olesia: Artist
  daniel: Artist
  tom: Artist
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
    className={`max-w-screen-xl mx-auto font-poppins flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center`}
  >
    <div className="w-full md:w-1/2 p-4">
      <img
        src={imgSrc}
        className={`w-full h-auto object-cover ${imgClass}`}
        alt={name}
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
          <p className="underline text-customButton pb-3">
            <a href={website}>Teacher Website</a>
          </p>
        )}
        <p
          className="text-lg  leading-relaxed mb-4"
          style={{ wordWrap: 'break-word' }}
        >
          {unescapeHtml(description)}
        </p>
      </div>
    </div>
  </div>
)

export default function Team() {
  const artistsData: Data = artists

  return (
    <div className="w-full">
      <h1 className="text-5xl text-center font-inter">Team</h1>
      <section className="bg-white py-5 lg:py-10">
        {teamMember({
          name: artistsData.shelley.name,
          description: artistsData.shelley.description,
          imgSrc: `./team/${artistsData.shelley.picture}`,
          imgClass: 'max-w-full max-h-[500px] object-cover',
          website: `${artistsData.shelley.website}`,
        })}
      </section>
      <section className="bg-gradient-to-b from-gray-100 to-white py-5 lg:py-10">
        {teamMember({
          name: artistsData.bailey.name,
          description: artistsData.bailey.description,
          imgSrc: `./team/${artistsData.bailey.picture}`,
          imgClass: 'max-w-full max-h-[500px] object-cover',
          reverse: true,
          website: `${artistsData.bailey.website}`,
        })}
      </section>
      <section className="bg-white py-5 lg:py-10">
        {teamMember({
          name: artistsData.olesia.name,
          description: artistsData.olesia.description,
          imgSrc: `./team/${artistsData.olesia.picture}`,
          imgClass: 'max-w-full max-h-[500px] object-cover',
        })}
      </section>
      <section className="bg-gradient-to-b from-gray-100 to-white py-5 lg:py-10">
        {teamMember({
          name: artistsData.daniel.name,
          description: artistsData.daniel.description,
          imgSrc: `./team/${artistsData.daniel.picture}`,
          imgClass: 'max-w-full max-h-[500px] object-cover',
          reverse: true,
          website: `${artistsData.daniel.website}`,
        })}
      </section>
      <section className="bg-gradient-to-b from-gray-100 to-white py-5 lg:py-10">
        {teamMember({
          name: artistsData.tom.name,
          description: artistsData.tom.description,
          imgSrc: `./team/${artistsData.tom.picture}`,
          imgClass: 'max-w-full max-h-[500px] object-cover',
          website: `${artistsData.tom.website}`,
        })}
      </section>
    </div>
  )
}
