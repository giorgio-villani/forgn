// ./src/components/header.tsx

'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import CustomButton from './CustomButton'
import LinkButton from './LinkButton'

import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpen])

  return (
    <div className="bg-white w-full z-50 relative">
      <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-between">
        <a className="hover:opacity-50 transition duration-300 m-5" href="/">
          <img
            src="/forgn.png"
            className="max-w-[120px] max-h-[120px]"
            alt="Forgn"
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
          <div className=" hidden lg:flex items-center space-x-4">
            <LinkButton href="/sculpture" text="Sculpture Classes" />
            <LinkButton href="/digital" text="Digital Art Classes" />
            <LinkButton href="/gallery" text="Gallery" />
            <div className="relative group">
              <button className="px-4 py-2 rounded-md flex items-center">
                More <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg">
                <LinkButton href="/team" text="Team" />
                <LinkButton href="/workshops" text="Workshops" />
                <LinkButton href="/activations" text="Activations" />
                {/* <LinkButton href="./presentations" text="Presentations" />
                <LinkButton href="./hackathons" text="Hackathons" /> */}
              </div>
            </div>
            <CustomButton href="/calendar" text="Calendar" />
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden h-screen text-2xl flex flex-col absolute top-full left-0 w-full h-text-center bg-white p-4 pt-7 text-center">
            <div className="bg-customButton rounded rounded-full text-white m-6 ">
              <LinkButton href="/calendar" text="Calendar" />
            </div>
            <LinkButton href="/sculpture" text="Sculpture Classes" />
            <LinkButton href="/digital" text="Digital Art Classes" />
            <LinkButton href="/gallery" text="Gallery" />
            {/* <div className="bg-gray-200"> */}
            <LinkButton href="/team" text="Team" />
            <LinkButton href="/workshops" text="Workshops" />
            <LinkButton href="/activations" text="Activations" />
            {/* <LinkButton href="./presentations" text="Presentations" /> */}
            {/* <LinkButton href="./hackathons" text="Hackathons" /> */}
            {/* </div> */}
          </div>
        )}

        {/* <div className="">
          <div className="flex items-center space-x-4">
            <LinkButton href="./sculpture" text="Sculpture Classes" />
            <LinkButton href="./digital" text="Digital Art Classes" />
            <LinkButton href="./gallery" text="Gallery" />
            <div className="relative group">
              <button className="px-4 py-2 rounded-md flex items-center">
                More <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-lg">
                <LinkButton href="./team" text="Team" />
                <LinkButton href="./activations" text="Activations" />
                <LinkButton href="./presentations" text="Presentations" />
                <LinkButton href="./workshops" text="Workshops" />
                <LinkButton href="./hackathons" text="Hackathons" />
              </div>
            </div>
            <CustomButton href="./calendar" text="Calendar" />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Header
