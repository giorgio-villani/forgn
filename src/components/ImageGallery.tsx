'use client'

import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { RenderPhotoProps, RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'

interface Image {
  src: string
  root: string
  width: number
  height: number
  alt?: string
}

interface GalleryProps {
  images: Image[]
}

function assetLink(asset: string, root: string, width: number) {
  // Optimize image size based on display context
  const optimizedWidth = Math.min(width, 1200) // Cap at 1200px for performance
  return `./${root}/${encodeURIComponent(asset)}?w=${optimizedWidth}&q=75`
}

// Note: Alt text should be provided in the images array when using this component

export default function Gallery({ images }: GalleryProps) {
  const [index, setIndex] = useState(-1)

  images = images.map(({ src, root, width, height, alt }) => ({
    src: assetLink(src, root, width),
    root: root,
    width,
    height,
    alt: alt || `Image from ${root} gallery`,
  }))

  return (
    <div className="max-w-screen-xl mx-auto font-poppins p-4">
      <RowsPhotoAlbum
        photos={images}
        targetRowHeight={300}
        onClick={({ index: currentIndex }) => setIndex(currentIndex)}
      />
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        index={index}
      />
    </div>
  )
}
