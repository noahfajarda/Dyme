import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Auth from "../utils/auth";

function QuestionPage() {
    const [answerArray, setAnswerArray] = useState([]);
    const [answer, setAnswer] = useState("");

    if (!Auth.loggedIn()) {
        return <Navigate to="/login" />;
    }

    const submitAnswer = async (event) => {
        event.preventDefault();

        try {
            console.log(answer);
            await setAnswerArray((prev) => [...prev, answer]);
            console.log("This is the prev answerArray:", answerArray);
            setAnswer("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {/* <button>test</button> */}
            <button>
                <a href="/">Link to main page</a>
            </button>
            <div className="col-lg-6">
                <div className="content float-left rounded shadow-lg">
                    <h3>What's the demographic?</h3>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={submitAnswer}
                    >
                        <input
                            placeholder="Add your profile name..."
                            value={answer}
                            className="form-input w-100"
                            onChange={(event) => setAnswer(event.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary"
                            id="searchBtn"
                        >
                            Next
                        </button>
                    </form>
                </div>
            </div>
            {/* <div>testing this to see if it works</div> */}
            {/* <img src="https://tinyurl.com/29ajxfnr" alt="dre" /> */}
        </div>
    );
}

export default QuestionPage;
