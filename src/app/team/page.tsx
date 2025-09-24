import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import { getAllTeams, transformStrapiTeam } from '@/utils/strapi'

interface Artist {
  name: string
  slug: string
  picture: string
  description: string
  website?: string
  active?: boolean
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

export default async function Team() {
  // Fetch team data from Strapi
  const strapiTeams = await getAllTeams()
  const teams = strapiTeams.map(transformStrapiTeam)
  
  // Filter to show only active team members and sort by creation date (ascending)
  const activeTeams = teams
    .filter(team => team.active !== false)
    .sort((a, b) => {
      // Find the original Strapi data to get creation date
      const aStrapi = strapiTeams.find(t => t.slug === a.slug)
      const bStrapi = strapiTeams.find(t => t.slug === b.slug)
      
      if (!aStrapi || !bStrapi) return 0
      
      return new Date(aStrapi.createdAt).getTime() - new Date(bStrapi.createdAt).getTime()
    })
  
  return (
    <div className="w-full">
      <Breadcrumbs items={createBreadcrumbs.single('Team', '/team')} />
      <h1 className="text-5xl text-center font-inter mb-12">Our Team</h1>
      
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activeTeams.map((team) => (
            <Link 
              href={`/team/${team.slug}`} 
              key={team.slug}
              className="group block"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden bg-gray-200 rounded-lg" style={{ aspectRatio: '1/1' }}>
                  <Image
                    src={team.picture}
                    alt={team.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {team.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {unescapeHtml(team.description)}
                  </p>
                  {team.website && (
                    <p className="text-blue-500 text-sm mt-2 hover:underline">
                      Visit Website →
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
