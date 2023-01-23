import React from "react";
import "./Form.css";
import { useState, useRef, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

LOGIN_URL = '/login'

const Login = ({ toggleForm }) => {

  const {setAuth} = useContext(AuthContext)
  const [pwd, setPwd] = useState("");
  const [username, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false)

 const userRef = useRef()
  const errRef = useRef()


useEffect(()=>{
  userRef.current.focus();
}, [])
useEffect(()=>{
  setErrMsg('')
}, [username, pwd])

    const handleSubmit = async (e)=>{
    e.preventDefault()
      try {
        const response = await axios.post(LOGIN_URL, 
          JSON.stringify({user, pwd}),
          {
            headers: {'Content-Type': 'application/json', 
            withCredentials: true
          }
          }
          )
          console.log(username, pwd)
          const accessToken = response?.data?.accessToken
          const roles = response?.data?.roles
          setAuth({username, pwd, roles, accessToken})
          setUser('')
          setPwd('')
          setSuccess(true)
      } catch (err) {
        if(!err?.response){
          setErrMsg("no service available")
        }else if (err.response?.status===400){ 
        setErrMsg("missing Username or Password")
      }else if (err.response?.status ==401){
        setErrMsg("Unauthorized")
      }else {
        setErrMsg("login failed")
      }
      errRef.current.focus();

    }
  }

  return (
    <div className="auth-form text-black">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username" className="text-green-800 font-bold">Username</label>
        <input className="text-black"
          type="username"
          id="username"
          placeholder="username"
          autoComplete="off"
          required
          name="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="password" className="text-green-800 font-bold">Password</label>
        <input className="text-black"
          type="password"
          required
          autoComplete="off"
          id="password"
          placeholder="**********"
          name="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button className="btn bg-green-800 text-lg border-4 text-white py-1 hover:text-black">Login</button>
      </form>
      <button className="link btn bg-green-800" onClick={() => toggleForm("register")}>
        Don't have an account? Register here.
      </button>

      <ToastContainer />
    </div>
  );
};

export default Login
