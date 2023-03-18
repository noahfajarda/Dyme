import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_EXPENSE, ADD_EXPENSE_TO_USER } from "../../../utils/mutations";

export default function FormComponent({ userData, categories }) {
    const [expenseForm, setExpenseForm] = useState({
        name: "",
        amount: 0,
        description: "",
        category: categories[0].category,
        associatedUser: "",
    });

    // Expense Create Mutations
    const [CreateExpense, { createExpenseError, createExpenseData }] =
        useMutation(CREATE_EXPENSE);
    const [AddExpenseToUser, { addExpenseToUserError, addExpenseToUserData }] =
        useMutation(ADD_EXPENSE_TO_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setExpenseForm({
            ...expenseForm,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const associatedUser = userData.user.username;
        console.log("EXPENSE FORM:", expenseForm);
        console.log("ASSOCIATED USER:", associatedUser);

        // display error message if not every field is entered
        if (!checkAllFormFields(expenseForm)) return;

        try {
            console.log(userData.user._id);

            // run mutations ADD & ASSOCIATE
            const mutationData = await runMutations(
                expenseForm,
                associatedUser,
                userData
            );
            console.log(mutationData);

            displayFormSubmitStatus(
                "Expense Added! Check The Corresponding Category To See Your Submission!"
            );

            setExpenseForm({
                name: "",
                amount: 0,
                description: "",
                category: categories[0].category,
                associatedUser: "",
            });
        } catch (e) {
            displayFormSubmitStatus("There Was An Error On Our End. Sorry!");
            console.error(e);
        }
    };
    const checkAllFormFields = (expenseForm) => {
        if (
            !expenseForm.name ||
            !expenseForm.description ||
            !expenseForm.category
        ) {
            // display the error message on the page
            displayFormSubmitStatus(
                "One Or More Fields Were Not Entered. Please Try Again."
            );
            return false;
        } else if (expenseForm.amount <= 0) {
            displayFormSubmitStatus("Amount Was $0 Or Less. Please Try Again.");
            return false;
        }
        return true;
    };
    const displayFormSubmitStatus = (message) => {
        const statusEl = document.querySelector("#form-status");

        let timeLeft = 3;
        let timeInterval = setInterval(function () {
            // show
            statusEl.style.display = "block";
            statusEl.textContent = message;
            timeLeft--;
            if (timeLeft <= -1) {
                // hide
                statusEl.style.display = "none";
                clearInterval(timeInterval);
            }
        }, 1000);
        return;
    };
    const runMutations = async (expenseForm, associatedUser, userData) => {
        // create the expense
        const newExpense = await CreateExpense({
            variables: {
                ...expenseForm,
                amount: Number(expenseForm.amount),
                associatedUser,
            },
        });
        // associate new created expense with user
        const associateUserAndExpense = await AddExpenseToUser({
            variables: {
                userId: userData.user._id,
                expenseId: newExpense.data.addExpense._id,
            },
        });
        return {
            createExpenseData: newExpense.data,
            associateUserAndExpense: associateUserAndExpense.data,
        };
    };
    return (
        <form
            className="expense-form"
            onSubmit={(e) => {
                handleSubmit(e);
            }}
        >
            <div>
                <h2>Add an expense:</h2>
                <div className="expense-inputs">
                    <div className="expense-name">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={expenseForm.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="expense-amount">
                        <label htmlFor="amount">Amount: $</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={expenseForm.amount}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="expense-description">
                        <label htmlFor="description">Description:</label>
                        {/* maybe change to text area */}
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={expenseForm.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="expense-category">
                        <label htmlFor="category">Category:</label>
                        <select
                            id="category"
                            name="category"
                            value={expenseForm.category}
                            onChange={handleChange}
                        >
                            {categories.map((category) => {
                                return (
                                    <option
                                        value={category.category}
                                        key={category.category}
                                    >
                                        {category.category}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <button id="submit">Submit</button>
                </div>
                <h3 id="form-status"></h3>
            </div>
        </form>
    );
}
