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

    <div className='h-[550px] px-20 flex flex-col justify-between'>
      <div className='flex justify-between items-center'>
        <button className='w-[60px] h-[60px] rounded-full border-4 text-3xl border-gray-300 text-gray-300 cursor-pointer' onClick={
          () => {
            setIndex(indexCalc())
            AOS.refresh()
            // setIndex((prev) => (prev + 1) % slideTwo.length)
            
          }
        }>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <h1 className=' font-mono text-[20px] italic animate-pulse'>Train. Transform. Take the Stage.</h1>
      </div>


      <div className='flex justify-between'>

        <div className='w-[500px] h-[450px] p-2.5 flex gap-2.5'>
          <div className='imageOne w-[200px] '>
            <img className='h-full w-full object-cover' src={slideOne[index]} alt="" title='Image One' data-aos="fade-up-right" data-aos-duration='1000'/>
          </div>
          <div className='flex flex-col  w-[280px] gap-2.5 justify-between'>
            <div className='h-[280px]'>
              <img className='h-full w-full object-cover' src={slideTwo[index]} alt="" title='Image Two' />
            </div>
            <div className=' h-[140px]'>
              <img className='h-full w-full object-cover' src={slideThree[index]} alt="" title='Image Three' />
            </div>
          </div>
        </div>

        <div className='w-[800px]  text-right relative'>
          <h1 className='font-poppins text-9xl font-semibold mb-5'>{sideText[index].heading}</h1>
          <p className='font-lora text-3xl italic'>ʻʻ{sideText[index].subheading}ʼʼ</p>
          <button className='flex text-2xl text-gray-300 items-center gap-2.5 h-12 absolute bottom-0 right-0 border-b-2 border-transparent transition-all duration-300 cursor-pointer hover:border-gray-500 hover:text-gray-500'><span>View Full Curriculum</span><i className="fa-solid fa-arrow-right"></i></button>
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