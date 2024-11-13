import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigator = useNavigate();

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1 className="login-heading">Create Account</h1>
        <p className="login-para">Please sign up to create Todo</p>
        <form className="form-login">
          <div className="label-wisth-input">
            <label htmlFor="name">Full Name</label>
            <input
              className="login-input"
              id="name"
              type="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="label-wisth-input">
            <label htmlFor="email">Email</label>
            <input
              className="login-input"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="label-wisth-input">
            <label htmlFor="password">Password</label>
            <input
              className="login-input"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        <p>
          Already have an account?
          <span onClick={() => navigator("/login")} className="login-span">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
