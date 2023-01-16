import React, { useState } from "react";
import Signupform from "./Signupform";
import Login from "./Login";
import "./Form.css";

function Register() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="reg register text-black">
      <div className="bg-green-800 h-40">
        <h1 className='text-5xl pt-11 font-bold text-yellow-400'>Chiriku App</h1>
        <h2 className='text-2xl py-4 text-white'>Speak Out Against Corruption</h2>
      </div>
      {currentForm === "login" ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signupform toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default Register;
