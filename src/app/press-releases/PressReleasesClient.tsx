'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { createBreadcrumbs } from '@/utils/breadcrumbs'
import pressReleases from '@/data/pressReleases'

function getShortSummary(fullText: string, maxLength: number = 200) {
  // Strip markdown formatting to get plain text
  const plainText = fullText
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/^>\s+/gm, '') // Remove blockquotes
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
  
  // Get the first sentence or truncate
  if (plainText.length > maxLength) {
    return plainText.substring(0, maxLength).trim() + '...'
  }
  
  return plainText
}

export default function PressReleasesClient() {
  const [activeTab, setActiveTab] = useState<'all' | 'press' | 'external'>('all')

  // Separate press releases by category
  const externalReleases = pressReleases.filter(pr => pr.category === 'external')
  const internalReleases = pressReleases.filter(pr => pr.category === 'internal')

  // Filter releases based on active tab
  const getFilteredReleases = () => {
    switch (activeTab) {
      case 'press':
        return internalReleases
      case 'external':
        return externalReleases
      default:
        return pressReleases
    }
  }

  const filteredReleases = getFilteredReleases()

  const PressReleaseCard = ({ pr }: { pr: any }) => (
    <li key={pr.slug} className="bg-white rounded-lg shadow p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
        <h2 className="text-xl sm:text-2xl font-semibold">
          <Link href={`/press-releases/${pr.slug}`} className="text-customButton hover:underline">
            {pr.title}
          </Link>
        </h2>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold self-start ${
          pr.category === 'external' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          {pr.category === 'external' ? 'External Coverage' : 'Press Releases'}
        </span>
      </div>
      <div className="text-gray-500 text-sm mb-2">{pr.date}</div>
      <p className="mb-2 text-gray-700 text-sm sm:text-base">{getShortSummary(pr.summary)}</p>
      <Link href={`/press-releases/${pr.slug}`} className="text-customButton hover:underline text-sm sm:text-base">
        Read more &rarr;
      </Link>
    </li>
  )

  const TabButton = ({ tab, label, count }: { tab: 'all' | 'press' | 'external', label: string, count: number }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
        activeTab === tab
          ? 'bg-customButton text-white shadow-lg'
          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{label.split(' ')[0]}</span>
      <span className={`ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs ${
        activeTab === tab ? 'bg-white text-customButton' : 'bg-gray-100 text-gray-600'
      }`}>
        {count}
      </span>
    </button>
  )

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white min-h-screen">
      <Breadcrumbs items={createBreadcrumbs.single('Press Releases', '/press-releases')} />
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center px-4">Press Releases</h1>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 sm:mb-8 px-4">
          <div className="flex space-x-1 sm:space-x-2 bg-gray-100 p-1 sm:p-2 rounded-xl">
            <TabButton 
              tab="all" 
              label="All" 
              count={pressReleases.length} 
            />
            <TabButton 
              tab="press" 
              label="Press Releases" 
              count={internalReleases.length} 
            />
            <TabButton 
              tab="external" 
              label="External Coverage" 
              count={externalReleases.length} 
            />
          </div>
        </div>

        {/* Content based on active tab */}
        {filteredReleases.length > 0 ? (
          <div className="px-4">
            <ul className="space-y-4 sm:space-y-8">
              {filteredReleases.map((pr) => (
                <PressReleaseCard key={pr.slug} pr={pr} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12 px-4">
            <p className="text-gray-600 text-base sm:text-lg">
              No {activeTab === 'all' ? 'press releases' : activeTab === 'press' ? 'press releases' : 'external coverage'} available at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 