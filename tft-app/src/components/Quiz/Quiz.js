import React, { useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import questions from "../../data/questions";
import Question from "./Question/Question";
import "./Quiz.css";
import AnswerModal from "./AnswerModal/AnswerModal";
import QuizFinal from "./QuizFinal/QuizFinal";
const Quiz = () => {
  const [question, setQuestion] = useState(questions[0]);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(false);
  const [score,setScore]=useState(0)
  const [finished, setFinished] = useState(false);
  const handleClick = (e) => {
    console.log(e.target);
    const answer = e.target.lastChild.data;
    console.log(answer, question.correctAnswer);
    if (answer == question.correctAnswer) {
      console.log(score)
      setScore(score+1)
      setStatus(true);
    } else {
      setStatus(false);
    }
    setShowModal(true);
  };
  const nextQuestion = () => {
    setShowModal(false);
    setProgress(progress + 1);
    if (progress < 9) {setQuestion(questions[progress + 1]);}
    else{
        setFinished(true)
    }
  };
  const restart = () => {
    setFinished(false);
    setProgress(0);
    setScore(0)
    setQuestion(questions[0]);
  };
  return (
    <div>
      <div className="main_container">
        {showModal && (
          <AnswerModal
            status={status}
            nextQuestion={nextQuestion}
            question={question}
          />
        )}
        {finished ? (
          <QuizFinal score={score}restart={restart} />
        ) : (
          <div>
            <div className="bar-container">
              <ProgressBar progress={progress * 10} />
            </div>
            <div className="question-container">
              <Question question={question} handleClick={handleClick} />
            </div>
            <div onClick={restart} className="restart-button button">
              <div className="restart-button-text">Restart</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
