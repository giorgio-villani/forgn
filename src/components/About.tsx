import React from 'react'

const About: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-customGray py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl mb-4">
            <img
              src="forgn_icon.png"
              className="max-w-[75px] max-h-[75px]"
            ></img>
            <span>
              Forgn: the future of physical art and digital applications
            </span>
          </h2>
          <p className="text-lg">Where Creativity and Technology Unite</p>
          <button className="bg-customButton rounded-full text-white p-3">
            Up Coming Events
          </button>
        </div>
      </section>
      <section className="bg-customBlue text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Section 2</h2>
          <p className="text-lg">This is a blue section.</p>
        </div>
      </section>
      <section className="bg-customWhite py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Section 3</h2>
          <p className="text-lg">This is a white section.</p>
        </div>
      </section>
      {/* Repeat sections as needed */}
    </div>
  )
}

export default About
