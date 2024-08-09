import React from 'react'

interface LinkButtonProps {
  href: string
  text: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <a href={href} className="block px-4 py-2 my-1 hover:bg-gray-100 ">
      {text}
    </a>
  )
}

export default LinkButton
