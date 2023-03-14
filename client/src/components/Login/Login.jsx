import React, { useEffect, useState } from "react";

export default function Login() {
    const [formState, setFormState] = useState({ username: "", password: "" });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form toward the log-in mutation
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState.username);
        console.log(formState.password);

        // TODO: find a way to fix error in console
        // TODO: run the log in mutation query

        // clear form values
        setFormState({
            email: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleFormSubmit} action="#" className="sign-in-form">
            <h2 className="title">Log In </h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formState.email}
                    onChange={handleChange}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Log in with social platforms</p>

            {/* <!-- ------Social Icons For Log In Page --------> */}
            <div className="social-media">
                <a href="https://facebook.com/" className="social-icon">
                    {/* <i className="fab fa-facebook-f"></i> */}
                </a>
                <a href="https://twitter.com/home" className="social-icon">
                    {/* <i className="fab fa-twitter"></i> */}
                </a>
                <a href="https://google.com/" className="social-icon">
                    {/* <i className="fab fa-google"></i> */}
                </a>
                <a href="https://google.com/" className="social-icon">
                    {/* <i className="fab fa-linkedin-in"></i> */}
                </a>
            </div>
        </form>
    );
}
