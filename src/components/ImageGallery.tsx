'use client'

import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'

interface Image {
  src: string
  width: number
  height: number
}

interface GalleryProps {
  images: Image[]
}

function assetLink(asset: string, width: number) {
  return `./sculpture/${encodeURIComponent(asset)}?w=${width}&q=75`
}

export default function Gallery({ images }: GalleryProps) {
  const [index, setIndex] = useState(-1)

  images = images.map(({ src, width, height }) => ({
    src: assetLink(src, width),
    width,
    height,
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
