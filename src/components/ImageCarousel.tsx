'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ImageCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export default function ImageCarousel({ images, alt, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return (
      <div className={`w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg ${className}`}>
        No Image Available
      </div>
    )
  }

  if (images.length === 1) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={images[0]}
          alt={alt}
          width={750}
          height={500}
          className="object-contain max-w-full rounded-lg"
          unoptimized
        />
      </div>
    )
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          width={750}
          height={500}
          className="object-contain max-w-full transition-transform duration-300 ease-in-out"
          unoptimized
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Image Counter */}
      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Dots Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                index === currentIndex 
                  ? 'border-blue-600' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 