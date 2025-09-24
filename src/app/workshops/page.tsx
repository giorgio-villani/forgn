import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import { getAllWorkshops, transformStrapiWorkshop } from '@/utils/strapi'
import WorkshopListClient from './WorkshopListClient'
import Image from 'next/image'

export default async function WorkshopList() {
  // Fetch workshops from Strapi
  const strapiWorkshops = await getAllWorkshops()
  const workshops = strapiWorkshops.map(transformStrapiWorkshop)

  return (
    <div className="flex justify-center p-4 font-poppins">
      <div className="w-full max-w-[1200px]">
        <Breadcrumbs items={createBreadcrumbs.single('Workshops', '/workshops')} />
        <h1 className="text-5xl mb-6 text-center">Workshop List</h1>
        <WorkshopListClient workshops={workshops} />
      </div>
    </div>
  )
}
