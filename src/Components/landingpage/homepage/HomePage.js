import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import png from "../../../images/img.png"
import "./HomePage.css"

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <div id='home' className="home-page">
                <Container>
                    <Row>
                        <Col md={6} className="home-content">
                            <h1 className="home-title text-blue-900">
                                Chiriku
                            </h1>
                            <p className="home-text">
                                Chiriku App enables any and every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. Users can also report on things that needs government intervention. Our country must develop novel and localised solutions that will curb this menace, hence the birth of Chiriku App.
                            </p>
                            <button onClick={() => navigate('/register')} className="btn btn-primary" type="submit">Get Started</button>
                        </Col>
                        <Col md={6} className="home-image">
                            <img src={png} alt="chiriku" className="nyv" style={{ width: "100%" }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    )
}

export default HomePage;