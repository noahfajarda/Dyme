import React, { useEffect, useState } from "react";
import "../styles/LoginPage1.css";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";

// const styles = {
//     card: {
//         padding: 20,
//     },
// };

function LoginPage1() {
    // steps:
    // define mutation
    // use useMuation to accept the data

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
                        {!signup ? (
                            <form action="#" className="sign-in-form">
                                <h2 className="title">Sign In </h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn solid"
                                />
                                <p className="social-text">
                                    Or Sign in with social platforms
                                </p>

                                {/* <!-- ------Social Icons For Sign In Page --------> */}
                                <div className="social-media">
                                    <a
                                        href="https://facebook.com/"
                                        className="social-icon"
                                    >
                                        {/* <i className="fab fa-facebook-f"></i> */}
                                    </a>
                                    <a
                                        href="https://twitter.com/home"
                                        className="social-icon"
                                    >
                                        {/* <i className="fab fa-twitter"></i> */}
                                    </a>
                                    <a
                                        href="https://google.com/"
                                        className="social-icon"
                                    >
                                        {/* <i className="fab fa-google"></i> */}
                                    </a>
                                    <a
                                        href="https://google.com/"
                                        className="social-icon"
                                    >
                                        {/* <i className="fab fa-linkedin-in"></i> */}
                                    </a>
                                </div>
                            </form>
                        ) : (
                            <form action="#" className="sign-up-form">
                                <h2 className="title">Sign Up</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <input
                                    type="submit"
                                    className="btn"
                                    value="Sign up"
                                />
                                <p className="social-text">
                                    Or Sign up with social platforms
                                </p>

                                {/* <!---------  Social Media Icons For Sign Up  -------> */}
                                <div className="social-media">
                                    <a
                                        href="https://facebook.com/"
                                        className="social-icon"
                                    >
                                        {/* <i className="fab fa-facebook-f"></i> */}
                                    </a>
                                    <a
                                        href="https://twitter.com/home"
                                        className="social-icon"
                                    >
                                        {/* <i className="fab fa-twitter"></i> */}
                                    </a>
                                    <a
                                        href="https://google.com/"
                                        className="social-icon"
                                    >
                                        {/* <i className="fab fa-google"></i> */}
                                    </a>
                                    <a
                                        href="https://google.com/"
                                        className="social-icon"
                                    >
                                        {/* <i className="fab fa-linkedin-in"></i> */}
                                    </a>
                                </div>
                            </form>
                        )}
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

export default LoginPage1;
