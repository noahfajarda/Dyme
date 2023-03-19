import React, { useState } from 'react';
import '../styles/QuestionPage.css';
import { AnimatePresence, motion} from 'framer-motion'
// import { AnimatePresence, motion } from 'framer-motion';

function QuestionPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [questions, setQuestions] = useState([
    
    {
      id: 1,
      text: 'Please input your monthly Income?',
      answer: '',
    },
    {
      id: 2,
      text: 'Please put down how much you pay for rent?',
      answer: '',
    },
    {
      id: 3,
      text: 'Please provide an estimate for your monthly expenses such as subscriptions?', 
      answer: '',
    },
    {
      id: 4,
      text: 'Please put down how much you pay for your phone plan?', 
      answer: '',
    },
    {
      id: 5,
      text: 'Please provide an estimate on how much you spend on food monthly?',
      answer: '',
    },
    {
      id: 6,
      text: 'Please input how much you pay for your Health Insurance payment plan?',
      answer: '',
    },
    {
      id: 7,
      text: 'Please provide a budget that you have in mind?',
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

    if (currentQuestion && answer.toLowerCase() === 'yes') {
      let value;
      do {
        value = prompt('Please enter a value:');
      } while (value === null);
      const updatedQuestionsWithChoiceAnswer = updatedQuestions.map((question) =>
        question.id === id ? { ...question, answer: value } : question
      );
      setQuestions(updatedQuestionsWithChoiceAnswer);
    }

    setHasAnswered(true);
  };

// Moves to next question 
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setHasAnswered(false);
  };

  // Function for submitting a choice for multiple choice questions 
  // const handleChoiceSubmit = (choice: any) => {
  //   const currentQuestion = questions[currentQuestionIndex];
  //   // Creates new array of questions with updated submitted choices
  //   const updatedQuestions = questions.map((question) =>
  //     question.id === currentQuestion.id ? { ...question, answer: choice } : question
  //   );
  //   // sets to updated array
  //   setQuestions(updatedQuestions);
  //   setHasAnswered(true);

  //   if (currentQuestionIndex < questions.length - 1) {
  //     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  // Previous question function 
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setHasAnswered(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    // <motion.div 
    // key={currentQuestionIndex}
    // initial={{opacity: 0, y: 25}}
    // animate={{opacity:1, y: 0}}
    // exit={{ opacity: 0, y: -25}}
    // transition={{duration:0.5}}> 
    <div className="question-page">
    <h1>Questions {currentQuestionIndex + 1}</h1>
    <AnimatePresence exitBeforeEnter>
      <motion.p
        key={currentQuestion.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        {currentQuestion.text}
      </motion.p>
    </AnimatePresence>
    <input
      type="text"
      value={currentQuestion.answer}
      onChange={(event) =>
        handleAnswerSubmit(currentQuestion.id, event.target.value)
      }
    />
    <div className="button-container">
      {currentQuestionIndex > 0 && (
        <button className="previous-button" onClick={handlePreviousQuestion}>
          Previous
        </button>
      )}
      <AnimatePresence>
        {!hasAnswered && (
          <motion.button
            className="next-button"
            onClick={handleNextQuestion}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Next
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  </div>
);
}

export default QuestionPage;