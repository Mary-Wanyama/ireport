import React from 'react'
import HomePage from './homepage/HomePage'
import NavBar from './navbar/NavBar'
import About from './about/About'
import Services from './myservices/Services'
import Footer from './footer/Footer'

function LandingPage() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default LandingPage

