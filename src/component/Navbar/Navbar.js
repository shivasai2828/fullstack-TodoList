import React, { useState } from "react";
import "./Navbar.css";
import todoLogo from "../../assets/todoLlogo.png";

import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigator = useNavigate();
  return (
    <>
      <div className="nav-bg">
        <img
          className="nav-logo"
          onClick={() => navigator("/")}
          src={todoLogo}
          alt="logo"
        />
        <ul className="nav-ul-tag">
          <NavLink to="/">
            <li>Home</li>
            <hr className="nav-hr" />
          </NavLink>

          <NavLink to="/about-us">
            <li>About Us</li>
            <hr className="nav-hr" />
          </NavLink>
          <NavLink to="/todos">
            <li>Todo</li>
            <hr className="nav-hr" />
          </NavLink>
        </ul>
        <button className="nav-btn" onClick={() => navigator("/login")}>
          Logout
        </button>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
