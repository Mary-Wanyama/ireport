import React from "react";
import "../App.css";

const Login = ({ toggleForm }) => {
  return (
    <div className="auth-form">
      <form className="login-form">
        <label htmlFor="username">username</label>
        <input
          type="username"
          id="username"
          placeholder="username"
          name="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="**********"
          name="password"
        />
        <button className="btn">login</button>
      </form>
      <button className="link btn" onClick={() => toggleForm("register")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
