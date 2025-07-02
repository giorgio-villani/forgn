'use client'

import React from 'react'
import { BreadcrumbItem } from '@/utils/breadcrumbs'

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const generateStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.href || `https://forgn.art${item.href}`,
      })),
    }
  }

  return (
    <>
      {/* Visual Breadcrumb Navigation */}
      <div className={`w-full max-w-screen-xl mx-auto px-4 pt-4 ${className}`}>
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-customButton transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <span className="text-gray-900 font-medium">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
    </>
  )
}

// Helper function to create common breadcrumb patterns
export const createBreadcrumbs = {
  // Single level: Home > Page
  single: (pageName: string, pagePath: string) => [
    { name: 'Home', href: '/' },
    { name: pageName, href: pagePath },
  ],
  
  // Two levels: Home > Category > Page
  double: (categoryName: string, categoryPath: string, pageName: string, pagePath: string) => [
    { name: 'Home', href: '/' },
    { name: categoryName, href: categoryPath },
    { name: pageName, href: pagePath },
  ],
  
  // Workshop specific: Home > Workshops > Workshop Title
  workshop: (workshopTitle: string, workshopPath: string) => [
    { name: 'Home', href: '/' },
    { name: 'Workshops', href: '/workshops' },
    { name: workshopTitle, href: workshopPath },
  ],
} 