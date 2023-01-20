import React from 'react'
import Services from './myservices/Services'
import Footer from './footer/Footer'
import About from './about/About'
import NavBar from './navbar/NavBar'
import HomePage from './homepage/HomePage'

function LandingPage() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default LandingPage

