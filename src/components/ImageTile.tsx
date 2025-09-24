'use client'

import { useState, useEffect } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'

interface ImageTileProps {
  images: string[]
  alt?: string
  className?: string
}

export default function ImageTile({ images, alt = 'Image gallery', className = '' }: ImageTileProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const [photos, setPhotos] = useState<any[]>([])

  useEffect(() => {
    // Load images to get their natural dimensions
    const loadImages = async () => {
      const loadedPhotos = await Promise.all(
        images.map(async (src, index) => {
          return new Promise((resolve) => {
            const img = new Image()
            img.onload = () => {
              resolve({
                src,
                width: img.naturalWidth,
                height: img.naturalHeight,
                alt: `${alt} ${index + 1}`,
              })
            }
            img.onerror = () => {
              // Fallback dimensions if image fails to load
              resolve({
                src,
                width: 1200,
                height: 800,
                alt: `${alt} ${index + 1}`,
              })
            }
            img.src = src
          })
        })
      )
      setPhotos(loadedPhotos)
    }

    if (images && images.length > 0) {
      loadImages()
    }
  }, [images, alt])

  if (!images || images.length === 0) {
    return (
      <div className={`w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg ${className}`}>
        No Images Available
      </div>
    )
  }

  if (photos.length === 0) {
    return (
      <div className={`w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg ${className}`}>
        Loading images...
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      <div >
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={300}
          spacing={4}
          onClick={({ index: currentIndex }) => setLightboxIndex(currentIndex)}
        />
      </div>
      
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={photos}
        index={lightboxIndex}
      />
    </div>
  )
}
