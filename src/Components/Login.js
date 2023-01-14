import React from "react";
import "./Form.css";
import { useState } from "react";

const Login = ({ toggleForm }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  return (
    <div className="auth-form">
      <form className="login-form">
        <label htmlFor="username">username</label>
        <input
          type="username"
          id="username"
          placeholder="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="**********"
          name="password"
          value={form.password}
          onChange={handleChange}
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
