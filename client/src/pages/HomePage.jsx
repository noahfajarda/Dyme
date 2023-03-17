import React, { useState, useEffect } from "react";
import SavingsGoal from "../components/SavingsGoal";
import "../styles/Homestyles.css";
import Menu from "../components/Menu/Menu";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

import PieChart from "../components/PieChart/PieChart";
import GithubLinks from "../components/GithubLinks/GithubLinks";

// mutations
import {
    CREATE_EXPENSE,
    ADD_EXPENSE_TO_USER,
    DELETE_EXPENSE,
} from "../utils/mutations";
import { useMutation } from "@apollo/client";

function HomePage({ user }) {
    const [expenseForm, setexpenseForm] = useState({
        amount: 0,
        associatedUser: "",
        category: "Rent & Living Expenses",
        description: "",
        name: "",
    });
    const [CreateExpense, { createExpenseError, createExpenseData }] =
        useMutation(CREATE_EXPENSE);
    const [AddExpenseToUser, { addExpenseToUserError, addExpenseToUserData }] =
        useMutation(ADD_EXPENSE_TO_USER);
    const [DeleteExpenseData, { deleteExpenseError, deleteExpenseData }] =
        useMutation(DELETE_EXPENSE);

    // submit entered variables in query
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(expenseForm);

        if (
            !expenseForm.name ||
            !expenseForm.description ||
            !expenseForm.category ||
            !expenseForm.amount
        ) {
            console.log(
                "One Or More Fields Were Not Entered. Please Try Again."
            );
            return;
        }

        try {
            // create the expense
            const newExpense = await CreateExpense({
                variables: {
                    ...expenseForm,
                    amount: Number(expenseForm.amount),
                    associatedUser: user.username,
                },
            });
            console.log(newExpense.data);

            // associate new created expense with user
            const associateUserAndExpense = await AddExpenseToUser({
                variables: {
                    userId: user._id,
                    expenseId: newExpense.data.addExpense._id,
                },
            });
            console.log(associateUserAndExpense.data);

            setexpenseForm({
                amount: 0,
                associatedUser: "",
                category: "Rent & Living Expenses",
                description: "",
                name: "",
            });

            // document.location.href = "/home";
        } catch (e) {
            console.log("There Was An Error Signing Up. Please Try Again.");
            console.error(e);
        }
    };

    // change form state
    const handleChange = (event) => {
        const { name, value } = event.target;
        setexpenseForm({
            ...expenseForm,
            [name]: value,
        });
    };

    // EXPENSES MATH LOGIC

    // function to calculate percentages of total expenses
    let count = 0;
    function calculateIndividualPercentage(expenseAmount, total) {
        let percentage = (expenseAmount / total).toFixed(2) + "%";
        percentage = percentage.replace("0.", "");
        return percentage;
    }

    // totals of expenses separated by category
    const totalExpensesByCategory = {
        "Rent & Living Expenses": 0,
        Lifestyle: 0,
        "Auto & Transportation": 0,
        "Food & Dining": 0,
        "Health & Fitness": 0,
        Entertainment: 0,
        Miscellaneous: 0,
    };

    const expenseFields = ["_id", "amount", "category", "description", "name"];

    const categories = [
        "Rent & Living Expenses",
        "Lifestyle",
        "Auto & Transportation",
        "Food & Dining",
        "Health & Fitness",
        "Entertainment",
        "Miscellaneous",
    ];

    // calculate percentage of each category based on the total
    function calculateCategoryPercentage(categoryAmount, total) {
        if (categoryAmount === 0) {
            return "0%";
        }
        let percentage = ((categoryAmount / total).toFixed(2) + "%").replace(
            "0.",
            ""
        );
        if (percentage === "00%") percentage = "0%";
        if (percentage === "1.00%") percentage = "100%";
        if (percentage[0] === "0") percentage = percentage.substring(1);

        return percentage;
    }

    // account for error if user doesn't have expenses
    if (user) {
        user.expenses?.forEach((user) => {
            totalExpensesByCategory[user.category] += user.amount;
        });
    }

    const deleteExpense = async (e) => {
        const expenseIdToDelete = e.target.parentNode.id;

        // delete expense
        const deletedExpense = await DeleteExpenseData({
            variables: {
                id: expenseIdToDelete,
            },
        });
        console.log(deletedExpense);
        document.location.reload();
    };

    return (
        <>
            <div className="app-container">
                <div className="app-main">
                    <div className="main-header-line">
                        <h1>Hello, Welcome back</h1>

                        <Menu />
                    </div>
                    {Auth.loggedIn() ? (
                        <div>
                            <button onClick={Auth.logout}>Log Out</button>
                            {/* showing ALL data stored in a user */}
                            <div className="DB-info-container-1">
                                <h1>
                                    UserID:{" "}
                                    <p className="DB-info">{user?._id}</p>
                                </h1>
                                <h1>
                                    Budget
                                    <p className="DB-info">{user?.budget}</p>
                                </h1>
                                <h1>
                                    Email
                                    <p className="DB-info">{user?.email}</p>
                                </h1>
                                <h1>
                                    First Name
                                    <p className="DB-info">{user?.firstName}</p>
                                </h1>
                                <h1>
                                    Last Name
                                    <p className="DB-info">{user?.lastName}</p>
                                </h1>
                                <h1>
                                    Username
                                    <p className="DB-info">{user?.username}</p>
                                </h1>
                            </div>
                        </div>
                    ) : (
                        <p>Not logged in</p>
                    )}
                    <div className="chart-row three">
                        <div
                            className="chart-container-wrapper"
                            id="expense-color"
                        >
                            <div
                                className="chart-container"
                                style={{ flexDirection: "column" }}
                            >
                                <div className="chart-container-header">
                                    <a href="/expenses">Expenses</a>
                                    <span href="#">This month</span>
                                </div>
                                <div className="acquisitions-bar">
                                    <span
                                        className="bar-progress rejected"
                                        style={{ width: "8%" }}
                                    ></span>
                                    <span
                                        className="bar-progress on-hold"
                                        style={{ width: "10%" }}
                                    ></span>
                                    <span
                                        className="bar-progress shortlisted"
                                        style={{ width: "18%" }}
                                    ></span>
                                    <span
                                        className="bar-progress applications"
                                        style={{ width: "64%" }}
                                    ></span>
                                </div>
                                <div className="progress-bar-info">
                                    <span className="progress-color applications"></span>
                                    <span className="progress-type">
                                        Food & Dining
                                    </span>
                                    <span className="progress-amount">56%</span>
                                </div>
                                <div className="progress-bar-info">
                                    <span className="progress-color shortlisted"></span>
                                    <span className="progress-type">
                                        Entertainment
                                    </span>
                                    <span className="progress-amount">18%</span>
                                </div>
                                <div className="progress-bar-info">
                                    <span className="progress-color on-hold"></span>
                                    <span className="progress-type">
                                        Auto Expenses
                                    </span>
                                    <span className="progress-amount">10%</span>
                                </div>
                                <div className="progress-bar-info">
                                    <span className="progress-color rejected"></span>
                                    <span className="progress-type">Bills</span>
                                    <span className="progress-amount">8%</span>
                                </div>
                                <div className="progress-bar-info">
                                    <span className="progress-color blue "></span>
                                    <span className="progress-type">
                                        Miscellaneous Expenses
                                    </span>
                                    <span className="progress-amount">8%</span>
                                </div>
                                <PieChart />
                            </div>
                            <div id="app"></div>
                            <div className="chart-container-wrapper">
                                <div className="chart-container">
                                    <div className="chart-info-wrapper">
                                        <h2>Balance</h2>
                                    </div>
                                    <div id="root">
                                        <div class="container-1 pt-5">
                                            <div class="row align-items-stretch">
                                                <div class="c-dashboardInfo col-lg-3 col-md-6">
                                                    <div class="wrap">
                                                        <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                                                            Portfolio Balance
                                                            <svg
                                                                class="MuiSvgIcon-root-19"
                                                                focusable="false"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                                role="presentation"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    d="M0 0h24v24H0z"
                                                                ></path>
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                                                            </svg>
                                                        </h4>
                                                        <span class="hind-font caption-12 c-dashboardInfo__count">
                                                            $10,500
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="c-dashboardInfo col-lg-3 col-md-6">
                                                    <div class="wrap">
                                                        <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                                                            Total Expenses
                                                            <svg
                                                                class="MuiSvgIcon-root-19"
                                                                focusable="false"
                                                                viewBox="0 0 24 24"
                                                                aria-hidden="true"
                                                                role="presentation"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    d="M0 0h24v24H0z"
                                                                ></path>
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                                                            </svg>
                                                        </h4>
                                                        <span class="hind-font caption-12 c-dashboardInfo__count">
                                                            $1,900
                                                        </span>
                                                        <span class="hind-font-1 caption-12 c-dashboardInfo__subInfo">
                                                            Last month: $1,630
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-container-wrapper">
                                <div className="chart-container">
                                    <div className="chart-info-wrapper">
                                        <h2>Recent Transactions</h2>
                                        <h3> 1. Tesco £122.50 05/02/2016</h3>
                                        <h3> 2. Game £22.50 05/02/2016 </h3>
                                        <h3> 3. Tesco £10.00 01/02/2016 </h3>
                                        <h3> 4. Steam £19.99 05/02/2016</h3>
                                        <h3>
                                            {" "}
                                            5. Hydroflask £29.99 06/03/2016
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chart-row two">
                            <div className="chart-container-wrapper big">
                                <div className="chart-container">
                                    <div className="chart-container-header">
                                        <h2>Budgets </h2>
                                        <span>Last 30 days</span>
                                    </div>
                                    <div className="line-chart">
                                        <canvas id="chart"></canvas>
                                    </div>
                                    <div className="chart-data-details">
                                        <div className="chart-details-header"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-container-wrapper small">
                                <div className="chart-container">
                                    <div className="chart-container">
                                        <div className="chart-info-wrapper">
                                            <h2>Financial Advice</h2>
                                            <span>$600/$1400</span>
                                        </div>
                                        <div className="chart-svg">
                                            <svg
                                                viewBox="0 0 36 36"
                                                className="circular-chart pink"
                                            >
                                                <path
                                                    className="circle-bg"
                                                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                                ></path>
                                                <path
                                                    className="circle"
                                                    stroke-dasharray="30, 100"
                                                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                                ></path>
                                                <text
                                                    x="18"
                                                    y="20.35"
                                                    className="percentage"
                                                >
                                                    30%
                                                </text>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ) : (
                    <div>
                        <Link to="/login">
                            <h1>Log In to see the view! </h1>
                        </Link>
                    </div>
                )} */}
                </div>
            </div>
        </>
    );
}

export default HomePage;
