import React from "react";
import Option from "./Option/Option";
import "./Question.css";
const Question = ({ question, handleClick }) => {
  return (
    <div>
      <div className="question-number">Question {question.number}:</div>
      <div className="question">{question.question}</div>
      <div className="options">
        {question.answers.map((q) => (
          <Option option={q} handleClick={handleClick}></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
