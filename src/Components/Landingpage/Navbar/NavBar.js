import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css"
import logo from '../Homepage/Chiriku-logo.png'


function NavBar() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar expand="lg" className="home bg-green-800 navbar navbar-expand-lg navbar-light fixed-top py-3">
                <Container className="container px-4 px-lg-5">
                    <Navbar.Brand className='brand' href="/home">
                        <img className="rounded-full h-24 w-24 mx-auto" src={logo} alt="" />
                        <span className="navbar-brand text-wh text-white">Chiriku</span>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="navbar-nav ms-auto my-2 my-lg-2 me-lg-4">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li><Nav.Link href="/" className="text-gray-200">Home</Nav.Link></li>
                                <li><Nav.Link href="#about" className="text-gray-200">About Us</Nav.Link></li>
                                <li><Nav.Link href="#services" className="text-gray-200">Services</Nav.Link></li>
                                <li><Nav.Link href="#contact" className="text-gray-200">Contact Us</Nav.Link></li>
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
                                {/* <Button className=' bg-slate-300' variant="primary" onClick={() => navigate('/register')}>Log In</Button> */}
                                <button onClick={() => navigate('/register')} className="nav-btn bg-yellow-500 text-lg border-4 text-white py-1">Login</button>
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