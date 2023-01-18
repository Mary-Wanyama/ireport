import React from "react";
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css"


function NavBar() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="white" expand="lg" className="home navbar navbar-expand-lg navbar-light fixed-top py-3">
                <Container className="container px-4 px-lg-5">
                    <Navbar.Brand className='brand' href="#home">
                        <img src={"https://w7.pngwing.com/pngs/632/307/png-transparent-paper-planes-send-newsletter-icon-blue-tinker-thumbnail.png"} alt="logo" className="logo" />
                        <span className="navbar-brand">CHIRIKU APP</span>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="navbar-nav ms-auto my-2 my-lg-2 me-lg-4">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li><Nav.Link href="#home">Home</Nav.Link></li>
                                <li><Nav.Link href="#about">About Us</Nav.Link></li>
                                <li><Nav.Link href="#services">Services</Nav.Link></li>
                                <li><Nav.Link href="#contact">Contact Us</Nav.Link></li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="navbar-popup navbar-nav ms-auto my-2 my-lg-0">
                            <div className="navbar-popup"
                                modal
                                closeOnDocumentClick
                                position='top left'
                            >
                                <Button className='popup-btn btn btn-primary' variant="primary" onClick={() => navigate('/register')}>Log In</Button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler navbar-toggler-left" />
                </Container>
            </Navbar>
        </>

    )
}
export default NavBar;