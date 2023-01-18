import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import png from "../../../images/img.png"
import "./about.css"
 

const About = () => {
  return (
    <>
      <div id='about' className='about us'>
        <Container>
          <Row>
            <Col md={6} className="about-image">
              <img src={png} alt="image" />
            </Col>
            <Col md={6} className="about-content">
              <h1 className="about-title"><strong>About Us</strong></h1>
              <p>
                Our mission as Chiriku community is to give a voice to all people in our nation to have a platform that they can report any and all incidents that occur like corruption cases. It is understandable that navigating through the mainstream sometimes is not very efficient and effective. This is why we developed this platform that makes it easy to for citizens to report any and all incidents.
              </p>
              <p>
                Chiriku App is a space that connects citizens with others around the country and also the relevant authorities in a simple way that is beneficial to all. Our community is made up of goal driven individuals whos are committed to making the life of all citizens safe and protected.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About