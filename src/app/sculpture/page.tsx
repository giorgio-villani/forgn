import Image from 'next/image'

export default function Sculpture() {
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
                  className="pt-5 font-inter text-7xl"
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
    </div>
  )
}
