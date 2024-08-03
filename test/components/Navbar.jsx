import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center px-6 z-50'>
      <div className='container mx-auto flex justify-between items-center'>

        <div><Link href={"/"}>
          <button className='text-xl uppercase'>
          LSJEC
          </button>
          </Link>
        </div>
        <div>
          <ul className='hidden sm:flex'>
            <Link href={"/about"}><li className='ml-4 uppercase hover:border-b text-xl'>
                About
              </li>
              </Link>    
              <Link href={"/cart"}><li className='ml-4 uppercase hover:border-b text-xl'>
                Cart
              </li>
              </Link>
              <Link href={"/login"}><li className='ml-4 uppercase hover:border-b text-xl'>
                Login
              </li>
              </Link>               
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar