'use client'

import React, { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import workshops from '@/data/workshops'
import Image from 'next/image'

export default function WorkshopList() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  // Function to check if a workshop is upcoming
  const isUpcoming = (workshop: any) => {
    if (!workshop.sessions || !Array.isArray(workshop.sessions)) return false
    
    const currentDate = new Date()
    
    // Check if any session date is in the future
    return workshop.sessions.some((sessionDate: string) => {
      const session = new Date(sessionDate + 'T00:00:00')
      return session >= currentDate
    })
  }

  const filteredWorkshops = workshops.filter((item) => {
    const matchesType = selectedFilter === 'all' || 
                       (selectedFilter === 'upcoming' && isUpcoming(item)) ||
                       (selectedFilter !== 'upcoming' && item.type === selectedFilter)

    const matchesSearchTerm =
      searchTerm === '' ||
      item.title.toLowerCase().includes(searchTerm) ||
      item.instructor.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)

    return matchesType && matchesSearchTerm
  }).sort((a, b) => {
    // Helper function to get the earliest session date
    const getEarliestDate = (workshop: any) => {
      if (!workshop.sessions || !Array.isArray(workshop.sessions) || workshop.sessions.length === 0) {
        return new Date('9999-12-31'); // Far future date for workshops without sessions
      }
      const dates = workshop.sessions.map((date: string) => new Date(date + 'T00:00:00'));
      return new Date(Math.min(...dates.map((d: Date) => d.getTime())));
    };

    const aDate = getEarliestDate(a);
    const bDate = getEarliestDate(b);

    // Sort by date: workshops with dates first (earliest first), then workshops without dates
    return aDate.getTime() - bDate.getTime();
  })

  const uniqueWorkshops = Array.from(
    new Map(workshops.map((workshop) => [workshop.type, workshop])).values()
  )

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="flex justify-center p-4 font-poppins">
      <div className="w-full max-w-[1200px]">
        <Breadcrumbs items={createBreadcrumbs.single('Workshops', '/workshops')} />
        <h1 className="text-5xl mb-6 text-center">Workshop List</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 pr-0 md:pr-4 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search Classes"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="border rounded p-2">
              <h2 className="font-bold text-lg mb-2">All Subjects</h2>
              <ul className="space-y-2 text-customButton">
                <li>
                  <button
                    onClick={() => handleFilterClick('upcoming')}
                    className={`text-left w-full ${
                      selectedFilter === 'upcoming' ? 'font-bold text-blue-600' : ''
                    }`}
                  >
                    {`Upcoming Classes (${workshops.filter(isUpcoming).length})`}
                  </button>
                </li>
                <li className="border-t pt-2 mt-2">
                  <button
                    onClick={() => handleFilterClick('all')}
                    className={`text-left w-full ${
                      selectedFilter === 'all' ? 'font-bold text-blue-600' : ''
                    }`}
                  >
                    {`All Classes (${workshops.length})`}
                  </button>
                </li>
                {uniqueWorkshops.map((cls, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleFilterClick(cls.type)}
                      className={`text-left w-full ${
                        selectedFilter === cls.type ? 'font-bold text-blue-600' : ''
                      }`}
                    >
                      {`${capitalizeFirstLetter(cls.type)} (${workshops.filter((item) => item.type === cls.type).length})`}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <main className="md:w-3/4">
            <div className="flex justify-between mb-4">
              <div className="flex gap-2">
              <button
                onClick={() => handleFilterClick('all')}
                  className={`px-4 py-2 rounded transition-colors ${
                    selectedFilter === 'all' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
              >
                All Classes
              </button>
                <button
                  onClick={() => handleFilterClick('upcoming')}
                  className={`px-4 py-2 rounded transition-colors ${
                    selectedFilter === 'upcoming' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {`Upcoming Classes (${workshops.filter(isUpcoming).length})`}
                </button>
              </div>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                {`My Classes (${workshops.length})`}
              </button>
            </div>
            <div className="space-y-4">
              {filteredWorkshops.map((cls, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded p-4 hover:bg-gray-200"
                >
                  <a
                    href={`/workshops/${cls.slug}`}
                    className="flex flex-col md:flex-row"
                  >
                    {
                      <Image
                        src={cls.images?.[0] || '/forgn_metadata.png'}
                        alt={cls.title}
                        width={300}
                        height={200}
                        className="w-full md:w-1/4 h-auto mb-4 md:mb-0 md:mr-4 rounded object-cover"
                      />
                    }

                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold mb-2">{cls.title}</h2>
                        <p className="text-gray-700 mb-2">
                          {(() => {
                            if (cls.description.length <= 400) {
                              return cls.description;
                            }
                            const truncated = cls.description.slice(0, 400);
                            const lastSpace = truncated.lastIndexOf(' ');
                            return lastSpace > 0 ? truncated.slice(0, lastSpace) + '...' : truncated + '...';
                          })()}
                        </p>
                        <p className="text-left">
                          Sessions:{' '}
                          <span className="text-gray-500">
                            {Array.isArray(cls.sessions) 
                              ? cls.sessions.map((date: string) => new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })).join(', ')
                              : cls.sessions || "To be announced"
                            }
                          </span>
                          <br />
                          Location:{' '}
                          <span className="text-gray-500">{cls.location}</span>
                        </p>
                      </div>
                      {/* <div className="text-right">
                        <span className="text-xl font-bold">{cls.price}</span>
                      </div> */}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
