import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-bg">
      <div className="home-sub-div" >
        <h1 className="home-heading">
          Organize your <br />
          Work and Life, finally
        </h1>
        <p className="home-subheading">
          Become Focused. Organized, and Calm with todo APP
        </p>
        <button className="home-todo-btn" >Make a TodoList</button>
      </div>
    </div>
  );
};

export default Home;
