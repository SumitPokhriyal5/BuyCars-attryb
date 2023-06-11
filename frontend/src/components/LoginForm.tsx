import { Link } from 'react-router-dom'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { signinApi } from '../store/auth/auth.api';
import { IUserLogin } from '../types/auth.types';
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const { loading } = useSelector((store : RootState) => store.authManager);
    const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>()

    const handleLogin = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const userData : IUserLogin = {
             email,
             password
        }

        dispatch(signinApi(userData , navigate))
   }
   console.log(loading)
  return (
    <form>
        <h1>Login</h1>
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
        <div>New User? <Link to={'/signup'}>Sign Up</Link></div>
        <button disabled={loading} type="button" onClick={handleLogin} className={loading ? "loading" : ""}>
          {loading ? "Loading.." : "Login"}
        </button>
      </form>
  )
}

export default LoginForm