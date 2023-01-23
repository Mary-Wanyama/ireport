import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Form.css";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../api/axios";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3, 23}$/

const password_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8, 24}$/

const EMAIL_REGEX= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


const Signupform = ({ toggleForm }) => {

  const userRef = useRef()

  const errRef = useRef()





  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)
  const [matchpassword, setMatchpassword] = useState('')

 

  // const [matchfocus, setMatchFocus] = useState(false)

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [password, setPassword] = useState("");
  const [validpassword, setValidpassword] = useState(false)
  const [passwordFocus, setpasswordFocus] = useState(false)

  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(()=>{
    userRef.current.focus()
  }, [])

  useEffect(()=>{
    const result = USER_REGEX.test(username) 
    console.log(result)
    console.log(username) 
    setValidName(result)
  }, [username])

  useEffect(()=>{
    const result = USER_REGEX.test(password) 
    console.log(result)
    console.log(password) 
    setValidpassword(result)

    const match = password===matchpassword 
    setValidMatch(match)
  }, [password, matchpassword])

  useEffect(()=>{
    setErrMsg('')
  }, [username, password, matchpassword])

const REGISTER_URL = "/signup"

  const handleSubmit = async(e)=>{
    e.preventdefault();

    const v1 = USER_REGEX.test(username)
    const v2 = EMAIL_REGEX.test(email)
    const v3 = password_REGEX.test(password)

    if (!v1 || !v2 || !v3){
      setErrMsg("invalid inputs")
      return
    }
    try {
      const response = await axios.post(REGISTER_URL, 
        JSON.stringify({
          username, 
          email,
          password
        }), 
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }

      )
      console.log(response.data)
      console.log(response.accessToken)
      setSuccess(true)
    } catch (error) {
      if(!error?.response){
        setErrMsg("No service response found")
      }else if (error.response?.status ===409){
        setErrMsg("username taken")
      }
      else{
        setErrMsg("Registration failed")
      }
      errRef.current.focus();
    }
  }
  return (
    <div className="auth-form">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="text-green-800 font-bold">
          Username
        
        </label>
        <input className="text-green-800 font-bold"
          type="username"
          id="username"
          placeholder="username"
          name="username"
          ref={userRef}
          value={username}
          autoComplete="off"
          onChange={(event) => setUsername(event.target.value)}
          // value={form.username}
          // onChange={handleChange}
           required
          onFocus = {()=> setUserFocus(true)}
          onBlur = {()=> setUserFocus(false)}
          aria-invalid = {validName ? "false" : "true"}
          
        />
        <label htmlFor="email" className="text-green-800 font-bold">Email</label>
        <input className="text-black"
          type="email"
          id="emails"
          autoComplete="off"
          placeholder="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          // value={form.email}
          // onChange={handleChange}
          aria-invalid = {validEmail ? "false" : "true"}
          onFocus = {()=> setEmailFocus(true)}
          onBlur = {()=> setEmailFocus(false)}
        />

        <label htmlFor="password" className="text-green-800 font-bold">Password</label>
        <input className="text-black"
          type="password"
          id="password"
          placeholder="**********"
          name="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          // value={form.password}
          // onChange={handleChange}
          aria-invalid = {validpassword ? "false" : "true"}
          onBlur = {()=> setpasswordFocus(false)}
          onFocus = {()=> setpasswordFocus(true)}
        />
                <label htmlFor="confirm_password" className="text-green-800 font-bold">confirm password</label>
        <input className="text-black"
          type="password"
          id="password"
          placeholder="**********"
          name="password"
          required
          value={matchpassword}
          onChange={(event) => setMatchpassword(event.target.value)}
          onBlur = {() =>setMatchFocus(false)}
          onFocus = {() =>setMatchFocus(true)}
          // value={form.password}
          // onChange={handleChange}
          aria-invalid = {validMatch ? "false" : "true"}
        />
        <button className="btn bg-green-800 hover:bg-yellow-500 hover:border-yellow-500 text-lg border-4 text-black py-1">Sign-Up</button>
      </form>

      <button className="link btn bg-green-800" onClick={() => toggleForm("login")}  disabled={!validName || !validMatch || !validEmail || !validpassword}>
        Already have an account? Login here.
      </button>
      <ToastContainer />
        {username && <Navigate to="/register" />}
    </div>
  );
};
export default Signupform;
