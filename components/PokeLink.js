'use client'

import Link from "next/link"
import React from "react"

const PokeLink = ({ text, url, children }) => {
  const [ hovered, setHovered ] = React.useState(false);

  return (
    <Link
      href={url}
      target='_blank'
      className='flex flex-col items-center justify-center mx-2 sm:mx-6 sm:my-0 w-36 h-36'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`flex w-20 h-20 mb-1 justify-center items-center`}>
        {children}
      </div>
      <div className={`${hovered ? 'underline' : ''} text-sm`}>{text}</div>
    </Link>
  )
}

export default PokeLink