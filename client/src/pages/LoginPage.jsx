import React, { useEffect, useState } from "react";
import "../styles/LoginPage.css";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";

// const styles = {
//     card: {
//         padding: 20,
//     },
// };

function LoginPage() {
    // steps:
    // define mutation
    // use useMuation to accept the datas

    // get the user using a query FIND ONE USER
    // cache the found user

    // on sign up
    // add user mutation
    // THEN, get user, params: user ID, then RETURN payload
    // extract the token
    // any time user wants to do a mutation, check if there's a user obejct available
    // return the object

    const [signup, setsignup] = useState(false);

    return (
        <div className="login-container">
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        {!signup ? <Login /> : <Signup />}
                        {/* <!-------- Left Side Of Sign Up Page ----------> */}
                    </div>
                </div>

                {/* <!---------- Left Side Of Sign In Page ---------> */}
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Take control of your money with ease</h3>
                            <p>Sign up now and watch your savings grow!</p>
                            <button
                                className="btn transparent"
                                id="sign-up-btn"
                                onClick={() => setsignup(!signup)}
                            >
                                {signup ? "Sign In" : "Sign Up"}
                            </button>
                        </div>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                            className="image"
                            alt="2nd Pic"
                        />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>Click the Sign In to see the effect</p>
                            <button
                                className="btn transparent"
                                id="sign-in-btn"
                            >
                                Sign in
                            </button>
                        </div>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                            className="image"
                            alt="1 Pic"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
