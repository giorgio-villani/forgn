import React from 'react'

interface CustomButtonProps {
  href: string
  text: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ href, text }) => {
  return (
    <a href={href}>
      <button className="bg-customButton rounded-full text-white py-3 px-5 transform hover:scale-105 transition duration-300 ease-in-out">
        {text}
      </button>
    </a>
  )
}

export default CustomButton
