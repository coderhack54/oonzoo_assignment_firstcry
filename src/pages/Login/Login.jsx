import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile, signOut } from "firebase/auth";
import { auth } from "../../firebase";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();

  const signin= (event) =>{
    event.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then(()=>navigate("/home")).catch((err)=>alert(err.message));

  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__logo">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
            alt="logo"
          />
        </div>
        <h3>Login / Register</h3>
        <div className="login__inputbox">
          <label htmlFor="login">Email ID/Mobile No.</label>
          <input
            type="text"
            name="login"
            placeholder="Enter your Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login__inputbox">
          <label htmlFor="login">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={signin}>CONTINUE</button>
        <Link to="/signup" className="login__link">
          {" "}
          New to FirstCry? Register Here
        </Link>
        <div className="login__separator"></div>
        <p>
          By continuing, you agree to Firstcry's{" "}
          <a href="">Conditions of Use</a> and <a href="">Privacy Notice.</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
