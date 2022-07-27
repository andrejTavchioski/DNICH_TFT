import React from "react";
import "./ProgressBar.css";
const ProgressBar = ({ progress }) => {
  return (
    <div className="bar">
      <div
        className="progress"
        style={{
          height: 40,
          width: `${progress}%`,
          backgroundColor: "#7FFFD4",
        }}
      >
        {progress >= 50 ? (
          <div className="progress-text" style={{ color: "black" }}>
            {progress}%
          </div>
        ) : (
          <div className="progress-text" style={{ color: "white" }}>
            {progress}%
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
