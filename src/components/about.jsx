import React from 'react'

const historyText = "Founded with a vision to redefine modeling in Africa, Éclat Model Academy began as a small mentorship circle for aspiring models with big dreams. Over the years, we’ve grown into a full-fledged academy — training hundreds of talents who have walked major runways, featured in campaigns, and built lasting careers. Our journey reflects one truth: great models aren’t born, they’re trained."

const philosophyText = "We believe modeling is more than appearance — it’s confidence, discipline, and self-expression. Every student we train is taught to embrace individuality while mastering professionalism. Our approach blends creative artistry with character building, ensuring our models stand out not only for their looks but for their presence, poise, and authenticity."

const visionText = "Our goal is to create a new generation of models who influence culture, inspire confidence, and represent excellence wherever they go. We aim to bridge local talent with global opportunities — connecting dreams to international platforms. At Éclat Model Academy, we don’t just prepare models for the runway — we prepare them for life"

const Card = ({heading, subheading}) => {
  return(
    <div className='flex min-h-[280px] w-full max-w-[400px] flex-col justify-evenly border-l-[10px] bg-gray-100 p-5 pt-8 transition-all duration-500 hover:border-indigo-700 sm:min-h-[320px] sm:p-7 sm:pt-10 lg:h-[400px]'>
      <h2 className='font-poppins text-2xl font-semibold sm:text-3xl'>{heading}</h2>
      <p className='font-lora text-sm leading-relaxed sm:text-base'>{subheading}</p>
    </div>
  )
}

const About = () => {
  return (
    <div className='my-10 grid grid-cols-1 items-center justify-items-center gap-4 bg-[#747474] px-4 py-8 sm:grid-cols-2 sm:gap-5 sm:px-6 lg:min-h-[500px] lg:grid-cols-3 lg:justify-evenly lg:px-8 lg:py-10'>
      <Card heading={"Our History"} subheading={historyText}/>
      <Card heading={"Our Philosophy"} subheading={philosophyText}/>
      <Card heading={"Our Vision & Impact"} subheading={visionText}/>

    </div>
  )
}

export default About