import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../showcase.css"

const Showcase = () => {


  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  })


  return (
    // <div className='h-[550px]'>Showcase</div>
    <>

      <div className='h-max flex justify-between items-center mx-20 mt-15 mb-8'>
        <h1 className='text-5xl font-poppins font-medium text-gray-300'>Our <span className='text-gray-600'>Stars</span> in Action</h1>
        <p className='w-[300px] text-[20px] font-mono italic animate-pulse'>See how our trainees are making waves — from local campaigns to global stages</p>
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

