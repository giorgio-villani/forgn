import React from 'react'

const classes = [
  {
    title: 'Sculpture Class - Terracotta',
    description:
      'In this 4-week class, students will learn the basic tools and materials used to create hand-built ceramics using terracotta. Skills covered include pinching, coiling with a banding wheel, slab preparation with a slab roller, wedging, and glazing.',
    sessions: 'Next Session: Aug 5, 12, 19, 26',
    price: '$350',
    image: '/classes/sculpture-terracotta.jpg',
  },
  {
    title: 'Sculpture Class - Polymer Clay',
    description:
      'This 4-week class introduces students to polymer clay techniques. You will learn to condition, blend, shape, and bake polymer clay, creating various small sculptures and decorative items. Projects will be guided step-by-step, ensuring you complete several finished pieces.',
    sessions: 'Next Session: Aug 6, 13, 20, 27',
    price: '$250',
    image: '/classes/polymer.jpg',
  },
  {
    title: 'Digital Art: 101',
    description:
      'In this 4-week class, students will learn the fundamentals of digital art. Topics include using digital art software, understanding layers and tools, and creating digital illustrations and paintings. No prior experience is required.',
    sessions: 'Next Session: Aug 7, 14, 21, 28',
    price: '$220',
    image: '/classes/digital-art.jpg',
  },
  {
    title: 'Video Editing: DaVinci',
    description:
      'This 4-week class covers the basics of video editing using DaVinci Resolve. Students will learn how to import footage, edit clips, add transitions and effects, and export their projects. Ideal for beginners looking to get started with professional video editing software.',
    sessions: 'Next Session: Aug 7, 14, 21, 28',
    price: '$150',
    image: '/classes/davinci.jpg',
  },
]

export default function WorkshopList() {
  return (
    <div className="flex justify-center p-4 font-poppins">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-5xl mb-6 text-center">Workshop List</h1>
        <div className="flex">
          <aside className="w-1/4 pr-4">
            <input
              type="text"
              placeholder="Search Classes"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="mb-4 border rounded p-2">
              <h2 className="font-bold text-lg mb-2">All Subjects</h2>
              <ul className="space-y-2 text-customButton">
                <li>
                  <a href="#">Sculpture</a>
                </li>
                <li>
                  <a href="#">Digital Art</a>
                </li>
                <li>
                  <a href="#">Film</a>
                </li>
              </ul>
            </div>
          </aside>
          <main className="w-3/4">
            <div className="flex justify-between mb-4">
              <button className="px-4 py-2 bg-gray-200 rounded">
                All Classes
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded">
                My Classes (4)
              </button>
            </div>
            <div className="space-y-4">
              {classes.map((cls, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded p-4 hover:bg-gray-200"
                >
                  <a href={`/workshops/${index}`} className="flex">
                    <img
                      src={cls.image}
                      alt={cls.title}
                      className="w-1/4 h-auto mr-4 rounded object-cover"
                    />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold mb-2">{cls.title}</h2>
                        <p className="text-gray-700 mb-2">{cls.description}</p>
                        <p className="text-gray-500">{cls.sessions}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold">{cls.price}</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
