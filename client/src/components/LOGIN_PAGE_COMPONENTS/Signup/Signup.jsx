import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";
import { ADD_USER } from "../../../utils/mutations";

export default function Signup() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    budget: "",
  });
  const [CreateUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !formState.firstName ||
      !formState.lastName ||
      !formState.username ||
      !formState.email ||
      !formState.password ||
      !formState.budget
    ) {
      showError("One Or More Fields Were Not Entered. Please Try Again.");
    }

    try {
      const { data } = await CreateUser({
        variables: { ...formState, budget: Number(formState.budget) },
      });
      console.log(data);

      Auth.login(data.addUser.token);
      document.location.href = "/expenses";
    } catch (e) {
      showError("There Was An Error Signing Up. Please Try Again.");
      console.error(e);
    }
  };

  const showError = (text) => {
    const errorEl = document.querySelector("#signup-error");
    errorEl.textContent = text;
    let secondsLeft = 2;
    let timerInterval = setInterval(function () {
      secondsLeft--;
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        errorEl.textContent = "";
      }
    }, 1000);
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
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="number"
          placeholder="Budget"
          name="budget"
          value={formState.budget}
          onChange={handleChange}
        />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <div id="signup-error"></div>
    </form>
  );
}
