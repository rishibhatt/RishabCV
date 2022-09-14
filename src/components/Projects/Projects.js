import React from 'react'
import './Projects.css'
import Tilt from 'react-parallax-tilt'
import P1 from '../Media/project1.png'

const Projects = () => {
    return (
        <>
            <div id='projects' className='mt-20 mb-20 w-full md:ml-24 container'>
                <div>
                    <h1 className='font-kanit text-center text-5xl underline underline-offset-8 decoration-red dark:text-white text-black'>Projects</h1>
                </div>

                <div className='project-container pt-20 p-5  w-full gap-10 flex flex-wrap flex-col md:flex md:flex-row'>
                    <Tilt>
                        <div className=' card h-96 w-72 p-5 md:w-96 rounded-2xl dark:text-white text-black  border-4 border-red drop-shadow-2xl '>
                            <h1 className='text-center font-rubik text-2xl pt-10'>Real Estate Site</h1>
                            <div className='p-3 text-center font-rubik mt-10'>
                                <p>This project is a Real Estate "Rent a Property" web app with filtering mehanism</p>
                            </div>
                           
                            <div className='links text-center mt-10 flex justify-center gap-10'>
                            <a href='https://github.com/rishibhatt/real-estate' className='hover:underline hover:decoration-red hover:decoration-wavy'><i className="fa-brands fa-github"></i>  Repo Link</a>
                            <a href='https://reunion2.netlify.app/' className='hover:underline hover:decoration-red hover:decoration-wavy'><i className="fa-solid fa-link"></i> Live Project</a>
                            </div>
                        </div>

                        
                    </Tilt>
                    <Tilt>
                    <div className=' card h-96 w-72 p-5 md:w-96 rounded-2xl dark:text-white text-black  border-4 border-red drop-shadow-2xl '>
                            <h1 className='text-center font-rubik text-2xl pt-10'>Instagram Clone</h1>
                            <div className='p-3 text-center font-rubik mt-10'>
                                <p>This project is a clone of Instagram with minimal functionalities such as commenting and posting images.</p>
                            </div>
                           
                            <div className='links text-center mt-10 flex justify-center gap-10'>
                            <a href='https://github.com/rishibhatt/insta-clone' className='hover:underline hover:decoration-red hover:decoration-wavy'><i className="fa-brands fa-github"></i>  Repo Link</a>
                            <a href='' className='hover:underline hover:decoration-red hover:decoration-wavy'><i className="fa-solid fa-link"></i> Live Project</a>
                            </div>
                        </div>

                    </Tilt>
                    <Tilt>
                    <div className=' card h-96 w-72 p-5 md:w-96 rounded-2xl dark:text-white text-black  border-4 border-red drop-shadow-2xl '>
                            <h1 className='text-center font-rubik text-2xl pt-10'>Mera Gaon - frontend design</h1>
                            <div className='p-3 text-center font-rubik mt-10'>
                                <p>This project is a fronted designfor a agritech firm "Mera Gaon". This is done as an assignment.</p>
                            </div>
                           
                            <div className='links text-center mt-10 flex justify-center gap-10'>
                            <a href='https://github.com/rishibhatt/mera-gaon-frontend' className='hover:underline hover:decoration-red hover:decoration-wavy'><i className="fa-brands fa-github"></i>  Repo Link</a>
                            <a href='https://rishibhatt.github.io/mera-gaon-frontend/' className='hover:underline hover:decoration-red hover:decoration-wavy'><i className="fa-solid fa-link"></i> Live Project</a>
                            </div>
                        </div>

                    </Tilt>
                    
                </div>

                <div className='block float-right mt-5 mr-10'><a href='https://github.com/rishibhatt' className=' dark:bg-white bg-black text-white dark:text-black p-3 rounded-full'>More projects <i class="fa-solid fa-arrow-right"></i></a></div>
            </div>
        </>
    )
}

export default Projects