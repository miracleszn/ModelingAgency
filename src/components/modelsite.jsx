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


    <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 sm:px-6 lg:h-[500px] lg:flex-row lg:justify-between lg:gap-4 lg:px-8'>
        <div className='flex w-full flex-col gap-6 lg:w-[52%] lg:justify-between lg:gap-0'>
            <h1 className='font-lora text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl xl:text-8xl'>Become the Model the World Can't Ignore</h1>
            <button className='w-max h-[50px] flex py-1.5 px-4 gap-2.5 items-center bg-[#747474a3] font-poppins justify-evenly transition-all duration-300 focus:bg-indigo-700 focus:text-[#f4f4f4]' onMouseEnter={() => setisVisible(false)} onMouseLeave={() => setisVisible(true)}>
                <span className='text-lg font-light sm:text-2xl'>Start Your Journey</span>
                
                {isVisible && <img className='h-full' src="./icons/icon-one.svg" alt="" />}
            </button>
            <marquee behavior="" direction="">
                <div className='flex h-[65px] items-center gap-4 sm:h-[80px]'>
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
        <div className='flex h-[280px] w-full gap-3 sm:h-[360px] lg:h-full lg:w-[46%] lg:gap-4'>
            <div className='w-[34%]' data-aos="zoom-in-down" data-aos-duration="1000">
                <img className='h-full w-full object-cover' src="./image/vertical-hero-two.jpg" alt="" />
            </div>
            <div className='min-w-0 flex-1' data-aos='fade-left' data-aos-delay='800' data-aos-duration='700'>
                <img className='h-full w-full object-cover' src="./image/two.jpg" alt="" />
            </div>
        </div>
    </div>
   </>
  )
}

export default Hero