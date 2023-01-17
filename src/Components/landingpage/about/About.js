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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About