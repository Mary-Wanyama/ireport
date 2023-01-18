import React, { useState } from "react";
import Signupform from "./Signupform";
import Login from "./Login";
import "./Form.css";
import Sidebar from "../SideBar/SideBar";

function Register() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div>
      <Sidebar/>
    <div className="register text-black">
      <div className="reg h-40">
        <a href="/"><h1 className='text-5xl pt-11 font-bold text-yellow-400'>Chiriku App</h1></a>
        <h2 className='text-2xl py-4 text-white'>Speak Out Against Corruption</h2>
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
