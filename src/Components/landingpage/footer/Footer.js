import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'
import png from "../../../images/img.png"

const Footer = () => {
    return (
        <div fluid="md" id="contact" className=" footer">
            <Row>
                <Col xs={12} md={6}>
                    <img src={png} alt="customer service" />
                </Col>
                <Col className='content' xs={12} md={6}>
                    <h1>Contact Us</h1>
                    <p>Our service is available always.</p>
                    <Row className="contacts">
                        <div className="contact">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Nairobi, Kenya</span>
                        </div>
                        <div className="contact">
                            <i className="fa-solid fa-at"></i>
                            <span>info@chirikuapp.com </span>
                        </div>
                        <div className="contact">
                            <i className="fas fa-phone-alt"></i>
                            <span>+254-700-000000</span>
                        </div>
                    </Row>

                    <Row className="socials">
                        <h1>Socials</h1>
                        <div className="icons">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </Row>
                    < Row className="copy">
                        <hr />
                        <p>© {new Date().getFullYear()} All rights reserved. Chiriku App.</p>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
