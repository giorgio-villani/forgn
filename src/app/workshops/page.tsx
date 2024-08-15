'use client'

import React, { useState } from 'react'
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

  const filteredWorkshops = workshops.filter((item) => {
    const matchesType = selectedFilter === 'all' || item.type === selectedFilter

    const matchesSearchTerm =
      searchTerm === '' ||
      item.title.toLowerCase().includes(searchTerm) ||
      item.instructor.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)

    return matchesType && matchesSearchTerm
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
                {uniqueWorkshops.map((cls, index) => (
                  // <div>{cls.type}</div>
                  <li key={index}>
                    <button
                      onClick={() => handleFilterClick(cls.type)}
                      className="text-left w-full"
                    >
                      {`${capitalizeFirstLetter(cls.type)} (${workshops.filter((item) => item.type === cls.type).length})`}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() => handleFilterClick('all')}
                    className="text-left w-full"
                  >{`All (${workshops.length})`}</button>
                </li>
              </ul>
            </div>
          </div>

          <main className="md:w-3/4">
            <div className="flex justify-between mb-4">
              <button
                onClick={() => handleFilterClick('all')}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                All Classes
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded">
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
                    href={`/workshops/${cls.id}`}
                    className="flex flex-col md:flex-row"
                  >
                    <Image
                      src={cls.image}
                      alt={cls.title}
                      className="w-full md:w-1/4 h-auto mb-4 md:mb-0 md:mr-4 rounded object-cover"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold mb-2">{cls.title}</h2>
                        <p className="text-gray-700 mb-2">{cls.description}</p>
                        <p className="text-gray-500">{cls.sessions}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold">{cls.price}</span>
                      </div>
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
