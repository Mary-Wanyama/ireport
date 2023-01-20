import React, { useState } from "react";
import Signupform from "./Signupform";
import Login from "./Login";
import "./Form.css";
import logo from '../Components/Chiriku-logo.png'

function Register() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div>
    <div className="register text-black">
      <div className="reg h-59">
      <img className="rounded-full h-28 w-28 mx-auto" src={logo} alt=""/>
        <a href="/"><h1 className='text-5xl pt-2 font-bold text-yellow-400'>Chiriku</h1></a>
        <h2 className='text-2xl py-2 text-white'>Speak Out Against Corruption</h2>
      </div>
      {currentForm === "login" ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signupform toggleForm={toggleForm} />
      )}
    </div>
    </div>

  );
}

export default Register;
