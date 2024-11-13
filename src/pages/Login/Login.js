import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = (e) => {
    e.preventDefault();
    // Replace with your authentication logic
    console.log(email, password);
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
        <p className="login-para">Please login to Todo Application</p>
        <form onSubmit={onSubmitLogin} className="form-login">
          <div className="label-wisth-input">
            <label htmlFor="email">Email</label>
            <input
              className="login-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="label-wisth-input">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          Create an
          <span onClick={() => navigator("/signup")} className="login-span">
            account?
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
