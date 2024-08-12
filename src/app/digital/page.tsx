import Image from 'next/image'

export default function Digital() {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b to-gray-300 from-white">
      <h1 className="text-5xl text-center mb-8">
        Digital Art Classes at FORGN Studio
      </h1>
      <section className="py-10 max-w-[800px] w-full px-4 text-center">
        <h2 className="mb-6 text-4xl">Innovate with Digital Art</h2>
        <p className="mb-6 text-left text-center text-justify">
          Join our comprehensive digital art classes at FORGN Studio, where
          innovative techniques meet cutting-edge technology. Led by experienced
          digital artists, our classes cater to both beginners and advanced
          practitioners eager to explore the digital art landscape.
        </p>
        <h2 className="text-2xl mb-4">Class Offering:</h2>
        <ul className="list-inside text-justify pb-5">
          <li className="pb-3">
            <strong>Creative Coding:</strong> Explore the intersection of
            programming and art. Learn how to use code as a medium to create
            interactive and generative artworks, blending logic with creativity.
          </li>
          <li className="pb-3">
            <strong>AI Assisted Art:</strong> Discover how artificial
            intelligence can be a tool for artists. Learn to collaborate with AI
            in generating unique, thought-provoking pieces that push the
            boundaries of traditional art.
          </li>
          <li className="pb-3">
            <strong>Visualizations:</strong> Master the art of real-time visual
            creation. Learn to craft dynamic visualizations that respond to
            data, sound, and user interaction, perfect for installations and
            live performances.
          </li>
        </ul>

        <h2 className="text-2xl mb-4">Course Highlights:</h2>
        <ul className="list-inside text-justify pb-5">
          <li className="pb-3">
            <strong>Introduction to Digital Tools:</strong> Learn to use
            software and hardware essential for digital art creation.
          </li>
          <li className="pb-3">
            <strong>Generative Art Techniques:</strong> Explore how algorithms
            and AI can enhance your creative process.
          </li>
          <li className="pb-3">
            <strong>Digital Illustration and Painting:</strong> Master the
            fundamentals of digital drawing and painting.
          </li>
          <li className="pb-3">
            <strong>Interactive Media:</strong> Create art that responds to user
            input and environment.
          </li>
          <li className="pb-3">
            <strong>Personalized Feedback:</strong> Get expert guidance and
            critique to refine your digital art skills.
          </li>
        </ul>
        <h2 className="text-2xl mb-4">Who Should Attend:</h2>
        <ul className="list-inside text-justify pb-5">
          <li className="pb-3">
            <strong>Beginners:</strong> Those new to digital art who want to
            learn the basics and build a strong foundation.
          </li>
          <li className="pb-3">
            <strong>Intermediate Artists:</strong> Digital artists looking to
            refine their techniques and expand their skill set.
          </li>
          <li className="pb-3">
            <strong>Advanced Practitioners:</strong> Experienced digital artists
            seeking to explore new methods and gain inspiration from industry
            experts.
          </li>
        </ul>
        <h2 className="text-2xl mb-4">What You Will Gain:</h2>
        <ul className="list-inside text-justify pb-5">
          <li className="pb-3">
            <strong>Technical Skills:</strong> Master the essential tools and
            techniques of digital art.
          </li>
          <li className="pb-3">
            <strong>Creative Expression:</strong> Learn how to effectively
            translate your creative vision into digital formats.
          </li>
          <li className="pb-3">
            <strong>Community:</strong> Connect with fellow digital artists and
            become part of the vibrant FORGN Studio community.
          </li>
        </ul>
        <h2 className="text-2xl mb-4">How to Register:</h2>
        <ul className="list-inside text-justify pb-5">
          <li className="pb-3">
            <strong>Online Registration:</strong> Visit our website at{' '}
            <a
              className="text-customButton"
              href="http://localhost:3000/workshops"
            >
              Workshops
            </a>{' '}
            to sign up for the classes.
          </li>
          <li className="pb-3">
            <strong>Contact Us:</strong> For more information or assistance,
            email us at [Email Address] or call [Phone Number].
          </li>
        </ul>
        <p className="text-justify pb-5">
          Dive into the world of digital art and unlock your potential with the
          guidance of our expert instructors. Whether you&rsquo;re looking to
          pursue digital art as a hobby or a professional career, our classes
          will equip you with the skills and inspiration to succeed.
        </p>
        <p>Experience the future of art at FORGN Studio. Register today!</p>
      </section>
    </div>
  )
}
