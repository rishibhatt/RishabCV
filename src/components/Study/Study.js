import React from 'react'

const Study = () => {
    return (
        <>
        <hr className='dark:text-white md:pt-10  text-black md:mt-14' />
            <div className='bg-white dark:bg-black text-xl lg:text-2xl flex flex-col lg:flex-row lg:ml-32 '>
                <div className='mt-10 p-5'>
                    <h1 className='font-kanit text-center text-5xl underline underline-offset-8 decoration-red dark:text-white text-dark lg:text-3xl'>EDUCATION</h1>
                </div>
                <div className='lg:mt-10  lg:ml-32 lg:w-2/3  p-5 pb-10 text-center lg:text-left text-black dark:text-white flex flex-col gap-3 '>
                    <h1 className='font-bold '><i className="fa-solid fa-school text-black dark:text-white"></i>  Guru Nanak Dev Engineering College <i class="fa-solid fa-location-dot ml-8"></i>  Ludhiana</h1>
                    <h3></h3>
                    <h4 className='font-cursive text-lg text-black dark:text-white '>Bachelor's in Technology of Computer Science and Engineering -- <span className='text-gray'>2017-2021</span> </h4>
                    <p className='text-black dark:text-white font-manrope text-center lg:text-left'>I completed my degree in computer science and engineering with development of projects including BookOcean (sell and buy books), Fake Job Post Predictor, Temperature and Humidity Monitor and Alert Sytem and many more</p>
                </div>
            </div>

        <hr className='dark:text-white text-black mt-10'/>

        </>
    )
}

export default Study