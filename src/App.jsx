// import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/modelsite';
import About from './components/about';
import Program from './components/program';
import Showcase from './components/showcase';
import Admission from './components/admission';


// const Counter = () => {

//   const [counter, setcounter] = useState(0)

//   return (
//     <div className='h-[100vh] flex flex-col items-center justify-center bg-gray-300'>
//     <p className='text-6xl font-bold mb-4'>You clicked {counter} times</p>
//      <button className='h-[55px] w-[400px] bg-indigo-700 text-amber-50 text-2xl font-medium rounded-2xl' onClick={() => setcounter(counter + 1)}>Click Me</button>
//     </div>
//   )
// }


// const ToogleText = () => {

//   const [isVisible, setisVisible] = useState(false)

//   return (
//     <div className='h-[100vh] flex flex-col items-center justify-center bg-gray-300'>
//     {isVisible && <p className='text-6xl font-bold mb-4'>This text is toogleable</p>}
//      <button className='h-[55px] w-[400px] bg-indigo-700 text-amber-50 text-2xl font-medium rounded-2xl' onClick={() => setisVisible(!isVisible)}>Toogle Text</button>
//     </div>
//   )
// }




const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Program/>
      <Showcase/>
      <Admission/>
    </>
  );
}

export default App
