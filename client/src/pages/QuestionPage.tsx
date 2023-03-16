import React, { useState } from 'react';
import '../styles/QuestionPage.css';

function QuestionPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
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

  // Calls for Id/Answer and maps out the question to be declared in later functions 
  const handleAnswerSubmit = (id, answer) => {
    const updatedQuestions = questions.map((question) =>
      question.id === id ? { ...question, answer } : question
    );
    setQuestions(updatedQuestions);
  
    const currentQuestion = updatedQuestions[currentQuestionIndex];
    // If answer = "yes" then prompt "please enter a value" triggers -> Currently not working, need help brain hurty
    if (currentQuestion.choices && answer.toLowerCase() === "yes") {
      let value;
      do {
        value = prompt("Please enter a value:");
      } while (value === null);
      const updatedQuestionsWithChoiceAnswer = updatedQuestions.map((question) =>
        question.id === id ? { ...question, answer: value } : question
      );
      setQuestions(updatedQuestionsWithChoiceAnswer);

      return; 
  }
  // Moves user to next question after answering current question 
  setHasAnswered(true); 
}; 

// Moves to next question 
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setHasAnswered(false);
  };

  // Function for submitting a choice for multiple choice questions 
  const handleChoiceSubmit = (choice: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    // Creates new array of questions with updated submitted choices 
    const updatedQuestions = questions.map((question) =>
      question.id === currentQuestion.id ? { ...question, answer: choice } : question
    );
    // sets to updated array 
    setQuestions(updatedQuestions);
    setHasAnswered(true);
  
    // Moves from one question to next so long as there are more 
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Previous question function 
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setHasAnswered(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="question-page">
      <h1>Questions {currentQuestionIndex + 1}</h1>
      <p>{currentQuestion.text}</p>
      {currentQuestion.choices ? (
        <div className="choices-container">
          {currentQuestion.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoiceSubmit(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      ) : (
        <input
          type="text"
          value={currentQuestion.answer}
          onChange={(event) =>
            handleAnswerSubmit(currentQuestion.id, event.target.value)
          }
        />
      )}
      {/* Adds prev button for all questions after ID:1 */}
      {currentQuestionIndex > 0 && (
        <button className="previous-button" onClick={handlePreviousQuestion}>
          Previous
        </button>
      )}
      {!currentQuestion.choices && hasAnswered && (
        <button 
        className="next-button"
        onClick={handleNextQuestion}>
          Next
        </button>
)}
    </div>
  );
}

export default QuestionPage; 