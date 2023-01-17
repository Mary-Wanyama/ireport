import React from "react";
import "./Form.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  
  // const [form, setForm] = useState({
  //   username: "",
  //   password: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    }).then((data) => {
      if (data.ok) {
        data.json().then((user) => {
          setUser(user);
          if (user.role === true) {
            window.location.href = "/admin";
          } else {
            window.location.href = "/";
          }
        });
      }else {
        toast.error("Incorrect password or username", {
          position: "top-center",
        });
      }
    });
    console.log(user);
  };


  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  // console.log(form);
  return (
    <div className="auth-form text-black">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username" className="text-green-800 font-bold">Username</label>
        <input className="text-black"
          type="username"
          id="username"
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="text-green-800 font-bold">Password</label>
        <input className="text-black"
          type="password"
          id="password"
          placeholder="**********"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn bg-green-800 text-lg border-4 text-black py-1">Login</button>
      </form>
      <button className="link btn bg-green-800" onClick={() => toggleForm("register")}>
        Don't have an account? Register here.
      </button>

      <ToastContainer />
    </div>
  );
};

export default Login;
