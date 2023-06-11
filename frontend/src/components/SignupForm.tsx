import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { signupApi } from "../store/auth/auth.api";
import { IUserSignup } from "../types/auth.types";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email , setEmail] = useState("")
  const { loading } = useSelector((store : RootState) => store.authManager);
  const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>()
  const navigate = useNavigate();

  const handleSignUp = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const userData : IUserSignup = {
         username,
         email,
         password
    }
    dispatch(signupApi(userData , navigate))
    
}

console.log(loading)

  return (
      <form>
         <h1>Sign Up</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Enter your Username"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Enter your Email"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </div>
        <div>Existing User? <Link to={'/login'}>Login</Link></div>
        <button disabled={loading} type="button" onClick={handleSignUp} className={loading ? "loading" : ""}>
          {loading ? "Loading.." : "Sign Up"}
        </button>
      </form>
  );
};

export default SignupForm;