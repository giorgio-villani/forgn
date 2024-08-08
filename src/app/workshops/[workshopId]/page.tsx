import { useRouter } from 'next/router'

interface ClassDetailsProps {
  params: {
    workshopId: string
  }
}

export default function ClassDetails({ params }: ClassDetailsProps) {
  return (
    <h1 className="flex justify-center">
      Details About Class {params.workshopId}
    </h1>
  )
}
