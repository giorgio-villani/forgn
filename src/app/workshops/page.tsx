import Image from 'next/image'

export default function Workshops() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl text-center">Workshops</h1>
      <div className="max-w-[1200px] m-5">
        <img className="" src="./workshops/daniel-presentation.jpg" alt="" />
        <div className="text-center">Creative Coding - Daniel Calderon</div>
      </div>
      <section className="bg-white py-5 max-w-[1200px] w-full px-4 text-center">
        Our experience in creatively transforming spaces is exemplified by our
        project at the Houston Vintage Truck Club, which we converted from a
        storage warehouse into a thriving art gallery. This transformation
        involved extensive planning and execution to adapt the space
        aesthetically and functionally to suit the needs of artists and
        visitors. We launched this new venue with &quot;Ed in Between
        Lines,&quot; an exhibition by Omar (around 300 attendees during
        opening), which featured 41 acrylic on canvas pieces. Each piece was
        infused with insights and inspirations from Houston&ldquo;s diverse
        markets, creating a dynamic and immersive experience for attendees.
      </section>
    </div>
  )
}
