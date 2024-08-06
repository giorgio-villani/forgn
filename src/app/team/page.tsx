import React from 'react'
import Image from 'next/image'
import artists from '@/data/artists.json'

interface TeamMemberProps {
  name: string
  description: string
  imgSrc: string
  imgClass?: string
  reverse?: boolean
}

type Artist = {
  name: string
  picture: string
  description: string
}

type Data = {
  shelley: Artist
  bailey: Artist
}

const teamMember = ({
  name,
  description,
  imgSrc,
  imgClass = '',
  reverse = false,
}: TeamMemberProps) => (
  <div
    className={`max-w-screen-xl mx-auto flex ${reverse ? 'flex-row-reverse' : ''}`}
  >
    <div className="w-1/2">
      <img src={imgSrc} className={`w-1/2 ${imgClass}`} alt={name} />
    </div>
    <div className="w-1/2 flex">
      <div className="px-5">
        <h2 className="mb-4">
          <div
            className="pt-5 font-inter text-7xl"
            style={{ textWrap: 'balance' }}
          >
            {name}
          </div>
        </h2>
        <p
          className="text-xl font-inter leading-relaxed mb-4"
          style={{ textWrap: 'balance' }}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
)

export default function Team() {
  const artistsData: Data = artists

  return (
    <div className="w-full">
      <section className="bg-white py-20">
        {teamMember({
          name: artistsData.shelley.name,
          description: artistsData.shelley.description,
          imgSrc: `./team/${artistsData.shelley.picture}`,
          imgClass: 'min-w-[600px]',
        })}
      </section>
      <section className="bg-gradient-to-b from-gray-100 to-white py-20">
        {teamMember({
          name: artistsData.bailey.name,
          description: artistsData.bailey.description,
          imgSrc: `./team/${artistsData.bailey.picture}`,
          imgClass: 'max-h-[500px]',
          reverse: true,
        })}
      </section>
      {/* <section className="bg-white py-20">
        {teamMember({
          name: artistsData.bailey.name,
          description: artistsData.bailey.description,
          imgSrc: `./team/${artistsData.bailey.picture}`,
          imgClass: 'max-h-[500px]',
        })}
      </section> */}
    </div>
  )
}
