import React, {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
let prev = 0;




const Program = () => {

  //Runway Mastery — “Walk with power and grace.”

// Camera Confidence — “Own every frame.”

// Personal Branding — “Learn to market yourself like a pro.”

// Etiquette & Professionalism — “Because beauty begins with discipline.”
  
  const [index, setIndex] = useState(0);

  const slideTwo = ['./image/one.jpg', './image/two.jpg', './image/three.jpg', './image/four.jpg']
  const slideOne = ['./image/vertical-hero-one.jpg', './image/vertical-hero-two.jpg', './image/vertical-hero-three.jpg', './image/vertical-hero-four.jpg']
  const slideThree = ['./image/slidethree1.jpg', './image/slidethree2.jpg', './image/slidethree1.jpg', './image/slidethree2.jpg']
  // const animation = []
  const sideText = [
    {heading: 'Runway Mastery', subheading: 'Walk with power and grace'},
    {heading: 'Camera Confidence', subheading: 'Own every frame'},
    {heading: 'Personal Branding', subheading: 'Learn to market yourself like a pro'},
    {heading: 'Etiquette & Profession', subheading: 'Because beauty begins with discipline'},
    
  ]
  
  function indexCalc(){
    prev =  (prev + 1) % slideOne.length
    return prev
  }

  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  
  return (

    <div className='mx-auto flex h-auto w-full max-w-[1440px] flex-col gap-6 px-4 py-4 sm:px-6 lg:min-h-[550px] lg:justify-between lg:gap-0 lg:px-10 xl:px-20'>
      <div className='flex justify-between items-center'>
        <button className='h-12 w-12 rounded-full border-4 border-gray-300 text-2xl text-gray-300 cursor-pointer sm:h-[60px] sm:w-[60px] sm:text-3xl' onClick={
          () => {
            setIndex(indexCalc())
            AOS.refresh()
            // setIndex((prev) => (prev + 1) % slideTwo.length)
            
          }
        }>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <h1 className='text-right font-mono text-sm italic animate-pulse sm:text-[20px]'>Train. Transform. Take the Stage.</h1>
      </div>


      <div className='flex flex-col gap-6 lg:flex-row lg:justify-between'>

        <div className='flex h-[300px] w-full gap-2.5 p-1 sm:h-[400px] lg:h-[450px] lg:w-[44%] lg:p-2.5'>
          <div className='imageOne w-[40%]'>
            <img className='h-full w-full object-cover' src={slideOne[index]} alt="" title='Image One' data-aos="fade-up-right" data-aos-duration='1000'/>
          </div>
          <div className='flex min-w-0 flex-1 flex-col justify-between gap-2.5'>
            <div className='h-[62%]'>
              <img className='h-full w-full object-cover' src={slideTwo[index]} alt="" title='Image Two' />
            </div>
            <div className='h-[32%]'>
              <img className='h-full w-full object-cover' src={slideThree[index]} alt="" title='Image Three' />
            </div>
          </div>
        </div>

        <div className='relative w-full text-left lg:w-[52%] lg:text-right'>
          <h1 className='mb-3 font-poppins text-5xl font-semibold sm:text-6xl lg:mb-5 lg:text-7xl xl:text-8xl'>{sideText[index].heading}</h1>
          <p className='font-lora text-xl italic sm:text-2xl lg:text-3xl'>ʻʻ{sideText[index].subheading}ʼʼ</p>
          <button className='mt-5 flex h-12 items-center gap-2.5 border-b-2 border-transparent text-lg text-gray-300 transition-all duration-300 cursor-pointer hover:border-gray-500 hover:text-gray-500 sm:text-2xl lg:absolute lg:bottom-0 lg:right-0 lg:mt-0'><span>View Full Curriculum</span><i className="fa-solid fa-arrow-right"></i></button>
        </div>

      </div>


      


    </div>

    
  )
}

export default Program

// <div className='h-[500px] flex'>
    //   <button className='h-[90px] w-max px-4 py-1.5 bg-amber-800' onClick={() => {
    //     setIndex((prev) => (prev + 1) % slideOne.length)
    //   }}>click to change</button>
    //     <div className='w-[450px] h-[450px] border'>
    //       <img className='w-full h-full object-cover' src={slideOne[index]} alt="" />
    //     </div>
    // </div>