import React from 'react'

interface CardProps {
  icon: string
  title: string
  description: string
  link: string
}

const About: React.FC = () => {
  const cardStyle =
    'bg-white text-black border border-customButton p-4 transition-transform duration-100 transform hover:-translate-y-5 aspect-1'
  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  const Card: React.FC<CardProps> = ({ icon, title, description, link }) => {
    return (
      <a href={link}>
        <div className={`${cardStyle} flex flex-col`}>
          <img className="w-12 h-12" src={icon} alt="" />
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p>{lorem}</p>
          <div className="mt-auto text-red-500 m-2">Learn More</div>
        </div>
      </a>
    )
  }
  return (
    <div className="w-full ">
      <section className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2">
          <div>
            <div>
              <h2 className="mb-4">
                {/* <img
                  src="forgn_icon.png"
                  className="max-w-[75px] max-h-[75px]"
                  alt="Forgn Icon"
                /> */}
                <div
                  className="pt-5 capitalize font-inter text-7xl"
                  style={{ textWrap: 'balance' }}
                >
                  Learn Skills, Make Art, Meet People
                </div>
              </h2>
              <p
                className="text-xl font-inter leading-relaxed mb-4"
                style={{ textWrap: 'balance' }}
              >
                Work with artists and tech experts to create exciting art that
                blends traditional and digital styles.
              </p>
            </div>
            <div className="pt-10">
              <button className="PRIMARY BUTTON LARGE bg-customButton rounded-full text-white text-2xl px-8 py-4 transform hover:scale-105 transition duration-300 ease-in-out">
                Upcoming Events
              </button>
            </div>
          </div>
          <img src="./ed.JPG" className="pl-5 max-w-[650px] max-h-[500px]" />
        </div>
      </section>
      <section className="bg-gradient-to-b from-gray-100 to-white text-white py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl text-black mb-4 font-inter capitalize">
            What we offer
          </h2>
          <div className="text-left py-12 px-4">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card
                icon="1x1.svg"
                title="Sculpture Classes"
                description={lorem}
                link="#"
              />
              <Card
                icon="1x1.svg"
                title="Digital Art Classes"
                description={lorem}
                link="#"
              />

              <Card
                icon="1x1.svg"
                title="Gallery"
                description={lorem}
                link="#"
              />

              <Card icon="1x1.svg" title="Team" description={lorem} link="#" />
              <Card
                icon="1x1.svg"
                title="Activation"
                description={lorem}
                link="#"
              />
              <Card
                icon="1x1.svg"
                title="Presentations"
                description={lorem}
                link="#"
              />
              <Card
                icon="1x1.svg"
                title="Workshops"
                description={lorem}
                link="#"
              />
              <Card
                icon="1x1.svg"
                title="Hackathon"
                description={lorem}
                link="#"
              />
            </div>
          </div>
          <div>
            <button className="PRIMARY BUTTON LARGE bg-customButton rounded-full text-white text-2xl px-8 py-4 transform hover:scale-105 transition duration-300 ease-in-out">
              Upcoming Events
            </button>
          </div>
        </div>
      </section>
      {/* <section className="bg-customBlue text-white py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl mb-4 font-inter capitalize">
            a passion for creating change
          </h2>
          <div className="bg-customBlue text-white text-left py-12 px-4">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-2">Hybrid Workspaces</h3>
                <p>
                  Create flexible studio spaces that accommodate both
                  traditional art-making tools (easels, sculpting tools, etc.)
                  and digital equipment (computers, tablets, 3D printers). This
                  encourages seamless transitions between physical and digital
                  work.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Interactive Installations
                </h3>
                <p>
                  Develop projects that blend physical art with interactive
                  digital elements. For example, use augmented reality (AR) to
                  bring paintings to life, or incorporate sensors into
                  sculptures that trigger visual or auditory responses.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Digital Fabrication</h3>
                <p>
                  Utilize digital fabrication techniques such as 3D printing,
                  laser cutting, and CNC milling to produce intricate physical
                  artworks. This allows for precise and innovative designs that
                  might be difficult to achieve by hand.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Collaborative Platforms
                </h3>
                <p>
                  Implement software and tools that enable real-time
                  collaboration between artists. Platforms like virtual reality
                  (VR) workspaces can allow multiple artists to co-create in a
                  shared digital environment, even if they are physically apart.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Exhibition Innovation
                </h3>
                <p>
                  Design gallery spaces that merge physical and digital
                  experiences. Use projection mapping to animate static artworks
                  or create immersive VR exhibitions that visitors can explore
                  digitally.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Cross-Disciplinary Teams
                </h3>
                <p>
                  Build diverse teams that include both traditional artists and
                  digital technologists. This fusion of skills will foster
                  innovative approaches and allow the studio to tackle a wide
                  range of projects, from digital animations to physical
                  installations enhanced with digital interactivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-red py-8">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center w-[700px]">
          <h2 className="text-4xl mb-4 capitalize font-inter">
            What We Strive For
          </h2>
          <p>
            Bridge the gap between traditional artistry and digital innovation,
            fostering a vibrant community where creativity and technology
            converge.
          </p>
          <div className="py-12 px-4">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h2 className="text-4xl mb-4 capitalize font-inter">
                  Our Mission
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Collaborate with Visionary Artists and Technologists.</li>
                  <li>Showcase Innovative Artworks and Installations.</li>
                  <li>
                    Explore and Learn About the Future of Art and technology
                    applications.
                  </li>
                </ul>
              </div>
              <img
                src="./activation.jpg"
                alt="activation"
                className="transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-customButton py-20">
        <div className="flex flex-col items-center justify-center text-center ">
          <div className="bg-white rounded-xl w-[1200px]">
            <div className="m-10">
              <h2 className="text-4xl capitalize font-inter">subscribe</h2>
              <p className="mt-2">
                Stay in the loop with everything you need to know.
              </p>
              <button className="bg-customButton rounded-full text-white p-3 mt-5 transform hover:scale-105 transition duration-300 ease-in-out">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
