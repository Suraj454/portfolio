import React from 'react'

import html from "../assets/Skiils/html.png"
import css from "../assets/Skiils/css.png";
import javaScript from "../assets/Skiils/javascript.png";
import react from "../assets/Skiils/react.png";
import node from "../assets/Skiils/node.png";
import tailwind from "../assets/Skiils/tailwind.png";
import git from "../assets/Skiils/github.png";
import java from "../assets/Skiils/java.png";
import mongo from "../assets/Skiils/mongo2.png"



const Skiils = () => {

    const skill = [
        {
            id:1,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },

        {
            id:2,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },

        {
            id:3,
            src:javaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },

        {
            id:4,
            src:react,
            title: 'React',
            style: 'shadow-blue-600'
        },

        {
            id:5,
            src:tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },

        {
            id:6,
            src:node,
            title: 'Node',
            style: 'shadow-green-500'
        },

        {
            id:7,
            src:mongo,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },

        {
            id:8,
            src: java,
            title: 'Java',
            style: 'shadow-gray-400'
        },

        {
            id:9,
            src:git,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
     

    ]


  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-full  py-8'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full text-white'>

        <div>
            <p className='sm:text-4xl text-3xlfont-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
            <p className='py-6'>These are the technologies I've Worked with </p>
        </div>

                          
        <div  
        className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 
        text-center py-8 px-12 sm:px-0'>

        { 
            skill.map(({id,src,title,style}) => {
                return(
        <div  key={id}
        className={`shadow-md hover:scale-105 duration-500 
        py-2 rounded-lg ${style}`}>
        
         <img src={src} alt='pic' className='w-20 mx-auto'/>
                 <p className='mt-4'>{title}</p>
            </div>
       
                )
            })
        }

        </div>

    </div>
      
    </div>
  )
}

export default Skiils;
