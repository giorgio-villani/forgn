import CustomButton from '@/components/CustomButton'
import SubscribeForm from '@/components/SubscribeForm'
import React from 'react'

interface CardProps {
  icon: string
  title: string
  description: string
  link: string
  alt: string
}

const About: React.FC = () => {
  const Card: React.FC<CardProps> = ({
    icon,
    title,
    description,
    link,
    alt,
  }) => {
    return (
      <a href={link}>
        <div
          className={`bg-white text-black border border-customButton p-4 transition-transform duration-100 transform hover:-translate-y-5 md:aspect-1 flex flex-col`}
        >
          <img className="w-12 h-12" src={icon} alt={alt} />
          <h3 className="font-bold text-xl font-inter mb-2">{title}</h3>
          <p className="text-xl font-inter mb-4">{description}</p>
          <div className="mt-auto text-red-500 ">Learn More</div>
        </div>
      </a>
    )
  }
  return (
    <div className="w-full ">
      <section className="bg-white lg:py-20 m-5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row flex-col-reverse">
          <div className="text-center md:text-left">
            <h1 className="mb-4">
              <div
                className="pt-5 font-inter text-5xl lg:text-7xl"
                style={{ textWrap: 'balance' }}
              >
                Learn Skills, Make Art, Meet People
              </div>
            </h1>
            <p
              className="text-xl font-inter leading-relaxed mb-4"
              style={{ textWrap: 'balance' }}
            >
              Work with artists and tech experts to create exciting art that
              blends traditional and digital styles.
            </p>
            <div className="pt-10">
              <a href="./calendar">
                <button className="PRIMARY BUTTON LARGE bg-customButton rounded-full text-white text-2xl px-8 py-4 transform hover:scale-105 transition duration-300 ease-in-out">
                  Upcoming Events
                </button>
              </a>
            </div>
          </div>
          <div className="md:pl-5 lg:pl-5 max-w-[650px] max-h-[500px] object-cover">
            <img src="/ed-low.webp" alt="ed in between lines exhibition" />
            <div className="text-center txt-sm">
              Photo by{' '}
              <a
                href="https://www.instagram.com/efedenari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customButton hover:underline"
              >
                Franco Denari
              </a>{' '}
              at the <em>&quot;Ed in Between Lines&quot;</em> exhibition,
              featuring the work of{' '}
              <a
                href="https://www.instagram.com/subomar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-customButton hover:underline"
              >
                Omar Ochoa
              </a>
              .
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-gray-100 to-white text-white py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl text-black mb-4 font-inter capitalize">
            What we offer
          </h2>
          <div className="text-left py-12 px-4">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                icon="/icons/sculpture.svg"
                title="Sculpture Classes"
                description="Learn the art of sculpting from expert artists. These classes cover various techniques and materials to help you create stunning sculptures."
                link="./sculpture"
                alt="sculpture"
              />
              <Card
                icon="/icons/digital-art.svg"
                title="Digital Art Classes"
                description="Discover a curated collection of artworks in our gallery. Enjoy a diverse range of styles and mediums from talented artists."
                link="./digital"
                alt="digital art"
              />

              <Card
                icon="/icons/art-gallery.svg"
                title="Gallery"
                description="Discover a curated collection of artworks in our gallery. Enjoy a diverse range of styles and mediums from talented artists."
                link="./gallery"
                alt="art gallery"
              />

              <Card
                icon="/icons/team.svg"
                title="Team"
                description="Meet our dedicated team of artists, technologists, and educators. Together, we work to foster a creative and innovative environment."
                link="./team"
                alt="team and teachers"
              />
              <Card
                icon="/icons/cogs.svg"
                title="Activation"
                description="Participate in dynamic activations designed to engage and inspire. These events connect artists with audiences in meaningful ways."
                link="./activations"
                alt="warehouse and gallery activations"
              />
              <Card
                icon="/icons/presentation.svg"
                title="Workshops"
                description="Join hands-on workshops to develop your artistic skills. Our workshops cover a wide range of topics and techniques for all skill levels."
                link="./workshops"
                alt="workshops and classes"
              />
              {/* <Card
                icon="1x1.svg"
                title="Presentations"
                description="Attend presentations by leading artists and technologists. Gain insights into the latest trends and techniques in the art world."
                link="./presentations"
              />
              <Card
                icon="1x1.svg"
                title="Hackathons"
                description="Compete in our hackathons where art meets technology. Collaborate with others to create innovative projects in a fast-paced environment."
                link="./hackathons"
              /> */}
            </div>
          </div>
          <div>
            <a href="./calendar">
              <button className="PRIMARY BUTTON LARGE bg-customButton rounded-full text-white text-2xl px-8 py-4 transform hover:scale-105 transition duration-300 ease-in-out">
                Upcoming Events
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-red">
        <div className="max-w-screen-xl mx-auto text-center px-4">
          <h2 className="text-4xl mb-4 capitalize font-inter">
            What We Strive For
          </h2>
          <p>
            Bridge the gap between traditional artistry and digital innovation,
            fostering a vibrant community where creativity and technology
            converge.
          </p>
          <div className="py-12 flex flex-col md:flex-row gap-8 ">
            <div className=" md:text-left flex-1">
              <h3 className="text-4xl mb-4 capitalize font-inter text-center">
                Our Mission
              </h3>
              <ul className="pl-5 space-y-2">
                <li>Collaborate with Visionary Artists and Technologists.</li>
                <li>Showcase Innovative Artworks and Installations.</li>
                <li>
                  Explore and Learn About the Future of Art and technology
                  applications.
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end flex-1">
              <img
                src="/activation.jpg"
                alt="activation"
                className="w-full h-auto max-w-xs md:max-w-md transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-customButton py-20">
        <SubscribeForm />
      </section>
    </div>
  )
}

export default About
