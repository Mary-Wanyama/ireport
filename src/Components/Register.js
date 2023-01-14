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
    <div className="reg">
      {currentForm === "login" ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signupform toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default Register;
