import React, { useEffect, useState } from "react";
import "../styles/ExpenseStyles.css";
import Auth from "../utils/auth";
import { Link, Navigate } from "react-router-dom";

// queries
import { QUERY_ONE_USER, QUERY_me } from "../utils/queries";
import { useQuery } from "@apollo/client";

function FormComponent({ updateExpenses }) {
    return (
        <form
            className="expense-form"
            onSubmit={(event) => updateExpenses(event)}
        >
            <h2>Add an expense:</h2>
            <div className="expense-inputs">
                <div className="expense-category">
                    <label htmlFor="category">Category:</label>
                    <select id="category">
                        <option value="Rent & Living Expenses">
                            Rent & Living Expenses
                        </option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Auto & Transportation">
                            Auto & Transportation
                        </option>
                        <option value="Food & Dining">Food & Dining</option>
                        <option value="Health And Fitness">
                            Health And Fitness
                        </option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                </div>
                <div className="expense-amount">
                    <label htmlFor="amount">Amount: $</label>
                    <input type="text" id="amount" />
                </div>
                <div className="expense-name">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>
                <button id="submit">Submit</button>
            </div>
        </form>
    );
}

function AccordionItem({ userData, category, id }) {
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

function AccordionComponent({ userData }) {
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
        <ul className="accordion">
            {categories.map((category) => {
                return (
                    <AccordionItem
                        userData={userData}
                        category={category.category}
                        id={category.id}
                    />
                );
            })}
        </ul>
    );
}

function ExpensesPage() {
    const [expenses, setExpenses] = useState({});
    const { loading, error, data } = useQuery(QUERY_me);
    console.log(data?.me);

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

    const updateExpenses = (event) => {
        setExpenses({
            ...expenses,
        });
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
                    <FormComponent updateExpenses={updateExpenses} />
                    <AccordionComponent userData={userData} />

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