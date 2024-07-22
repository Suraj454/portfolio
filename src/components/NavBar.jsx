import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const Links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "project"
        },
        {
            id: 3,
            link: "skills"
        },
        {
            id: 4,
            link: "contact"
        }

    ];


    return (
        <div className='flex justify-between items-center w-full h-16 px-12  text-white bg-black fixed'>

            <div>
                <h1 className='text-3xl ml-2'>Suraj</h1>
            </div>

            <ul className='hidden md:flex'>
                {Links.map(({ id, link }) => {

                    return (

                        <li
                            key={id}
                            className='px-5 cursor-pointer capitalize font-medium text-gray-500 text-lg 
                            hover:scale-105 duration-200'>

                            <Link to={link} smooth duration={500} >
                                {link}
                            </Link>
                        </li>

                    )
                })}
            </ul>

            <div onClick={() => setNav(!nav)} 
            className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden '>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>


            {nav && (

                <ul className='flex flex-col justify-start items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b
      from-black to-gray-800  text-white py-36'>

                {Links.map(({ id, link }) => {

                    return (

                        <li
                            key={id}
                            className='px-4 cursor-pointer capitalize py-3 text-xl'>
                            
                            <Link  onClick={() => setNav(!nav)}
                             to={link}
                              smooth duration={500} >
                                {link}
                            </Link>

                        </li>
                    )
                })}

            </ul>

            )}

        
        </div>
    )
}

export default NavBar
