// ./src/components/header.tsx

'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface MenuItemProps {
  tag: string
  link: string
}

const Header: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-between">
        <a className="hover:opacity-50 transition duration-300" href="./">
          <img src="./forgn.png" className="max-w-[120px] max-h-[120px]" />
        </a>

        <div className="flex items-center space-x-4">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Sculpture Classes
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Digital Art Classes
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Gallery
          </a>
          <div className="relative group">
            <button className="px-4 py-2 rounded-md flex items-center">
              More <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Team
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Activations
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Presentations
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Workshops
              </a>
            </div>
          </div>
          <button className="bg-customButton rounded-full text-white p-3 transform hover:scale-105 transition duration-300 ease-in-out">
            Schedule Class
          </button>
          <button className="bg-green-500 rounded-full text-black p-3 transform hover:scale-105 transition duration-300 ease-in-out">
            Book Space
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
