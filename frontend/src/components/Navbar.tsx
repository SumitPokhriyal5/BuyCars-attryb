import React from "react";
import { FiHome, FiLogOut } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";
import "../assets/scss/Navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutApi } from "../store/auth/auth.api";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import carLogo from "../assets/images/carlogo.png"

const Navbar: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<any, null, AnyAction>>();

  const handleLogout = () => {
    dispatch(logoutApi());
  };
  return (
    <nav className="navbar">
      <div className="left">
        <img src={carLogo} alt="Logo" />
      </div>
      <div className="right">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              <FiHome />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/sell-car"} className="nav-link">
              <AiFillCar />
              <span>Sell Car</span>
            </Link>
          </li>
          <li className="nav-item">
            <div onClick={handleLogout} className="nav-link">
              <FiLogOut />
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
