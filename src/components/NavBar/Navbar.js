import React, { useState,useEffect } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import useDark from '../hooks/dark';
import './Navbar.css'
const Navbar = () => {
    const [colorBackground, setTheme] = useDark();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menu, setMenu] = useState('hidden');
    const [isModeOn, setIsModeOn] = useState(true);
    const themeIcon = isModeOn ? <i className="fa-solid fa-sun text-yellow-400 text-xl"></i> : <i className="fa-solid fa-moon text-xl text-black"></i>
    const [menuBar, setMenubar] = useState(<i className="fa-solid fa-bars text-3xl text-white "></i>);
    const toggleIcon = () => {
        setTheme(colorBackground);
        if (isModeOn === true) {
            setIsModeOn(false);
        }
        else {
            setIsModeOn(true);
        }
    }
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isMenuOpen]);

    const toggleMenu = () => {
        if (menu === 'hidden') {
            setIsMenuOpen(!isMenuOpen);
            setMenu('nav-mobile dark:bg-black dark:text-white')
            setMenubar(<i className="fa-solid fa-xmark text-3xl dark:text-white "></i>)
        }

        else {
            setIsMenuOpen(false);
            setMenu('hidden')
            setMenubar(<i className="fa-solid fa-bars text-3xl dark:text-white"></i>)
        }
    }

    return (
        <>

            <div className='nav-container p-5 flex justify-around dark:bg-inherit'>

                <div className='nav-items text-xl hidden md:flex flex-row dark:text-white  justify-around'>
                    <a href='#'><h3 className='hover:underline hover:decoration-red underline-offset-4 decoration-4'>
                        Home
                    </h3></a>
                    <a href='#experience'><h3 className='hover:underline hover:decoration-red underline-offset-4 decoration-4'>
                        Experience
                    </h3></a>
                    <a href='#projects'><h3 className='hover:underline hover:decoration-red underline-offset-4 decoration-4'>
                        Projects
                    </h3></a> 
                    <a href='#contact'><h3 className='hover:underline hover:decoration-red underline-offset-4 decoration-4'>
                        Contact
                    </h3></a> 

                    <div className='theme-mode'>
                        <button onClick={toggleIcon}>{themeIcon}</button>
                    </div>
                </div>

                <div className={menu}>


                    <div className='mt-60 p-5 md:text-3xl'>


                        <div className='p-5'>
                            <a href='#' onClick={toggleMenu}><h3 className='hover:underline hover:decoration-red underline-offset-4 decoration-4'>Home</h3></a>
                        </div>
                        <div className='p-5'>
                            <a href='#experience' onClick={toggleMenu}><h3 className='hover:underline hover:decoration-red underline-offset-4 decoration-4'>Experience</h3></a>
                        </div>
                        <div className='p-5'>
                            <a href='#projects ' onClick={toggleMenu}><h3 className='hover:underline hover:decoration-red underline-offset-4 decoration-4'>Projects</h3></a>
                        </div>
                        <div className='p-5'>
                            <a href='#contact' onClick={toggleMenu}><h3 className='hover:underline hover:decoration-red underline-offset-4 decoration-4'>Contact</h3></a>
                        </div>
                        <div className='p-5'>
                            <button onClick={toggleIcon}>{themeIcon}</button>
                        </div>

                    </div>



                </div>



            </div>
            <div className='md:hidden absolute top-9 border dark:border-white right-10 '>
                <button className='dark:text-black p-3 pb-2' onClick={toggleMenu}>{menuBar}</button>
            </div>

        </>
    )
}

export default Navbar