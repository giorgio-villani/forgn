// ./src/components/header.tsx

'use client'

import Link from 'next/link'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
  return (
    <div className="bg-white w-full z-50 relative">
      <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-between">
        <a className="hover:opacity-50 transition duration-300" href="./">
          <img src="./forgn.png" className="max-w-[120px] max-h-[120px]" />
        </a>

        <div className="flex items-center space-x-4">
          <a href="./sculpture" className="block px-4 py-2 hover:bg-gray-100">
            Sculpture Classes
          </a>
          <a href="./digital" className="block px-4 py-2 hover:bg-gray-100">
            Digital Art Classes
          </a>
          <a href="./gallery" className="block px-4 py-2 hover:bg-gray-100">
            Gallery
          </a>
          <div className="relative group">
            <button className="px-4 py-2 rounded-md flex items-center">
              More <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg">
              <a href="./team" className="block px-4 py-2 hover:bg-gray-100">
                Team
              </a>
              <a
                href="./activations"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Activations
              </a>
              <a
                href="./presentations"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Presentations
              </a>
              <a
                href="./workshops"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Workshops
              </a>
              <a
                href="./hackathons"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Hackathons
              </a>
            </div>
          </div>
          <a href="./calendar">
            <button className="bg-customButton rounded-full text-white py-3 px-5 transform hover:scale-105 transition duration-300 ease-in-out">
              Calendar
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
