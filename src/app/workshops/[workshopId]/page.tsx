'use client'

import { notFound } from 'next/navigation'
import workshops from '@/data/workshops'
import { useState } from 'react'
import SubscribeToClassPopup from '@/components/SubscribeToClassPopup' // Ensure this path is correct
import Image from 'next/image'
import SubscribeToClassForm from '@/components/SubscribeToClassForm'

interface ClassDetailsProps {
  params: {
    workshopId: string
  }
}

export default function ClassDetails({ params }: ClassDetailsProps) {
  const { workshopId } = params

  const workshop = workshops.find((workshop) => workshop.id === workshopId)

  // State to control the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  if (!workshop) {
    return notFound()
  }

  return (
    <div className="max-w-screen-xl mx-auto font-poppins p-4">
      <h1 className="text-3xl lg:text-4xl text-center font-inter mb-8">
        {workshop.title}
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          {/* <img
            src={workshop.image}
            alt={workshop.title}
            className="w-full h-auto object-cover max-w-full max-h-[500px] object-cover"
          /> */}
          <Image
            src={workshop.image}
            alt={workshop.title}
            width={750}
            height={500}
            className="w-full h-auto object-cover max-w-full max-h-[500px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex p-4">
          <div className="px-5">
            <p className="text-sm lg:text-lg leading-relaxed mb-4">
              {workshop.description}
            </p>
            {/* <p className="text-sm lg:text-lg mb-4">
              <strong>Price:</strong> {workshop.price}
            </p> */}
            <h2 className="text-sm lg:text-lg mb-4">
              🎨<strong>Instructor:</strong> {workshop.instructor}
            </h2>
            <p className="text-sm lg:text-lg mb-4">
              📅<strong>Sessions:</strong> {workshop.sessions}
            </p>
            <p className="text-sm lg:text-lg mb-4">
              📍<strong>Location:</strong> {workshop.location}
            </p>
            {/* Trigger Modal when this button is clicked */}
            {/* <button
              onClick={openModal}
              className="w-full bg-customButton rounded text-white py-3 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Register for Class Mailing List
            </button> */}
            <SubscribeToClassForm workshopId={workshopId} />
          </div>
        </div>
      </div>

      <SubscribeToClassPopup
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        workshopId={workshopId}
      />
    </div>
  )
}
