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

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.




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
              type="text"
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
            </div>
        </motion.div>
      </AnimatePresence>
  </div>
  );
};
  


export default QuestionPage;