import React, { useEffect, useState } from "react";
import "../styles/LoginSignupPage.css";
import Signup from "../components/LOGIN_PAGE_COMPONENTS/Signup/Signup";
import Login from "../components/LOGIN_PAGE_COMPONENTS/Login/Login";
import { Link, Navigate } from "react-router-dom";
import Auth from "../utils/auth";
import imgUrl from "../assets/loginpicc.gif"

function LoginPage() {
  const [signup, setsignup] = useState(false);

  if (Auth.loggedIn()) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-container">
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            {/* Data retrieval components */}
            {!signup ? <Login /> : <Signup />}
          </div>
        </div>

        {/* <!---------- Left Side Of Sign In Page ---------> */}
        <header className="login-header">
            <h1>DYME</h1>
            </header>
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
            {/* <header className="login-header">
            <h1>Financial Budgeter</h1>
            </header> */}
            <img
              className="image"
              src={imgUrl}
              alt="2nd Pic"
            />
          </div>
          {/* <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Click the Sign In to see the effect</p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              className="image"
              alt="1 Pic"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
