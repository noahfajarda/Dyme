import React, { useEffect, useState } from "react";
import "../styles/ExpenseStyles.css";
import Auth from "../utils/auth";
import { Link, Navigate } from "react-router-dom";

// queries
import { QUERY_ONE_USER, QUERY_me } from "../utils/queries";
import { useQuery } from "@apollo/client";

// mutations
import {
    CREATE_EXPENSE,
    ADD_EXPENSE_TO_USER,
    DELETE_EXPENSE,
} from "../utils/mutations";
import { useMutation } from "@apollo/client";

function FormComponent({
    userData,
    categories,
    CreateExpense,
    AddExpenseToUser,
}) {
    const [expenseForm, setExpenseForm] = useState({
        name: "",
        amount: 0,
        description: "",
        category: categories[0].category,
        associatedUser: "",
    });
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
        checkAllFormFields(expenseForm);

        try {
            console.log("test");
            console.log(userData.user._id);

            // run mutations ADD & ASSOCIATE
            const mutationData = runMutations(
                expenseForm,
                associatedUser,
                userData
            );
            console.log(mutationData);

            displayFormSubmitStatus(
                "Expense Added! Check The Corresponding Category To See Your Submission!"
            );
        } catch (e) {
            displayFormSubmitStatus("There Was An Error On Our End. Sorry!");
            console.error(e);
        }
    };
    const checkAllFormFields = (expenseForm) => {
        if (
            !expenseForm.name ||
            !expenseForm.description ||
            !expenseForm.category ||
            !expenseForm.amount
        ) {
            // display the error message on the page
            displayFormSubmitStatus(
                "One Or More Fields Were Not Entered. Please Try Again."
            );
            return;
        }
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

function AccordionItem({ userData, category, id, DeleteExpenseData }) {
    const deleteExpense = async (e) => {
        const expenseIdToDelete = e.target.parentNode.id;
        // delete expense
        await DeleteExpenseData({
            variables: {
                id: expenseIdToDelete,
            },
        });
        document.location.reload();
    };
    return (
        <li className="accordion-item">
            <input id={id} className="hide" type="checkbox" />
            <label htmlFor={id} className="accordion-label">
                {category}
            </label>
            <p className="accordion-child">
                {userData?.user?.expenses && (
                    <table className="expense-table">
                        <thead>
                            <tr>
                                <th>
                                    <h3
                                        className="expenses-h3 exp-border"
                                        id="h3name"
                                    >
                                        Name:
                                    </h3>
                                </th>
                                <th>
                                    <h3
                                        className="expenses-h3 exp-border"
                                        id="h3description"
                                    >
                                        Description:
                                    </h3>
                                </th>
                                <th>
                                    <h3 className="expenses-h3" id="h3amount">
                                        Amount:
                                    </h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData?.user?.expenses
                                .filter(
                                    (expense) => expense.category === category
                                )
                                .map((expense) => {
                                    return expense.amount !== 0 ? (
                                        <tr
                                            key={expense._id}
                                            className="expense-row"
                                            id={expense._id}
                                        >
                                            <td>
                                                <div>{expense.name}</div>
                                            </td>
                                            <td>
                                                <div>{expense.description}</div>
                                            </td>
                                            <td>
                                                <div>${expense.amount}</div>
                                            </td>
                                            <button onClick={deleteExpense}>
                                                DELETE
                                            </button>
                                        </tr>
                                    ) : (
                                        <tr
                                            key={expense._id}
                                            className="expense-row"
                                        >
                                            <td colSpan="3">
                                                <div>No data added!</div>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                )}
            </p>
        </li>
    );
}

function AccordionComponent({ userData, categories, DeleteExpenseData }) {
    return (
        <ul className="accordion">
            {categories.map((category) => {
                return (
                    <AccordionItem
                        userData={userData}
                        category={category.category}
                        id={category.id}
                        key={category.id}
                        DeleteExpenseData={DeleteExpenseData}
                    />
                );
            })}
        </ul>
    );
}

function ExpensesPage() {
    const [expenses, setExpenses] = useState({});
    const { loading, error, data } = useQuery(QUERY_me);
    // uncomment to see the user data
    // console.log(data?.me);

    // Expense Mutations
    const [CreateExpense, { createExpenseError, createExpenseData }] =
        useMutation(CREATE_EXPENSE);
    const [AddExpenseToUser, { addExpenseToUserError, addExpenseToUserData }] =
        useMutation(ADD_EXPENSE_TO_USER);
    const [DeleteExpenseData, { deleteExpenseError, deleteExpenseData }] =
        useMutation(DELETE_EXPENSE);

    const {
        loading: userLoading,
        error: userError,
        data: userData,
    } = useQuery(QUERY_ONE_USER, {
        variables: { id: data?.me._id },
    });

    useEffect(() => {
        if (userData) {
            setExpenses(userData?.user?.expenses);
        }
    }, [userData]);

    const updateExpenses = (e) => {
        e.preventDefault();
        setExpenses({
            ...expenses,
        });
        console.log(expenses);
    };

    // log in check
    if (!Auth.loggedIn()) {
        return <Navigate to="/login" />;
    }

    // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
    // able to submit form
    // CREATE to the db

    // DELETE functionality for each expense

    // insert logic for the total amount

    const categories = [
        { id: "s1", category: "Rent & Living Expenses" },
        { id: "s2", category: "Lifestyle" },
        { id: "s3", category: "Auto & Transportation" },
        { id: "s4", category: "Food & Dining" },
        { id: "s5", category: "Health & Fitness" },
        { id: "s6", category: "Entertainment" },
        { id: "s7", category: "Miscellaneous" },
    ];

    return (
        <>
            {loading ? (
                <p>LOADING...</p>
            ) : data?.me ? (
                <div className="expense-page">
                    <a href="/home">
                        <h1 className="exp-header">Expenses</h1>
                    </a>

                    {/* form */}
                    <FormComponent
                        userData={userData}
                        categories={categories}
                        CreateExpense={CreateExpense}
                        AddExpenseToUser={AddExpenseToUser}
                    />
                    <AccordionComponent
                        userData={userData}
                        categories={categories}
                        DeleteExpenseData={DeleteExpenseData}
                    />

                    <a href="/home">
                        <button>Back To Home</button>
                    </a>
                </div>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
}

export default ExpensesPage;
