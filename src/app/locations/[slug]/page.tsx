import React from 'react'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import { getAllLocations, getLocationBySlug, transformStrapiLocation } from '@/utils/strapi'
import Image from 'next/image'

interface LocationPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const strapiLocations = await getAllLocations()
  const locations = strapiLocations.map(transformStrapiLocation)
  
  // Only include active locations in static params
  return locations
    .filter(location => location.active)
    .map((location) => ({
      slug: location.slug,
    }))
}

export default async function LocationPage({ params }: LocationPageProps) {
  try {
    const strapiLocation = await getLocationBySlug(params.slug)
    
    if (!strapiLocation) {
      console.error(`Location not found for slug: ${params.slug}`)
      notFound()
    }
    
    const location = transformStrapiLocation(strapiLocation)
    
    // Check if location is active
    if (!location.active) {
      console.error(`Location ${params.slug} is inactive`)
      notFound()
    }

  return (
    <div className="flex justify-center p-4 font-poppins">
      <div className="w-full max-w-[1200px]">
        <Breadcrumbs items={createBreadcrumbs.location(location.name, `/locations/${location.slug}`)} />
        
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-5xl mb-6 text-center">{location.name}</h1>
          
          {/* Main Image */}
          {location.images && location.images.length > 0 && (
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src={location.images[0]}
                alt={location.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            {location.description && (
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">About This Location</h2>
                <p className="text-gray-700 leading-relaxed">{location.description}</p>
              </div>
            )}

            {/* Additional Images */}
            {location.images && location.images.length > 1 && (
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {location.images.slice(1).map((image, index) => (
                    <div key={index} className="relative h-48 rounded overflow-hidden">
                      <Image
                        src={image}
                        alt={`${location.name} - Photo ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-600 mb-1">Address</h3>
                  <p className="text-gray-800">
                    {location.address}<br />
                    {location.city}, {location.state} {location.zipCode}<br />
                    {location.country}
                  </p>
                </div>
                
                {location.phone && (
                  <div>
                    <h3 className="font-semibold text-gray-600 mb-1">Phone</h3>
                    <p>
                      <a href={`tel:${location.phone}`} className="text-blue-600 hover:underline">
                        📞 {location.phone}
                      </a>
                    </p>
                  </div>
                )}
                
                {location.email && (
                  <div>
                    <h3 className="font-semibold text-gray-600 mb-1">Email</h3>
                    <p>
                      <a href={`mailto:${location.email}`} className="text-blue-600 hover:underline">
                        ✉️ {location.email}
                      </a>
                    </p>
                  </div>
                )}
                
                {location.website && (
                  <div>
                    <h3 className="font-semibold text-gray-600 mb-1">Website</h3>
                    <p>
                      <a href={location.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        🌐 Visit Website
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Location Details</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-600 mb-1">City</h3>
                  <p className="text-gray-800">{location.city}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-600 mb-1">State</h3>
                  <p className="text-gray-800">{location.state}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-600 mb-1">Country</h3>
                  <p className="text-gray-800">{location.country}</p>
                </div>
                
                {location.latitude && location.longitude && (
                  <div>
                    <h3 className="font-semibold text-gray-600 mb-1">Coordinates</h3>
                    <p className="text-gray-800 text-sm">
                      {location.latitude}, {location.longitude}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {location.latitude && location.longitude && (
                <a
                  href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  🗺️ Open in Google Maps
                </a>
              )}
              
              {location.website && (
                <a
                  href={location.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-600 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                >
                  🌐 Visit Website
                </a>
              )}
              
              {location.phone && (
                <a
                  href={`tel:${location.phone}`}
                  className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  📞 Call Now
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  } catch (error) {
    console.error(`Error loading location ${params.slug}:`, error)
    notFound()
  }
}
