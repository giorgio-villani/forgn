export default function ClassDetails({ params }: { classId: string }) {
  return (
    <h1 className="flex justify-center">
      Details About Class {params.classId}
    </h1>
  )
}
