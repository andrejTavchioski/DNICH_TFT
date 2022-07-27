import React from "react";
import "./Option.css";
const Option = ({ option, handleClick }) => {
  return (
    <div onClick={handleClick} className="option-container">
      <div className="option-text">{option}</div>
    </div>
  );
};

export default Option;
