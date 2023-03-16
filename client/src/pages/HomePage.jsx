import React, { useState, useEffect } from "react";
import SavingsGoal from "../components/SavingsGoal";
import "../styles/Homestyles.css";
import Menu from "../components/Menu/Menu";
import { Link, Navigate } from "react-router-dom";
import Auth from "../utils/auth";

// queries
import { QUERY_ONE_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";

function HomePage() {
    // retrieve the id from token to get specific user data
    const token = Auth.getProfile();
    const id = token.data._id;

    const { loading, error, data } = useQuery(QUERY_ONE_USER, {
        variables: { id },
    });

    // isolate the DB data you need
    const user = data?.user || [];
    console.log(user);

    // log in check
    if (!Auth.loggedIn()) {
        return <Navigate to="/login" />;
    }

    // updating each expense
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.parentNode);
    };

    return (
        <div className="app-container">
            <div className="app-main">
                {/* display different elements based on log in status */}
                {Auth.loggedIn() ? (
                    <div>
                        {/* showing ALL data stored in a user */}
                        <div className="DB-info-container-1">
                            <h1>
                                UserID: <p className="DB-info">{user._id}</p>
                            </h1>
                            <h1>
                                Budget
                                <p className="DB-info">{user.budget}</p>
                            </h1>

                            <h1>
                                Email
                                <p className="DB-info">{user.email}</p>
                            </h1>
                            <h1>
                                First Name
                                <p className="DB-info">{user.firstName}</p>
                            </h1>
                            <h1>
                                Last Name
                                <p className="DB-info">{user.lastName}</p>
                            </h1>
                            <h1>
                                Username
                                <p className="DB-info">{user.username}</p>
                            </h1>
                        </div>
                        <div className="DB-info-container-2">
                            <div className="expenses">
                                <h1>Expenses</h1>
                                <table className="expenses-table">
                                    {/* column names */}
                                    <thead>
                                        <tr>
                                            <th className="field-label">ID</th>
                                            <th className="field-label">
                                                Amount
                                            </th>
                                            <th className="field-label">
                                                Associated User
                                            </th>
                                            <th className="field-label">
                                                Category
                                            </th>
                                            <th className="field-label">
                                                Description
                                            </th>
                                            <th className="field-label">
                                                Name
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* data */}
                                    <tbody className="expenses-info">
                                        {user.expenses &&
                                            user.expenses.map((expense) => {
                                                return (
                                                    <tr key={expense._id}>
                                                        <td>
                                                            <div>
                                                                {expense._id}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                ${" "}
                                                                {expense.amount}
                                                            </div>
                                                            $
                                                        </td>
                                                        <td>
                                                            <div>
                                                                {
                                                                    expense.associatedUser
                                                                }
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                {
                                                                    expense.category
                                                                }
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                {
                                                                    expense.description
                                                                }
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                {expense.name}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        <tr>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td>
                                                <select
                                                    id="categories"
                                                    name="categories"
                                                >
                                                    <option
                                                        value="Rent & Living Expenses"
                                                        selected
                                                    >
                                                        Rent & Living Expenses
                                                    </option>
                                                    <option value="Lifestyle">
                                                        Lifestyle
                                                    </option>
                                                    <option value="Auto & Transportation">
                                                        Auto & Transportation
                                                    </option>
                                                    <option value="Food & Dining">
                                                        Food & Dining
                                                    </option>
                                                    <option value="Health And Fitness">
                                                        Health And Fitness
                                                    </option>
                                                    <option value="Entertainment">
                                                        Entertainment
                                                    </option>
                                                    <option value="Miscellaneous">
                                                        Miscellaneous
                                                    </option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <button onClick={handleFormSubmit}>
                                                submit
                                            </button>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* display the stylized homepage */}
                        <h1>Hello, Welcome </h1>
                        <div className="main-header-line">
                            <Menu />

                            <div className="action-buttons">
                                <button className="open-right-area">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="feather feather-activity"
                                    >
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                    </svg>
                                </button>
                                <button className="menu-button">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="feather feather-menu"
                                    >
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="chart-row three">
                            <div
                                className="chart-container-wrapper"
                                id="expense-color"
                            >
                                <div className="chart-container-header">
                                    <a href="/expenses">
                                        <h2>Expenses</h2>
                                    </a>
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
                                <div id="app"></div>
                            </div>
                            <div id="doughnutChart" className="chart"></div>
                            <div className="chart-container-wrapper">
                                <div className="chart-container">
                                    <div className="chart-info-wrapper">
                                        <h2>Income</h2>
                                    </div>
                                    <div id="root">
                                        <div class="container pt-5">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chart-row two">
                            <div className="chart-container-wrapper big">
                                <div className="chart-container">
                                    <div className="chart-container-header">
                                        <h2>Budgets</h2>
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
                                            <h2>Goals</h2>
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
                ) : (
                    <div>
                        <Link to="/login">
                            <h1>Log In to see the view! </h1>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomePage;
