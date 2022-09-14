import React from 'react'
import './Hero.css'
import Rishi from '../Media/Rishi.png'
import CV from '../Media/Rishab@2022.pdf'
const Hero = () => {


  return (
    <>
      <div className='hero-container mt-24 flex flex-col md:mt-20 md:flex-row' id='#'>
        <div className='hero-text p-5 md:ml-32'>
          <h1 className='hero-text-1 p-5 dark:text-white text-black text-4xl mb-5 md:text-6xl font-manrope  text-center'>
            My name is  <span className='text-red font-extrabold '>Rishab Bhatt</span>.
          </h1>
          <a className='cv-button bg-red p-5 ml-24 font-bold text-white md:ml-60  dark:text-white' href={CV}>DOWNLOAD CV <i className="fa-solid fa-download text-2xl dark:text-white "></i></a>
        </div>
        <div className='hero-image border-4 border-black dark:border-white w-80 mt-8 md:mr-8 md:w-1/4'>
          <img alt='Image' src={Rishi} className='rishi-image ml-14 pb-8 ' />

        </div>
      </div>
    </>
  )
}

export default Hero