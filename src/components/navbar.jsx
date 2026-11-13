import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[45px] w-[450px] justify-self-center content-center mb-8 font-poppins'>
        <ul className='flex justify-evenly text-[20px]'>
            <li className='border-b-2 border-transparent transition-all duration-300 cursor-pointer hover:border-gray-700'>About</li>
            <li>|</li>
            <li className='border-b-2 border-transparent transition-all duration-300 cursor-pointer hover:border-gray-700'>Program</li>
            <li>|</li>
            <li className='border-b-2 border-transparent transition-all duration-300 cursor-pointer hover:border-gray-700'>Register</li>
        </ul>
    </div>
  )
}

export default Navbar