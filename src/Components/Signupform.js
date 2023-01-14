import React from "react";
import { useState } from "react";
import "./Form.css";

const Signupform = ({ toggleForm }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  return (
    <div className="auth-form">
      <form className="register-form">
        <label htmlFor="username">username</label>
        <input
          type="username"
          id="username"
          placeholder="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <label htmlFor="email">emails</label>
        <input
          type="email"
          id="emails"
          placeholder="email"
          name="email"
          value={form.email}
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
        <button className="btn">Sign-Up</button>
      </form>

      <button className="link btn" onClick={() => toggleForm("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
export default Signupform;
