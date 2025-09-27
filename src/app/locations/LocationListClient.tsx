'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Location {
  id: string
  slug: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
  email?: string
  website?: string
  description?: string
  images: string[]
  latitude?: number
  longitude?: number
  active: boolean
}

interface LocationListClientProps {
  locations: Location[]
}

export default function LocationListClient({ locations }: LocationListClientProps) {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedSections, setExpandedSections] = useState({
    quickFilters: true,
    cities: false,
    states: false
  })

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }


  // Get unique cities with counts
  const getCitiesWithCounts = () => {
    const cityMap = new Map<string, number>()
    
    // Only count active locations
    locations.filter(location => location.active).forEach(location => {
      const city = location.city
      cityMap.set(city, (cityMap.get(city) || 0) + 1)
    })
    
    return Array.from(cityMap.entries())
      .map(([city, count]) => ({ city, count }))
      .sort((a, b) => a.city.localeCompare(b.city))
  }

  const citiesWithCounts = getCitiesWithCounts()

  // Get unique states with counts
  const getStatesWithCounts = () => {
    const stateMap = new Map<string, number>()
    
    // Only count active locations
    locations.filter(location => location.active).forEach(location => {
      const state = location.state
      stateMap.set(state, (stateMap.get(state) || 0) + 1)
    })
    
    return Array.from(stateMap.entries())
      .map(([state, count]) => ({ state, count }))
      .sort((a, b) => a.state.localeCompare(b.state))
  }

  const statesWithCounts = getStatesWithCounts()

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  // Filter locations based on selected filter and search term
  const filteredLocations = locations.filter((item) => {
    // First filter out inactive locations
    if (!item.active) {
      return false
    }

    // Handle special filters first
    if (selectedFilter === 'all') {
      const matchesSearchTerm =
        searchTerm === '' ||
        item.name?.toLowerCase().includes(searchTerm) ||
        item.address?.toLowerCase().includes(searchTerm) ||
        item.city?.toLowerCase().includes(searchTerm) ||
        item.state?.toLowerCase().includes(searchTerm) ||
        item.description?.toLowerCase().includes(searchTerm)
      return matchesSearchTerm
    }

    // Handle city and state filters
    const matchesFilter = item.city === selectedFilter || item.state === selectedFilter
    
    const matchesSearchTerm =
      searchTerm === '' ||
      item.name?.toLowerCase().includes(searchTerm) ||
      item.address?.toLowerCase().includes(searchTerm) ||
      item.city?.toLowerCase().includes(searchTerm) ||
      item.state?.toLowerCase().includes(searchTerm) ||
      item.description?.toLowerCase().includes(searchTerm)

    return matchesFilter && matchesSearchTerm
  })

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <div className="md:w-1/4">
        <div className="border rounded p-2 mb-4">
          <button
            onClick={() => toggleSection('quickFilters')}
            className="flex items-center justify-between w-full font-bold text-lg mb-2 hover:text-blue-600"
          >
            <span>Quick Filters</span>
            <span className={`transform transition-transform ${expandedSections.quickFilters ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {expandedSections.quickFilters && (
            <ul className="space-y-2 text-customButton">
              <li>
                <button
                  onClick={() => handleFilterClick('all')}
                  className={`text-left w-full ${
                    selectedFilter === 'all' ? 'font-bold text-blue-600' : ''
                  }`}
                >
                  All Locations ({locations.filter(location => location.active).length})
                </button>
              </li>
            </ul>
          )}
        </div>

        <div className="border rounded p-2 mb-4">
          <button
            onClick={() => toggleSection('cities')}
            className="flex items-center justify-between w-full font-bold text-lg mb-2 hover:text-blue-600"
          >
            <span>Cities</span>
            <span className={`transform transition-transform ${expandedSections.cities ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {expandedSections.cities && (
            <ul className="space-y-2 text-customButton">
              {citiesWithCounts.map(({ city, count }) => (
                <li key={city}>
                  <button
                    onClick={() => handleFilterClick(city)}
                    className={`text-left w-full ${
                      selectedFilter === city ? 'font-bold text-blue-600' : ''
                    }`}
                  >
                    {city} ({count})
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border rounded p-2">
          <button
            onClick={() => toggleSection('states')}
            className="flex items-center justify-between w-full font-bold text-lg mb-2 hover:text-blue-600"
          >
            <span>States</span>
            <span className={`transform transition-transform ${expandedSections.states ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {expandedSections.states && (
            <ul className="space-y-2 text-customButton">
              {statesWithCounts.map(({ state, count }) => (
                <li key={state}>
                  <button
                    onClick={() => handleFilterClick(state)}
                    className={`text-left w-full ${
                      selectedFilter === state ? 'font-bold text-blue-600' : ''
                    }`}
                  >
                    {state} ({count})
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <main className="md:w-3/4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search locations..."
              value={searchTerm}
              onChange={handleSearch}
              className="px-3 py-2 border rounded-md w-64"
            />
          </div>
          
          <div className="flex items-center">
            {/* Submit Location Button */}
            <a
              href="/locations/submit-location"
              className="bg-customButton text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 text-center inline-block"
            >
              Submit Location
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => (
            <Link key={location.id} href={`/locations/${location.slug}`} className="block">
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
                {location.images && location.images.length > 0 && (
                  <div className="relative h-48">
                    <Image
                      src={location.images[0]}
                      alt={location.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{location.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>{location.address}</p>
                    <p>{location.city}, {location.state} {location.zipCode}</p>
                    <p>{location.country}</p>
                    {location.phone && (
                      <p>📞 {location.phone}</p>
                    )}
                    {location.email && (
                      <p>✉️ {location.email}</p>
                    )}
                    {location.website && (
                      <p>
                        🌐 <span className="text-blue-600">Visit Website</span>
                      </p>
                    )}
                  </div>
                  {location.description && (
                    <p className="mt-3 text-sm text-gray-700 line-clamp-2">{location.description}</p>
                  )}
                  {location.latitude && location.longitude && (
                    <div className="mt-3">
                      <span className="inline-flex items-center text-sm text-blue-600">
                        🗺️ View on Google Maps
                      </span>
                    </div>
                  )}
                  <div className="mt-3 text-sm text-blue-600 font-medium">
                    View Details →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No locations found matching your criteria.</p>
          </div>
        )}
      </main>
      
    </div>
  )
}
