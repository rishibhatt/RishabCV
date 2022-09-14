import React from 'react'
import HeroImage from '../Media/HeroImage.svg'

const Footer = () => {
  return (
    <>
    <div className='bg-darkGray p-10' id='contact'>
        <div className='text-white'>
            <h1 className='decoration-red underline underline-offset-4 text-center'>Contact Me</h1>
            <div className='text-center text-gray flex justify-center gap-10 mt-5 text-xl md:text-3xl'>
                <a href='https://www.facebook.com/rishab.bhatt.969/' className='hover:text-white'><i class="fa-brands fa-facebook"></i></a>
                <a href='https://www.instagram.com/rishibhatt.007/' className='hover:text-white'><i class="fa-brands fa-instagram"></i></a>
                <a href='https://www.linkedin.com/in/rishab-bhatt-7ba7111ab/' className='hover:text-white'><i class="fa-brands fa-linkedin"></i></a>
                <a href='https://github.com/rishibhatt' className='hover:text-white'><i class="fa-brands fa-github"></i></a>
            
            
            
            
            </div>
        </div>
        

    </div>
    </>
  )
}

export default Footer