import React, { useState } from "react";
import "./Header.css";
import penguinLogo from "../../images/penguin.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const changeActive = (e) => {
    setActiveLink(e.target.innerHTML);
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <img id="logo-left" className="penguin" src={penguinLogo}></img>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link
              onClick={changeActive}
              className={`link-${activeLink === "Home" ? "active" : ""}`}
              to={"/DNICH_TFT"}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={changeActive}
              className={`link-${activeLink === "Champions" ? "active" : ""}`}
              to={"/DNICH_TFT/champions"}
            >
              Champions
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={changeActive}
              className={`link-${activeLink === "Items" ? "active" : ""}`}
              to={"/DNICH_TFT/items"}
            >
              Items
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={changeActive}
              className={`link-${activeLink === "Final Comps" ? "active" : ""}`}
              to={"/DNICH_TFT/comps"}
            >
              Final Comps
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              onClick={changeActive}
              className={`link-${activeLink === "Quiz" ? "active" : ""}`}
              to={"/DNICH_TFT/quiz"}
            >
              Quiz
            </Link>
          </li>
        </ul>
        <img id="logo-right" className="penguin" src={penguinLogo}></img>
      </div>
    </div>
  );
};

export default Header;
