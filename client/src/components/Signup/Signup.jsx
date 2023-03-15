import React, { useEffect, useState } from "react";
import { questionTemplate } from "../../utils/changingHTML";
// import { ADD_USER } from "../../utils/mutations";
import { gql } from "@apollo/client";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";

let count = 0;
export default function Signup() {
    const ADD_USER = gql`
        mutation AddUser(
            $firstName: String!
            $lastName: String!
            $username: String!
            $email: String!
            $budget: Float!
            $availableBalance: Float!
            $password: String!
        ) {
            addUser(
                firstName: $firstName
                lastName: $lastName
                username: $username
                email: $email
                budget: $budget
                availableBalance: $availableBalance
                password: $password
            ) {
                token
                user {
                    _id
                    firstName
                    lastName
                    username
                    password
                    email
                    budget
                    availableBalance
                }
            }
        }
    `;

    const [signup, setsignup] = useState(false);
    const [addUserMutation, { error, data }] = useMutation(ADD_USER);

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        budget: "",
        availableBalance: "",
    });

    // insert the mutation

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formEl = document.querySelector(".sign-up-form");

        if (count === 0) {
            console.log("1111111");
            formEl.innerHTML = questionTemplate(
                "budget",
                formState.budget
                // setFormState
            );
            console.log(formState);

            count += 1;
            console.log(count);
        } else if (count === 1) {
            console.log("222222");
            const bud = document.querySelector(".changing").value;
            setFormState({ ...formState, budget: parseFloat(bud) });
            console.log(formState);

            formEl.innerHTML = questionTemplate(
                "Available Balance",
                formState.budget
                // setFormState
            );
            count += 2;
            console.log(count);
        } else if (count === 3) {
            console.log("3333333");
            const avB = document.querySelector(".changing").value;
            setFormState({ ...formState, availableBalance: parseFloat(avB) });
            console.log(formState);
            count += 2;
            console.log(count);
        } else {
            try {
                console.log(formState);
                // issue can't get updated form state variables with everything
                const { data } = await addUserMutation({
                    variables: formState,
                    // {
                    //     firstName: "eberber", (STRING)
                    //     lastName: "erberbe", (STRING)
                    //     username: "jjjjjjjjjjjjjjJJJJJJJ12412", (STRING UNIQUE)
                    //     email: "test123!@gmail.com", (STRING EMAIL)
                    //     password: "StephDubz30", (STRING LOW, UP, NUM)
                    //     budget: 300.24, (FLOAT)
                    //     availableBalance: 3000, (FLOAT)
                    // }
                });

                Auth.login(data.addUser.token);
                window.location.assign("/home");
                // window.location.href = "/home";
            } catch (e) {
                console.error(e);
            }
        }
    };

    return (
        <form action="#" className="sign-up-form" onSubmit={handleFormSubmit}>
            <h2 className="title">Sign Up</h2>

            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                />
            </div>

            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                />
            </div>

            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                />
            </div>

            <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                    type="email"
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
                    placeholder="Password (1 cap, 1 low, 1 num)"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                />
            </div>

            <input type="submit" className="btn" value="Sign up" />

            <p className="social-text">Or Sign up with social platforms</p>

            {/* <!---------  Social Media Icons For Sign Up  -------> */}
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
