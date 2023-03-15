import React, { useState } from 'react';
import '../styles/QuestionPage.css';

function QuestionPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: 'What is your monthly Income?',
      answer: '',
    },
    {
      id: 2,
      text: 'Do you pay rent?',
      choices: ["yes", "no"], 
      answer: '',
    },
    {
      id: 3,
      text: 'Do you have any monthly expenses such as subscriptions?',
      choices: ["yes", "no"], 
      answer: '',
    },
    {
      id: 4,
      text: 'Do you have a phone plan?',
      choices: ["yes", "no"], 
      answer: '',
    },
    {
      id: 5,
      text: 'Please provide an estimate on how much you spend on food monthly?',
      choices: ["yes", "no", "unsure"],
      answer: '',
    },
    {
      id: 6,
      text: 'Do you have a Health Insurnace payment plan?',
      choices: ["yes", "no"], 
      answer: '',
    },
    {
      id: 7,
      text: 'Can you input a budget that you have in mind?',
      choices: ["yes", "no", "unsure"],
      answer: '',
    },
  ]);

  const handleAnswerSubmit = (id, answer) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, answer } : question
    );
    setQuestions(updatedQuestions);
    if (currentQuestionIndex < questions.length - 1) {
      const nextQuestion = questions[currentQuestionIndex + 1];
      if (nextQuestion && nextQuestion.choices) {
        if (answer.toLowerCase() === "yes") {
          const value = prompt("Please enter a value:");
          const updatedNextQuestion = { ...nextQuestion, answer: value };
          const updatedQuestions = questions.map((question) =>
            question.id === updatedNextQuestion.id ? updatedNextQuestion : question
          );
          setQuestions(updatedQuestions);
        } else {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) return; // Don't go past the last question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex === 0) return; // Don't go before the first question
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const currentQuestion = questions[currentQuestionIndex]; 

  return (
    <div className="question-page">
      <h1>Questions {currentQuestionIndex + 1}</h1>
      <p>{currentQuestion.text}</p>
      {currentQuestion.choices ? (
        currentQuestion.choices.map((choice, index) => (
          <button
            key={index}
            className="choice-button"
            onClick={() => handleAnswerSubmit(currentQuestion.id, choice)}
          >
            {choice}
          </button>
        ))
      ) : (
        <input 
          type="text"
          value={currentQuestion.answer}
          onChange={(event) => handleAnswerSubmit(currentQuestion.id, event.target.value)}
        />
      )}
      {currentQuestionIndex > 0 && (
        <button className="prev-button" onClick={handlePrevQuestion}>
          Prev
        </button>
      )}
      {currentQuestionIndex < questions.length - 1 && (
        <button className="next-button" onClick={handleNextQuestion}>
          Next
        </button>
      )}
    </div>
  );
}

export default QuestionPage; 