import React from "react";
import { useState } from "react";
import "./Form.css";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signupform = ({ toggleForm }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Flag to indicate if the user has successfully registered
  const [registered, setRegistered] = useState(false);

  // Register the user using the provided username, email, and password
  const handleRegister = () => {
    // Validate the provided values
    if (!username || !email || !password) {
      toast.error("Please enter a valid username, email, and password.", {
        position: "top-center",
      });
      // return;
    }

    // Create a new user object
    const newUser = {
      username,
      email,
      password,
    };
    console.log(newUser);
    // Send the new user object to the backend API for registration
    fetch("https://reporting-production.up.railway.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.message, {
            position: "top-center",
          });
        } else {
          toast.success("Signed up successfully", {
            position: "top-center",
          });
        }

        setRegistered(true);
      });
  };

  if (registered) {
    return <Navigate to="/register" />;
  }


  // const [form, setForm] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  // console.log(form);
  return (
    <div className="auth-form">
      <form onSubmit={handleRegister} className="register-form">
        <label htmlFor="username" className="text-green-800 font-bold">Username</label>
        <input className="text-green-800 font-bold"
          type="username"
          id="username"
          placeholder="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          // value={form.username}
          // onChange={handleChange}
        />
        <label htmlFor="email" className="text-green-800 font-bold">Email</label>
        <input className="text-black"
          type="email"
          id="emails"
          placeholder="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          // value={form.email}
          // onChange={handleChange}
        />

        <label htmlFor="password" className="text-green-800 font-bold">Password</label>
        <input className="text-black"
          type="password"
          id="password"
          placeholder="**********"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          // value={form.password}
          // onChange={handleChange}
        />
        <button className="btn bg-green-800 hover:bg-yellow-500 hover:border-yellow-500 text-lg border-4 text-black py-1">Sign-Up</button>
      </form>

      <button className="link btn bg-green-800" onClick={() => toggleForm("login")}>
        Already have an account? Login here.
      </button>
      <ToastContainer />
        {registered && <Navigate to="/register" />}
    </div>
  );
};
export default Signupform;
