import React from "react";
import "./AnswerModal.css";
const AnswerModal = ({ status, question, nextQuestion }) => {
  return (
    <div>
      <div className="modal-background"></div>
      <div className="modal">
        {status ? (
          <div className="modal-status">CORRECT!!</div>
        ) : (
          <div className="modal-status">WRONG!</div>
        )}
        <div className="bottom">
          {!status && (
            <div className="explanation">
              {question.explanation}
              <div>Correct answer: {question.correctAnswer}</div>
            </div>
          )}
          <div className="next-question button" onClick={nextQuestion}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
