'use client'

import Link from "next/link"
import React from "react"

const PokeLink = ({ text, url, children }) => {
  const [ hovered, setHovered ] = React.useState(false);

  return (
    <Link
      href={url}
      target='_blank'
      className='flex flex-col items-center justify-center my-10 sm:mx-8 sm:my-0'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`w-20 h-20 mb-1`}>
        {children}
      </div>
      <div className={`${hovered ? 'underline' : ''} text-sm`}>{text}</div>
    </Link>
  )
}

export default PokeLink