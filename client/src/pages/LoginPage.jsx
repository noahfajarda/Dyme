import React, { useEffect, useState } from "react";
// import "../styles/LoginPage.css";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";

// const styles = {
//     card: {
//         padding: 20,
//     },
// };

function LoginPage() {
    return (
        <div class="loginContainer">
            {/* <button style={styles.card}>test</button> */}

            {/* <div>testing this to see if it works</div> */}
            {/* <img src="https://tinyurl.com/29ajxfnr" alt="dre" /> */}

            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="text"
                                    className="login__input"
                                    placeholder="User name / Email"
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input
                                    type="password"
                                    className="login__input"
                                    placeholder="Password"
                                />
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
                            </button>
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
