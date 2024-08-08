import Image from 'next/image'

export default function Activations() {
  return (
    <div className="w-full flex flex-col items-center font-poppins ">
      <h1 className="text-5xl text-center">Activations</h1>
      <div className="max-w-[1200px] flex flex-col md:flex-row items-center">
        <div className="w-full p-2 md:w-1/2">
          <img
            className="w-full h-[500px] object-cover"
            src="./activation/activation-before.jpg"
            alt="Before"
          />
          <div className="text-center">Before</div>
        </div>
        <div className="w-full p-2 md:w-1/2">
          <img
            className="w-full h-[500px] object-cover"
            src="./activation/activation-after.jpg"
            alt="After"
          />
          <div className="text-center">After</div>
        </div>
      </div>

      <section className="bg-white py-10 max-w-[1200px] w-full px-4 text-center text-lg">
        Our experience in creatively transforming spaces is exemplified by our
        project at the Houston Vintage Truck Club, which we converted from a
        storage warehouse into a thriving art gallery. This transformation
        involved extensive planning and execution to adapt the space
        aesthetically and functionally to suit the needs of artists and
        visitors. We launched this new venue with &quot;Ed in Between
        Lines,&quot; an exhibition by Omar (around 300 attendees during
        opening), which featured 41 acrylic on canvas pieces. Each piece was
        infused with insights and inspirations from Houston&lsquo;s diverse
        markets, creating a dynamic and immersive experience for attendees.
      </section>
    </div>
  )
}
