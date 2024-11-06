'use client'

import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'

const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128]

function assetLink(asset: string, width: number) {
  return `/sculpture/${encodeURIComponent(asset)}?w=${width}&q=75`
}

const images = [
  { asset: 'misty.jpg', width: 158, height: 235 },
  { asset: 'group.jpg', width: 800, height: 600 },
  { asset: 'claire.jpg', width: 203, height: 300 },
  { asset: 'shelley.jpg', width: 203, height: 300 },
  { asset: 'wade.jpg', width: 203, height: 300 },
  { asset: 'thuy_and_giorgio.jpg', width: 203, height: 300 },
  { asset: 'thuy_1.jpg', width: 203, height: 300 },
  { asset: 'will.jpg', width: 203, height: 300 },
  { asset: 'thuy_2.jpg', width: 203, height: 300 },
].map(({ asset, width, height }) => ({
  src: assetLink(asset, width),
  width,
  height,
}))

export default function Gallery() {
  const [index, setIndex] = useState(-1)

  return (
    <div className="max-w-screen-xl mx-auto font-poppins p-4">
      <RowsPhotoAlbum
        photos={images}
        targetRowHeight={300} // Adjust the row height as needed
        onClick={({ index: currentIndex }) => setIndex(currentIndex)} // Opens lightbox on image click
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
