import React from 'react'
import Services from './myServices/Services'
import Footer from './Footer/Footer'
import About from './About/About'
import NavBar from './Navbar/NavBar'
import HomePage from './Homepage/HomePage'

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

