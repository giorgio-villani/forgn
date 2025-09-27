'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Workshop {
  id: string
  slug: string
  title: string
  type: string
  category: string
  instructor: string
  description: string
  keywords: string
  location: string
  sessions: string[]
  time: string
  price: string
  discountedPrice?: string
  discountDaysBefore?: number
  images: string[]
  booking: string
  discount_booking: string
  model_fee: string
  materials: string
  materials_list?: string
  active?: boolean
}

interface WorkshopListClientProps {
  workshops: Workshop[]
}

export default function WorkshopListClient({ workshops }: WorkshopListClientProps) {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedSections, setExpandedSections] = useState({
    quickFilters: true,
    categories: false,
    subjects: false
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


  // Function to check if a workshop is upcoming
  const isUpcoming = (workshop: Workshop) => {
    if (!workshop.sessions || !Array.isArray(workshop.sessions)) return false
    
    const currentDate = new Date()
    
    // Check if any session date is in the future
    return workshop.sessions.some((sessionDate: string) => {
      const session = new Date(sessionDate + 'T00:00:00')
      return session >= currentDate
    })
  }

  const filteredWorkshops = workshops.filter((item) => {
    // First filter out inactive workshops
    if (!item.active) {
      return false
    }

    // Handle special filters first
    if (selectedFilter === 'all') {
      const matchesSearchTerm =
        searchTerm === '' ||
        item.title?.toLowerCase().includes(searchTerm) ||
        item.instructor?.toLowerCase().includes(searchTerm) ||
        item.description?.toLowerCase().includes(searchTerm)
      return matchesSearchTerm
    }
    
    if (selectedFilter === 'upcoming') {
      const matchesSearchTerm =
        searchTerm === '' ||
        item.title?.toLowerCase().includes(searchTerm) ||
        item.instructor?.toLowerCase().includes(searchTerm) ||
        item.description?.toLowerCase().includes(searchTerm)
      return isUpcoming(item) && matchesSearchTerm
    }

    // Handle type and category filters
    const matchesFilter = item.type === selectedFilter || item.category === selectedFilter
    
    const matchesSearchTerm =
      searchTerm === '' ||
      item.title?.toLowerCase().includes(searchTerm) ||
      item.instructor?.toLowerCase().includes(searchTerm) ||
      item.description?.toLowerCase().includes(searchTerm)

    return matchesFilter && matchesSearchTerm
  }).sort((a, b) => {
    // Helper function to get the earliest session date
    const getEarliestDate = (workshop: Workshop) => {
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

  // Get unique categories with counts
  const getCategoriesWithCounts = () => {
    const categoryMap = new Map<string, number>()
    
    // Only count active workshops
    workshops.filter(workshop => workshop.active).forEach(workshop => {
      const category = workshop.category
      categoryMap.set(category, (categoryMap.get(category) || 0) + 1)
    })
    
    return Array.from(categoryMap.entries())
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => a.category.localeCompare(b.category))
  }

  const categoriesWithCounts = getCategoriesWithCounts()

  // Get unique subjects with counts
  const getSubjectsWithCounts = () => {
    const subjectMap = new Map<string, number>()
    
    // Only count active workshops
    workshops.filter(workshop => workshop.active).forEach(workshop => {
      const subject = workshop.type
      subjectMap.set(subject, (subjectMap.get(subject) || 0) + 1)
    })
    
    return Array.from(subjectMap.entries())
      .map(([subject, count]) => ({ subject, count }))
      .sort((a, b) => a.subject.localeCompare(b.subject))
  }

  const subjectsWithCounts = getSubjectsWithCounts()

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 pr-0 md:pr-4 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search Classes"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
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
                  onClick={() => handleFilterClick('upcoming')}
                  className={`text-left w-full ${
                    selectedFilter === 'upcoming' ? 'font-bold text-blue-600' : ''
                  }`}
                >
                  {`Upcoming Classes (${workshops.filter(workshop => workshop.active).filter(isUpcoming).length})`}
                </button>
              </li>
              <li className="border-t pt-2 mt-2">
                <button
                  onClick={() => handleFilterClick('all')}
                  className={`text-left w-full ${
                    selectedFilter === 'all' ? 'font-bold text-blue-600' : ''
                  }`}
                >
                  All Classes ({workshops.filter(workshop => workshop.active).length})
                </button>
              </li>
            </ul>
          )}
        </div>

        <div className="border rounded p-2 mb-4">
          <button
            onClick={() => toggleSection('categories')}
            className="flex items-center justify-between w-full font-bold text-lg mb-2 hover:text-blue-600"
          >
            <span>Categories</span>
            <span className={`transform transition-transform ${expandedSections.categories ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {expandedSections.categories && (
            <ul className="space-y-2 text-customButton">
              {categoriesWithCounts.map(({ category, count }) => (
                <li key={category}>
                  <button
                    onClick={() => handleFilterClick(category)}
                    className={`text-left w-full ${
                      selectedFilter === category ? 'font-bold text-blue-600' : ''
                    }`}
                  >
                    {category} ({count})
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border rounded p-2">
          <button
            onClick={() => toggleSection('subjects')}
            className="flex items-center justify-between w-full font-bold text-lg mb-2 hover:text-blue-600"
          >
            <span>All Subjects</span>
            <span className={`transform transition-transform ${expandedSections.subjects ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {expandedSections.subjects && (
            <ul className="space-y-2 text-customButton">
              {subjectsWithCounts.map(({ subject, count }) => (
                <li key={subject}>
                  <button
                    onClick={() => handleFilterClick(subject)}
                    className={`text-left w-full ${
                      selectedFilter === subject ? 'font-bold text-blue-600' : ''
                    }`}
                  >
                    {capitalizeFirstLetter(subject)} ({count})
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
            <button
              onClick={() => handleFilterClick('all')}
              className={`px-4 sm:px-6 py-2 rounded text-xs sm:text-sm font-semibold transition-colors ${
                selectedFilter === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              All Classes
            </button>
            <button
              onClick={() => handleFilterClick('upcoming')}
              className={`px-4 sm:px-6 py-2 rounded text-xs sm:text-sm font-semibold transition-colors ${
                selectedFilter === 'upcoming' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {`Upcoming Classes (${workshops.filter(workshop => workshop.active).filter(isUpcoming).length})`}
            </button>
          </div>
          
          {/* Submit Class Button */}
          <a
            href="/workshops/submit-workshop"
            className="bg-customButton text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 text-center inline-block"
          >
            Submit a Class
          </a>
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
                <Image
                  src={cls.images?.[0] || '/forgn_metadata.png'}
                  alt={cls.title}
                  width={300}
                  height={200}
                  className="w-full md:w-1/4 h-auto mb-4 md:mb-0 md:mr-4 rounded object-cover"
                  unoptimized
                />

                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-2">{cls.title}</h2>
                    <p className="text-gray-700 mb-3">
                      {(() => {
                        if (cls.description.length <= 400) {
                          return cls.description;
                        }
                        const truncated = cls.description.slice(0, 400);
                        const lastSpace = truncated.lastIndexOf(' ');
                        return lastSpace > 0 ? truncated.slice(0, lastSpace) + '...' : truncated + '...';
                      })()}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Sessions:</span>{' '}
                        <span className="text-gray-500">
                          {Array.isArray(cls.sessions) 
                            ? cls.sessions.map((date: string) => new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })).join(', ')
                            : cls.sessions || "To be announced"
                          }
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">Location:</span>{' '}
                        <span className="text-gray-500">{cls.location}</span>
                      </div>
                      {/* <div>
                        <span className="font-medium">Instructor:</span>{' '}
                        <span className="text-gray-500">{cls.instructor}</span>
                      </div>
                      <div>
                        <span className="font-medium">Price:</span>{' '}
                        <span className="text-gray-500">{cls.price}</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
      
    </div>
  )
}

