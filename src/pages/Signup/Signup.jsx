import React, { useEffect, useState } from "react";
import "./Signup.scss";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username,setUsername] = useState("");
  const [user,setUser] = useState("");
  const navigate= useNavigate();


    const signUp=async(event)=>{
        event.preventDefault();
        try{
            const authuser= await createUserWithEmailAndPassword(auth,email,password);
            console.log(authuser)
            updateProfile(auth.currentUser, {
                displayName: username,
              });
            alert("Sign up successfully✅");
            navigate("/");
        }catch(err){
            alert(err.message);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
          if (authUser) {
            // user has logged in...
            // console.log(authUser);
            setUser(authUser);
          } else {
            // user has logged out ...
            setUser(null);
          }
        });
        return () => {
          // perform some cleanup before executing again
          unsubscribe();
        };
      }, [user, username]);


  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__container__logo">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
            alt="logo"
          />
        </div>
        <h3>Register</h3>
        <div className="signup__inputbox">
          <label htmlFor="signup__name">Username</label>
          <input
            type="text"
            name="signup__name"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="signup__inputbox">
          <label htmlFor="signup__email">Email ID</label>
          <input
            type="text"
            name="signup__email"
            placeholder="Enter your Email ID."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signup__inputbox">
          <label htmlFor="signup__password">Password</label>
          <input
            type="password"
            name="signup__password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={signUp}>CONTINUE</button>
      </div>
    </div>
  );
};

export default Signup;
