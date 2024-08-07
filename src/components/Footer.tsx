'use client'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-black py-3 w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-start">
        <div className="m-5">
          <img src="./forgn.png" className="max-w-[120px] max-h-[120px]" />
          <p className="text-sm mt-1">ART AND TECH MEET</p>
        </div>
        <div className="flex m-5 space-x-16">
          <div>
            <h2 className="text-xl font-semibold">About</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Social</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/forgnstudio/"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center text-xs text-gray-500">
        ©2024 FORGN Studio. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}

export default Footer
