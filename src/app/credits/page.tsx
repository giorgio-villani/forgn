import Image from 'next/image'

export default function Credit() {
  return (
    <div className="w-full h-screen flex flex-col font-poppins items-center ">
      <div className="max-w-[1200px]">
        <h1 className="text-5xl text-center pb-5">Credits</h1>
        <h2 className="text-3xl text-center pb-3">Icons</h2>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://www.flaticon.com/free-icons/sculpture"
              title="sculpture icons"
              className="hover:underline"
            >
              Sculpture icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/art-gallery"
              title="art gallery icons"
              className="hover:underline"
            >
              Art gallery icons created by Made by Made Premium - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/personalize"
              title="personalize icons"
              className="hover:underline"
            >
              Personalize icons created by Icon home - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/workshop"
              title="workshop icons"
              className="hover:underline"
            >
              Workshop icons created by Buandesign - Flaticon
            </a>
          </li>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/team"
              title="team icons"
              className="hover:underline"
            >
              Team icons created by Freepik - Flaticon
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
