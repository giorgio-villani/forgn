import React from 'react'

const About: React.FC = () => {
  return (
    <div className="w-full ">
      <section className="bg-customGray py-20">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl mb-4">
            <img
              src="forgn_icon.png"
              className="max-w-[75px] max-h-[75px]"
            ></img>
            <div className="pt-5 capitalize font-inter text-4xl">
              Forgn: the future of physical art and digital applications
            </div>
          </h2>
          <p className="text-xl font-inter">
            Where Creativity and Technology Unite
          </p>
          <div className="pt-10">
            <button className="bg-customButton rounded-full text-white p-3">
              Up Coming Events
            </button>
          </div>
        </div>
      </section>
      <section className="bg-customBlue text-white py-20">
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
      </section>
      <section className="bg-customGray py-8">
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
                <ul className="list-disc pl-5 space-y-2 text-lg">
                  <li>Collaborate with Visionary Artists and Technologists.</li>
                  <li>Showcase Innovative Artworks and Installations.</li>
                  <li>
                    Explore and Learn About the Future of Art and technology
                    applications.
                  </li>
                </ul>
              </div>
              <img src="./activation.jpg" alt="activation" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-customBlue py-20">
        <div className="flex flex-col items-center justify-center text-center ">
          <div className="bg-white rounded-xl w-[1200px]">
            <div className="m-10">
              <h2 className="text-4xl capitalize font-inter">subscribe</h2>
              <p>Stay in the loop with everything you need to know.</p>
              <button className="bg-customButton rounded-full text-white p-2">
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
