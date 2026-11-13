import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../showcase.css"

const Showcase = () => {


  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    breakpoints: {
      "(max-width: 640px)": {
        slides: { origin: "center", perView: 1.15, spacing: 8 },
      },
      "(min-width: 641px) and (max-width: 900px)": {
        slides: { origin: "center", perView: 1.8, spacing: 10 },
      },
    },
    range: {
      min: -5,
      max: 5,
    },
  })


  return (
    // <div className='h-[550px]'>Showcase</div>
    <>

      <div className='mx-auto mb-6 mt-10 flex h-max w-full max-w-[1440px] flex-col items-start justify-between gap-3 px-4 sm:mb-8 sm:mt-15 sm:flex-row sm:items-center sm:px-6 lg:px-10 xl:px-20'>
        <h1 className='font-poppins text-4xl font-medium text-gray-300 sm:text-5xl'>Our <span className='text-gray-600'>Stars</span> in Action</h1>
        <p className='w-full text-base font-mono italic animate-pulse sm:w-[300px] sm:text-[20px]'>See how our trainees are making waves — from local campaigns to global stages</p>
      </div>

      <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img className='h-full w-full object-cover object-top' src="./image/showcase1.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img className='h-full w-full object-cover object-top' src="./image/showcase4.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img className='h-full w-full object-cover object-top' src="./image/showcase3.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <img className='h-full w-full object-cover object-top' src="./image/showcase5.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide5">
        <img className='h-full w-full object-cover object-top' src="./image/showcase6.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide6">
        <img className='h-full w-full object-cover object-top' src="./image/showcase7.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide6">
        <img className='h-full w-full object-cover object-top' src="./image/showcase8.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide6">
        <img className='h-full w-full object-cover object-top' src="./image/showcase9.jpg" alt="" />
      </div>
      <div className="keen-slider__slide number-slide6">
        <img className='h-full w-full object-cover object-top' src="./image/showcase10.jpg" alt="" />
      </div>
    </div>
    </>
    
  )
}

export default Showcase
