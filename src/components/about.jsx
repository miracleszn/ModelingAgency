import React from 'react'

const historyText = "Founded with a vision to redefine modeling in Africa, Éclat Model Academy began as a small mentorship circle for aspiring models with big dreams. Over the years, we’ve grown into a full-fledged academy — training hundreds of talents who have walked major runways, featured in campaigns, and built lasting careers. Our journey reflects one truth: great models aren’t born, they’re trained."

const philosophyText = "We believe modeling is more than appearance — it’s confidence, discipline, and self-expression. Every student we train is taught to embrace individuality while mastering professionalism. Our approach blends creative artistry with character building, ensuring our models stand out not only for their looks but for their presence, poise, and authenticity."

const visionText = "Our goal is to create a new generation of models who influence culture, inspire confidence, and represent excellence wherever they go. We aim to bridge local talent with global opportunities — connecting dreams to international platforms. At Éclat Model Academy, we don’t just prepare models for the runway — we prepare them for life"

const Card = ({heading, subheading}) => {
  return(
    <div className='w-[400px] h-[400px] border-l-[10px] bg-gray-100 p-4 pt-14 flex flex-col justify-evenly transition-all duration-500 hover:border-indigo-700'>
      <h1 className='text-3xl font-poppins font-semibold'>{heading}</h1>
      <p className='font-lora'>{subheading}</p>
    </div>
  )
}

const About = () => {
  return (
    <div className='h-[500px] bg-[#747474] my-10 flex justify-evenly items-center'>
      <Card heading={"Our History"} subheading={historyText}/>
      <Card heading={"Our Philosophy"} subheading={philosophyText}/>
      <Card heading={"Our Vision & Impact"} subheading={visionText}/>

    </div>
  )
}

export default About