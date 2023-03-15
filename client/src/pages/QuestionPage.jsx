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
      answer: '',
    },
    {
      id: 3,
      text: 'Do you have any monthly expenses such as subscriptions?',
      answer: '',
    },
    {
      id: 4,
      text: 'Do you have a phone plan?',
      answer: '',
    },
    {
      id: 5,
      text: 'Please provide an estimate on how much you spend on food monthly?',
      answer: '',
    },
    {
      id: 6,
      text: 'Do you have a Health Insurnace payment plan?',
      answer: '',
    },
    {
      id: 7,
      text: 'Can you input a budget that you have in mind?',
      answer: '',
    },
  ]);

  const handleAnswerSubmit = (id, answer) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, answer } : question
    );
    setQuestions(updatedQuestions);
  };

  const handleNextQuestion = () => { 
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex]; 

  return (
    <div className="question-page">
      <h1>Questions {currentQuestionIndex + 1}</h1>
      <p>{currentQuestion.text}</p>
      <input 
      type = "text"
      value = {currentQuestion.answer}
      onChange = {(event) => 
      handleAnswerSubmit(currentQuestion.id, event.target.value)}/>
    {currentQuestionIndex < questions.length -1 && 
    (<button className="next-button" onClick={handleNextQuestion}>Next</button>)}
    </div>
  );
}

export default QuestionPage; 
