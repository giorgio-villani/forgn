// ./src/components/header.tsx

'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import CustomButton from './CustomButton'
import LinkButton from './LinkButton'
import Image from 'next/image'

import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <div className="bg-white w-full z-50 relative">
        <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-between">
        <a className="hover:opacity-50 transition duration-300 m-5" href="/">
          <Image
            src="/forgn_v2.png"
            className="w-[200px] h-auto"
            alt="Forgn Studio logo"
            width={200}
            height={200}
            priority
          />
        </a>

        <div className="flex items-center">
          <div className="lg:hidden m-5">
            <span
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
              onMouseDown={(e) => e.preventDefault()}
            >
              {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
            </span>
          </div>

          {/* Always visible on larger screens */}
          <div className="hidden lg:flex items-center space-x-4">
            <LinkButton href="/sculpture" text="Sculpture" />
            <LinkButton href="/digital" text="Digital Art" />
            <LinkButton href="/gallery" text="Gallery" />
            <div className="relative group">
              <button className="px-4 py-2 rounded-md flex items-center">
                Incubator
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg">
                <LinkButton href="/incubator" text="Overview" />
                <LinkButton href="/incubator/membership" text="Membership" />
                <LinkButton href="/incubator/social-media" text="Media" />
              </div>
            </div>
            <div className="relative group">
              <button className="px-4 py-2 rounded-md flex items-center">
                More
                <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg">
                <LinkButton href="/team" text="Team" />
                <LinkButton href="/workshops" text="Workshops" />
                <LinkButton href="/activations" text="Activations" />
                <LinkButton href="/donate" text="Donate" />
                <LinkButton href="/press-releases" text="Press" />
              </div>
            </div>
            <CustomButton href="/calendar" text="Calendar" />
          </div>
        </div>

        {/* Mobile Menu - Full screen overlay */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 bg-white z-[9999] flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <a href="/" className="hover:opacity-50 transition duration-300">
                <Image
                  src="/forgn_v2.png"
                  className="w-[150px] h-auto"
                  alt="Forgn Studio logo"
                  width={150}
                  height={150}
                />
              </a>
              <button
                onClick={toggleMenu}
                className="text-2xl p-2"
                onMouseDown={(e) => e.preventDefault()}
              >
                <RxCross1 />
              </button>
            </div>
            
            {/* Menu Items */}
            <div className="flex-1 flex flex-col items-center px-6 py-4 space-y-8 overflow-y-auto">
              {/* Main Navigation */}
              <div className="space-y-4 text-center w-full max-w-sm">
                <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide">Art / Creativity</h3>
                <LinkButton href="/sculpture" text="Sculpture" />
                <LinkButton href="/digital" text="Digital Art" />
                <LinkButton href="/gallery" text="Gallery" />
              </div>
              
              {/* Incubator Section */}
              <div className="space-y-4 text-center w-full max-w-sm">
                <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide">Incubator</h3>
                <LinkButton href="/incubator" text="Overview" />
                <LinkButton href="/incubator/membership" text="Membership" />
                <LinkButton href="/incubator/social-media" text="Media" />
              </div>
              
              {/* More Section */}
              <div className="space-y-4 text-center w-full max-w-sm">
                <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide">More</h3>
                <LinkButton href="/team" text="Team" />
                <LinkButton href="/workshops" text="Workshops" />
                <LinkButton href="/activations" text="Activations" />
                <LinkButton href="/donate" text="Donate" />
                <LinkButton href="/press-releases" text="Press" />
              </div>
            </div>
            
            {/* Calendar CTA at bottom */}
            <div className="p-6 border-t mt-auto">
              <a href="/calendar" className="block">
                <button className="bg-customButton rounded-full text-white w-full py-3 px-5 transform hover:scale-105 transition duration-300 ease-in-out">
                  Calendar
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
