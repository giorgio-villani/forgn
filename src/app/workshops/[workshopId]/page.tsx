'use client'

import { notFound } from 'next/navigation'
import workshops from '@/data/workshops'
import { useEffect, useState } from 'react'
import SubscribeToClassPopup from '@/components/SubscribeToClassPopup' // Ensure this path is correct
import Image from 'next/image'
import SubscribeToClassForm from '@/components/SubscribeToClassForm'

interface ClassDetailsProps {
  params: {
    workshopId: string
  }
}


export default function ClassDetails({ params }: ClassDetailsProps) {
  // Add mounting state to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false)
  const { workshopId } = params

  const workshop = workshops.find((workshop) => workshop.id === workshopId)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!workshop) {
    return notFound()
  }

  // Return null or loading state before mounting
  if (!isMounted) {
    return null // or return a loading spinner
  }

  console.log(workshops);
  console.log("Received workshopId:", workshopId);

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
          {workshop.image ? (
            <Image
              src={workshop.image}
              alt={workshop.title}
              width={750}
              height={500}
              className="w-full h-auto object-cover max-w-full max-h-[500px]"
            />
          ) : (
            <div className="w-full h-auto bg-gray-200 flex items-center justify-center">
              No Image Available
            </div>
          )}

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
              🎨<strong>Instructor:</strong> {workshop.instructor || "To be announced"}
            </h2>
            <p className="text-sm lg:text-lg mb-4">
              📅<strong>Sessions:</strong> {workshop.sessions || "To be announced"}
            </p>
            <p className="text-sm lg:text-lg mb-4">
              🕰️<strong>Time:</strong> {workshop.time || "To be announced"}
            </p>
            <p className="text-sm lg:text-lg mb-4">
              📍<strong>Location:</strong> {workshop.location || "To be announced"}
            </p>
            {/* <SubscribeToClassForm workshopId={workshopId} /> */}

            <a href={workshop.booking} target="_blank">
            <button type="submit" className="w-full rounded bg-red-600 py-3 text-white hover:bg-red-500 mb-2">
              Sign up for Class 
            </button>
            </a>
            <a href="http://eepurl.com/i7qwzg" target="_blank">
            <button
              type="submit"
              className="w-full rounded bg-white hover:bg-gray-200 py-3 text-red-600 border-red-600 border-2"
            >
              Register for Mailing List
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
