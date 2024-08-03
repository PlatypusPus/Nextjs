import React from 'react'

const navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center px-6 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>LSJEC</div>
        <div>
          <ul className='hidden sm:flex'>
              <li className='ml-10 uppercase hover:border-b text-xl'>
                About
              </li>            
              <li className='ml-10 uppercase hover:border-b text-xl'>
                Cart
              </li>            
              <li className='ml-10 uppercase hover:border-b text-xl'>
                Login
              </li>            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar