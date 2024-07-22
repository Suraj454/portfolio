import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Skiils from './components/Skiils'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'

const App = () => {
  return (
    <div>

    <NavBar/>
    <SocialLinks/>
    <Home/>
    <Portfolio/>
    <Skiils/>
    <Contact/>
   
    </div>
  )
}

export default App
 