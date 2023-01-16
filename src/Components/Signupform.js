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
        <label htmlFor="username" className="text-green-800 font-bold">Username</label>
        <input className="text-green-800 font-bold"
          type="username"
          id="username"
          placeholder="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <label htmlFor="email" className="text-green-800 font-bold">Email</label>
        <input className="text-black"
          type="email"
          id="emails"
          placeholder="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="password" className="text-green-800 font-bold">Password</label>
        <input className="text-black"
          type="password"
          id="password"
          placeholder="**********"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button className="btn bg-green-800 hover:bg-yellow-500 hover:border-yellow-500 text-lg border-4 text-black py-1">Sign-Up</button>
      </form>

      <button className="link btn bg-green-800" onClick={() => toggleForm("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
export default Signupform;
