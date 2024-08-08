import Image from 'next/image'

export default function Gallery() {
  return (
    <div className="w-full flex flex-col font-poppins items-center ">
      <div className="max-w-[1200px]">
        <h1 className="text-5xl text-center ">FORGN Studio Gallery</h1>
        <section className="bg-white py-10 max-w-[600x] w-full px-4 text-center ">
          <p className="mb-6 text-lg">
            Welcome to the FORGN Studio Gallery, where tradition meets
            innovation. Our gallery is dedicated to showcasing the cutting-edge
            creativity of artists who blend physical and digital art forms.
          </p>
          <h2 className="mb-6 text-4xl">Purpose of the Gallery:</h2>
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>
              Highlighting Artists: Featuring visionary artists who excel in
              merging traditional craftsmanship with digital technology.
            </li>
            <li>
              Innovative Artworks: Presenting a unique fusion of physical and
              digital art that pushes the boundaries of creativity.
            </li>
            <li>
              Community Engagement: Building a vibrant network of artists,
              technologists, and art enthusiasts.
            </li>
            <li>
              Educational Opportunities: Offering insights into the future of
              art and technology through exhibitions and events.
            </li>
          </ul>
          <p className="mb-6 text-lg">
            Our gallery is more than just a space to view art; it is a hub for
            inspiration and collaboration. We aim to foster a community where
            artists can explore new possibilities and audiences can experience
            the future of art.
          </p>
          <p className="mb-6 text-lg">
            Visit the FORGN Studio Gallery to witness the transformative power
            of art and technology. Explore our exhibitions, engage with the art,
            and be inspired by the innovative works on display.
          </p>
        </section>
      </div>
    </div>
  )
}
