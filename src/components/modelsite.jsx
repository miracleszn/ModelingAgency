import React, {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
// import { motion } from "motion/react"



const Hero = () => {

    const [isVisible, setisVisible] = useState(true);

    useEffect(() => {
    //   AOS.init();
    AOS.init();

    }, [])
    

  return (
   <>


    <div className='flex h-[500px] justify-between'>
        <div className='pl-4 flex flex-col justify-between'>
            <h1 className='text-8xl font-semibold font-lora'>Become the Model the World Can't Ignore</h1>
            <button className='w-max h-[50px] flex py-1.5 px-4 gap-2.5 items-center bg-[#747474a3] font-poppins justify-evenly transition-all duration-300 focus:bg-indigo-700 focus:text-[#f4f4f4]' onMouseEnter={() => setisVisible(false)} onMouseLeave={() => setisVisible(true)}>
                <span className='text-2xl font-light'>Start Your Journey</span>
                
                {isVisible && <img className='h-full' src="./icons/icon-one.svg" alt="" />}
            </button>
            <marquee behavior="" direction="">
                <div className='flex h-[80px] items-center gap-4'>
                    {/* <img className='h-[70px] opacity-25' src="./icons/addidas.svg" alt="" />
                    <img className='h-[50px] opacity-25' src="./icons/fendi.svg" alt="" />
                    <img className='h-[70px] opacity-25' src="./icons/puma.svg" alt="" />
                    <img className='h-[50px] opacity-25' src="./icons/louis-vuitton.svg" alt="" /> */}
                    <img className='h-[50px] opacity-25' src="./icons/nike.svg" alt="" />
                    <img className='h-[50px] animate-pulse opacity-25' src="./icons/fashion-nova.svg" alt="" />
                    <img className='h-[50px] opacity-25' src="./icons/nike.svg" alt="" />
                    <img className='h-[50px] animate-pulse opacity-25' src="./icons/fashion-nova.svg" alt="" />
                    <img className='h-[50px] opacity-25' src="./icons/nike.svg" alt="" />
                    <img className='h-[50px] animate-pulse opacity-25' src="./icons/fashion-nova.svg" alt="" />
                </div>
            </marquee>
        </div>
        <div className='w-max flex gap-4'>
            <div className='w-[200px]' data-aos="zoom-in-down" data-aos-duration="1000">
                <img className='h-full w-full object-cover' src="./image/vertical-hero-two.jpg" alt="" />
            </div>
            <div className='w-[500px]' data-aos='fade-left' data-aos-delay='800' data-aos-duration='700'>
                <img className='h-full w-full object-cover' src="./image/two.jpg" alt="" />
            </div>
        </div>
    </div>
   </>
  )
}

export default Hero