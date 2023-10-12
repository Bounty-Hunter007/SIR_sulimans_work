import React, { useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase_auth";
import Auth_Details from "../Auth_Details";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    console.log(email);
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error);
    })
  };


  return (
    <div>
      <form className="form" onSubmit={signIn}>
        <p className="title">Check in</p>
        <p className="message">Signin to get access to our app.</p>
        {/* <div className="flex">
          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Firstname</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required />
            <span>Lastname</span>
          </label>
        </div> */}

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
        {/* <label>
          <input className="input" type="password" placeholder="" required />
          <span>Confirm password</span>
        </label> */}
        <button className="sign_up">Sign in</button>
        <Auth_Details/>



        <p className="sign_inn">
          If you don't have an account? <a href="#">Signup</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
