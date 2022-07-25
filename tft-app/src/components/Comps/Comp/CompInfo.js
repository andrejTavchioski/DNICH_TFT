import React from "react";
import "./CompInfo.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
const CompInfo = ({ name, type }) => {
  return (
    <div className="comp-info-container">
      <div className="comp-name">{name}</div>
      <div className="tooltip-info">
        Tactic: {type.name}
        <div className="tooltip-text-info">{type.description}</div>
        <AiOutlineInfoCircle />
      </div>
    </div>
  );
};

export default CompInfo;
