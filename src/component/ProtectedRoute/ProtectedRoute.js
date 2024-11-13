import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Route } from "react-router-dom";
function ProtectedRoute({ children }) {
  // Check if the token is in local storage
  const token = localStorage.getItem("token");

  // If there is no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the protected component
  return children;
}

export default ProtectedRoute;
