import React from 'react'
import heroImage from "../assets/heroImage.png"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll";

const Home = () => {
  return (
       <div name="home"
        className=' h-screen  w-full bg-gradient-to-b
       from-black to-gray-800 '>

        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row pb-12 sm:pb-0'>

        <div className='flex flex-col justify-center h-full w-full  '>

            <h2 className='text-4xl sm:text-5xl font-semibold text-white w-full' > I'm a Web Developer </h2>
            <p className='text-gray-500 py-4 max-w-md'>
               I am passionate web developer with a strong foundation in creating responsive, user-centric websites.
               Proficient in HTML, CSS, and JavaScript, I have hands-on experience with modern framework like React and Node.js
               through Personal initiatives.
            </p>

            <div>

                <Link to="project"  smooth duration={500}
                 className=' group text-white w-fit sm:px-6 px-3 sm:py-3 py-2 my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500'>
                    Projects
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>

        <div >
            <img src={heroImage}
            alt='my profile' 
            className='rounded-2xl mx-auto w-2/3 md:w-2/3 '/>
        </div>


       </div>
       </div>
    
  )
}

export default Home
