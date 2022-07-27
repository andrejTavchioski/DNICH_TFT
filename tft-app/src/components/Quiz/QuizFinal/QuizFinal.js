import React from "react";
import { BiSad } from "react-icons/bi";
import { Link } from "react-router-dom";
import './QuizFinal.css'
const QuizFinal = ({ score, restart }) => {
  return (
    <div>
          {score > 5 ? (
            <div className="congratulations">
              <div className="congratulations-title">Congratulations!!!</div>
              <div className="congratulations-text">
                You have completed the TFT Quiz with a score of:
              </div>
              <div className="score">{score}/10</div>
            </div>
          ) : (
            <div className="congratulations">
              <div className="congratulations-title">
                Oof <BiSad />
              </div>
              <div className="congratulations-text">
                You have completed the TFT Quiz with a score of:
              </div>
              <div className="score">{score}/10</div>
              <div className="tip">
                Keep learning and come back in order to ACE this quiz!
              </div>
            </div>
          )}
          <div className="buttons">
            <div onClick={restart} className="button-left button">
              Try Again
            </div>
            <div className="button-right button">
              <Link to={"/DNICH_TFT"}>To Home</Link>
            </div>
          </div>
        </div>
  );
};

export default QuizFinal;
