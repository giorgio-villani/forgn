import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import { getAllLocations, transformStrapiLocation } from '@/utils/strapi'
import LocationListClient from './LocationListClient'

export default async function LocationList() {
  // Fetch locations from Strapi
  const strapiLocations = await getAllLocations()
  const locations = strapiLocations.map(transformStrapiLocation)

  return (
    <div className="flex justify-center p-4 font-poppins">
      <div className="w-full max-w-[1200px]">
        <Breadcrumbs items={createBreadcrumbs.single('Locations', '/locations')} />
        <h1 className="text-5xl mb-6 text-center">Our Locations</h1>
        <LocationListClient locations={locations} />
      </div>
    </div>
  )
}

