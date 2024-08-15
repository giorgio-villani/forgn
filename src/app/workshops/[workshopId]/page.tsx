import { notFound, useParams } from 'next/navigation'
import workshops from '@/data/workshops'
import Image from 'next/image'

interface ClassDetailsProps {
  params: {
    workshopId: string
  }
}

export default function ClassDetails({ params }: ClassDetailsProps) {
  const { workshopId } = params

  const workshop = workshops.find((workshop) => workshop.id === workshopId)

  if (!workshop) {
    return notFound()
  }

  return (
    <div className="max-w-screen-xl mx-auto font-poppins p-4">
      <h1 className="text-5xl text-center font-inter mb-8">{workshop.title}</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <Image
            src={workshop.image}
            className="w-full h-auto object-cover max-w-full max-h-[500px] object-cover"
            alt={workshop.title}
          />
        </div>
        <div className="w-full md:w-1/2 flex p-4">
          <div className="px-5">
            <h2 className="text-3xl mb-4">Instructor: {workshop.instructor}</h2>
            <p className="text-lg leading-relaxed mb-4">
              {workshop.description}
            </p>
            <p className="text-lg mb-4">
              <strong>Sessions:</strong> {workshop.sessions}
            </p>
            <p className="text-lg mb-4">
              <strong>Location:</strong> {workshop.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
