import React from "react";
import "../layer/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <h2>calorie calculator</h2>
      </div>
      <div className="coin">
      <Link to="/">calorie intake</Link>
      <Link to="/Calorieburned">calorie burned</Link>
      </div>
      
      
    </nav>
  );
};

export default Header;
