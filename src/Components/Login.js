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
    <div className="auth-form text-black">
      <form className="login-form">
        <label htmlFor="username" className="text-green-800 font-bold">Username</label>
        <input className="text-black"
          type="username"
          id="username"
          placeholder="username"
          name="username"
          value={form.username}
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
        <button className="btn bg-green-800 hover:bg-yellow-500 hover:border-yellow-500 text-lg border-4 text-black py-1">Login</button>
      </form>
      <button className="link btn bg-green-800" onClick={() => toggleForm("register")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
