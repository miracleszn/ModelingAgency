import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-auto mb-6 h-[45px] w-full max-w-[450px] px-4 content-center font-poppins sm:mb-8'>
        <ul className='flex justify-evenly text-base sm:text-[20px]'>
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