import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/About";
import Todo from "./pages/Todo/Todo";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/todos" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
