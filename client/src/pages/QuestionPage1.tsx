import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import '../styles/QuestionPage.css';

function QuestionPage()  {
  const [[page, direction], setPage] = useState([0, 0]);
  const [questions, setQuestions] = useState([
  
    {
      id: 1,
      text: 'Please input your monthly Income?',
      answer: '',
      type: 'number', 
    },
    {
      id: 2,
      text: 'Please put down how much you pay for rent?',
      answer: '',
      type: 'number', 
    },
    {
      id: 3,
      text: 'Please provide an estimate for your monthly expenses such as subscriptions?', 
      answer: '',
      type: 'number', 
    },
    // {
    //   id: 4,
    //   text: 'Please put down how much you pay for your phone plan?', 
    //   answer: '',
    // },
    // {
    //   id: 5,
    //   text: 'Please provide an estimate on how much you spend on food monthly?',
    //   answer: '',
    // },
    // {
    //   id: 6,
    //   text: 'Please input how much you pay for your Health Insurance payment plan?',
    //   answer: '',
    // },
    // {
    //   id: 7,
    //   text: 'Please provide a budget that you have in mind?',
    //   answer: '',
    // },
  ]);

  // MAKE SEPARATE FORM REQUEST FOR USER TO CHOOSE BUDGET -> TRIGGERS AFTER "SUBMIT" BUTTON 

  const QuestionIndex = wrap(0, questions.length, page);

  const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

    const paginate = (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    };
  
    const handleAnswerSubmit = (id: number, answer: string) => {
      setQuestions(questions.map((question) => {
        if (question.id === id) {
          return { ...question, answer };
        }
        return question;
      }));
    };
    
    // Sets Total to the input of the first Question 
    let total = parseFloat(questions[0].answer);
    // Loops through questions to add up all questions to the total Will later be subtracted from "Monthly Income"
    for (let i = 1; i < questions.length; i++) { 
      const answer = parseFloat(questions[i].answer); 
      if(!isNaN(answer)) { 
        total -= answer;
      }
    }

    const hundleFormSubmit = () => { 
      // console.log(remainingBalance);
      questions.forEach((question) => {
        console.log(Number (question.answer)) 
      })

      // VALUE PUT IN DATABASE lOOK HERE
      console.log(total); 
    }

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.


  // (x) = 2 / 3 / 4 / 5 
  // Option 1: Offers a budget based off of income and compares that to the expenses 
    // Income / (x) = PartialIncome 
    // PartialIncome - Expenses = BudgetTotal 
    // console.log( {BudgetTotal} "Here is the amount of money leftover from your budget when expenses are accounted for, how would you like to adjust this?")
    // Button to change / alter the budget into a variable they choose

  // Option 2: Offers a budget based off of their spending rather than their income 
    // Income - Expenses = Total
    // Total / (x) = BudgetTotal 
    // console.log(BudgetTotal: "Here is the amount of money leftover from your budget when expenses are accounted for, how would you like to adjust this?")

  // Default: 
    // Universal Budget: 80% of Income 


  return (
   <div className="question-page">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e: any, { offset, velocity }: any) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
            <h1>Question {QuestionIndex + 1}</h1>
            <h3>{questions[QuestionIndex].text}</h3>
            <input
              type="number"
              value={questions[QuestionIndex].answer}
              onChange={(event) =>
                handleAnswerSubmit(questions[QuestionIndex].id, event.target.value)
              }
            />
            <div className="button-container">
              {QuestionIndex > 0 && (
                <button className="previous-button" onClick={() => paginate(-1)}>
                  Previous
                </button>
              )}
              {QuestionIndex < questions.length - 1 && (
                <button className="next-button" onClick={() => paginate(1)}>
                  Next
                </button>
              )}
              {QuestionIndex === questions.length - 1 && (
                <button className="next-button" onClick={hundleFormSubmit}>
                  Submit
                </button>
              )}
              {/* Submit -> Total: {total} & Having user Choose their own Budget populates */}
                </div>
                <div> 
                </div>
              </motion.div>
              </AnimatePresence>
              {/* After all Questions have been answered - Budget will be displayed  */}
              {QuestionIndex === questions.length[0] && ( 
                <button className = "income-button">
                  Total: {total}
                </button>
              )}
                </div>
                // Continue Button -> Href"Homepage"
  );
};
  


export default QuestionPage;