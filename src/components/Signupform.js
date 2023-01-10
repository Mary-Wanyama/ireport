import React from "react";
import "../App.css";

const Signupform = ({ toggleForm }) => {
  return (
    <div className="auth-form">
      <form className="register-form">
        <label htmlFor="username">username</label>
        <input
          type="username"
          id="username"
          placeholder="username"
          name="username"
        />
        <label htmlFor="emails">emails</label>
        <input type="emails" id="emails" placeholder="emails" name="emails" />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="**********"
          name="password"
        />
        <button className="btn">Sign-Up</button>
      </form>

      <button className="link btn" onClick={() => toggleForm("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
export default Signupform;
