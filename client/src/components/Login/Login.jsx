import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { LOG_IN } from "../../utils/mutations";

export default function Login() {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [LogIn, { error, data }] = useMutation(LOG_IN);

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

        if (!formState.email || !formState.password) {
            console.log("Not All Fields Were Entered. Please Try Again.");
            return;
        }
        if (!formState.email.includes("@")) {
            console.log("Your Email Is Invalid. Please Try Again.");
            return;
        }

        try {
            const { data } = await LogIn({
                variables: formState,
            });
            console.log(data);

            Auth.login(data.login.token);
            document.location.href = "/home";
        } catch (error) {
            console.log("There Was An Error Signing Up. Please Try Again.");
            console.error(error);
        }
        console.log(formState.email);
        console.log(formState.password);

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
                    placeholder="Email"
                    name="email"
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
        </form>
    );
}
