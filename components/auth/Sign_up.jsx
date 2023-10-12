import React, { useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth"; // Import the functions correctly
import { auth } from "../../Firebase_auth";

const Sign_up = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="form" onSubmit={signUp}>
        <p className="title">Register</p>
        <p className="message">Signup now, get full access to our app.</p>

        <label>
          <input
            className="input"
            type="email"
            placeholder=""
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            className="input"
            type="password"
            placeholder=""
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <button className="sign_up">Sign up</button>
        <p className="sign_inn">
          If you have an account? <a href="#">Signin</a>
        </p>
      </form>
    </div>
  );
};

export default Sign_up;
