import React from 'react'

export default function Button({children, className}) {
  return (
    <div>
      <a href="#" className={`${className} px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600 bg-custom-gradient`}>
        {children}
      </a>
  </div>
  )
}
