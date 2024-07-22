import React from 'react'
import Admin_UI from "../assets/portfolio/Admin_UI.png";
import movie_app from "../assets/portfolio/movie_app.png";
import Blog_Website from "../assets/portfolio/Blog_Website.png";
import ReactCrud from "../assets/portfolio/Crud_App.png";
import Travel_Website from "../assets/portfolio/Travel_Website.png";
import Weather_App from "../assets/portfolio/Weather_App.png";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Admin_UI,
            title:"Admin UI",
            code:"",
            demo:""

        },

        {
            id: 2,
            src: movie_app,
            title:"React Movie App",
            code:"https://github.com/Suraj454/react-movie-app.git",
            demo:"https://react-movie-app-suraj454.netlify.app/"
        },

        {
            id: 3,
            src: Blog_Website,
            title:"Blog Website",
            code:"https://github.com/Suraj454/news-website.git",
            demo:"https://silver-cuchufli-8ad796.netlify.app/"
        },

        {
            id: 4,
            src: ReactCrud,
            title:"React CRUD ",
            code:"https://github.com/Suraj454/REACT-CRUD-APP.git",
            demo:"https://react-crud-operation-app.netlify.app/"
        },

        {
            id: 5,
            src: Travel_Website,
            title:"travel Website",  
            code:"https://github.com/Suraj454/React-Travel-Website.git",
            demo:"https://react-travel-website-suraj454.netlify.app/"
        },

        {
            id: 6,
            src: Weather_App,
            title:"Weather App",
            code:"https://github.com/Suraj454/Weather-App.git",
            demo:"https://suraj454.github.io/Weather-App/"
        },


    ]
    return (
        <div name="project" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='sm:text-4xl text-3xl font-bold inline border-b-4 border-gray-500'>Project</p>
                    <p className='py-6'>Check out some of my work right here </p>
                </div>

                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 
                    px-13 sm:px-0'>

                    {
                        portfolios.map(({ id, src ,title ,demo ,code}) => {
                            return (

                                <div  key={id}className='shadow-md shadow-gray-600 rounded-lg'>
                                    <img src={src} alt="pic"
                                        className='rounded-md duration-200 hover:scale-105 w-screen h-40' />
                                        <p className='w-full py-1 pt-2 px-3 capitalize font-semibold'>{title}</p>

                                    <div className=' flex items-center justify-evenly'>
                                        <button className='w-1/2 px-4 pb-2 m-2 duration-200 hover:scale-105'><a href={demo}> Demo </a> </button>
                                        <button className='w-1/2 px-4 pb-2 m-2 duration-200 hover:scale-105'><a href={code}> Code </a> </button>
                                    </div>

                                </div>


                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Portfolio
