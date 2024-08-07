import Image from 'next/image'

export default function Sculpture() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl text-center mb-8">
        Sculpture Classes at FORGN Studio
      </h1>
      <section className="bg-white py-10 max-w-[1200px] w-full px-4 text-center">
        <p className="mb-6">Discover the Art of Sculpture</p>
        <p className="mb-6">
          Join our immersive sculpture classes at FORGN Studio, where
          traditional techniques meet innovative creativity. Led by renowned
          sculptor Shelley Townsend, our classes are designed for artists of all
          levels who are eager to explore the world of sculpting.
        </p>
        <h2 className="text-3xl mb-4">Class Details:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Start Date:</strong> January 2024
          </li>
          <li>
            <strong>Instructor:</strong> Shelley Townsend, a master sculptor
            with extensive experience in teaching and creating sculptural art.
          </li>
          <li>
            <strong>Location:</strong> FORGN Studio, [Address]
          </li>
        </ul>
        <h2 className="text-3xl mb-4">Course Highlights:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Live Model Sessions: Gain hands-on experience by sculpting from live
            models, enhancing your understanding of human anatomy and form.
          </li>
          <li>
            Clay Techniques: Learn fundamental techniques in clay sculpting,
            including molding, shaping, and detailing.
          </li>
          <li>
            Form and Space: Develop your skills in creating three-dimensional
            art, focusing on the interaction between form and space.
          </li>
          <li>
            Personal Guidance: Receive personalized feedback and guidance from
            Shelley Townsend to refine your sculpting abilities.
          </li>
        </ul>
        <h2 className="text-3xl mb-4">Who Should Attend:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Beginners: Those new to sculpture who want to learn the basics and
            build a strong foundation.
          </li>
          <li>
            Intermediate Artists: Sculptors looking to refine their techniques
            and expand their skill set.
          </li>
          <li>
            Advanced Practitioners: Experienced artists seeking to explore new
            methods and gain inspiration from a master sculptor.
          </li>
        </ul>
        <h2 className="text-3xl mb-4">What You'll Gain:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            Technical Skills: Master the essential techniques of clay sculpting.
          </li>
          <li>
            Artistic Expression: Learn how to translate your creative vision
            into tangible forms.
          </li>
          <li>
            Community: Connect with fellow artists and become part of the
            vibrant FORGN Studio community.
          </li>
        </ul>
        <h2 className="text-3xl mb-4">How to Register:</h2>
        <p className="mb-6">
          <strong>Online Registration:</strong> Visit our website at [Website
          URL] to sign up for the classes.
        </p>
        <p className="mb-6">
          <strong>Contact Us:</strong> For more information or assistance, email
          us at [Email Address] or call [Phone Number].
        </p>
        <p className="mb-6">
          Embark on a journey of artistic discovery and create stunning
          sculptures under the expert guidance of Shelley Townsend. Whether you
          aim to pursue sculpture as a hobby or a professional path, our classes
          will provide you with the skills and inspiration to succeed.
        </p>
        <p>Experience the art of sculpture at FORGN Studio. Register today!</p>
      </section>
    </div>
  )
}
