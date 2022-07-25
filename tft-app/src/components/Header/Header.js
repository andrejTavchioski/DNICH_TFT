import React from "react";
import "./Header.css";
import penguinLogo from "../../images/penguin.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img id="logo-left" className="penguin" src={penguinLogo}></img>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to={"/champions"}>Champions</Link>
          </li>
          <li className="navbar-item">
            <Link to={"/items"}>Items</Link>
          </li>
          <li className="navbar-item">
            <Link to={"/comps"}>Final Comps</Link>
          </li>
          <li className="navbar-item">Quiz</li>
        </ul>
        <img id="logo-right" className="penguin" src={penguinLogo}></img>
      </div>
    </div>
  );
};

export default Header;
