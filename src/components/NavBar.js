import React from "react";
import "./Nav.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div>
        <h3>LOGO</h3>
      </div>
      <nav ref={navRef}>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/register">Reg/Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

// const Div = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 80px;
//   padding: 0 2rem;
//   background-color: darkgreen;
//   color: white;
//   box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
// `;

// const Nav = styled.nav`
//   a {
//     margin: 0 2rem;
//     color: white;
//     cursor: pointer;
//     text-decoration: none;
//     padding: 5px;
//   }
//   a:hover {
//     color: aqua;
//   }
// `;

// const Logo = styled.div`
//   flex: 30%;
//   display: flex;
//   justify-content: flex-end;
//   padding-right: 50px;
//   background-color: salmon;
// `;

export default NavBar;
