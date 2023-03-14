import React from "react";
// import "../App.css";
import SavingsGoal from "../components/SavingsGoal";
import "../styles/Homestyles.css";
import Menu from "../components/Menu/Menu";
import { Link } from "react-router-dom";

// queries
import { QUERY_ONE_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";

// import class that has the function to check log in status
import Auth from "../utils/auth";

function HomePage() {
    // set initial logged in state to false
    let loggedIn = false;

    // use JWT from local storage to decode data
    // GOAL: just get the id
    const tokenData = Auth.tokenData();

    // check if the user is logged in within 2hrs
    loggedIn = Auth.checkLogIn();

    // retrieve individual user data
    const { loading, data } = useQuery(QUERY_ONE_USER, {
        // pass in the id from decoded JWT as parameter
        variables: { id: tokenData.data._id },
    });

    // isolate the DB data you need
    const user = data?.user || [];

    // THIS IS WERE ALL USER DATA IS STORED
    // THIS IS WERE ALL USER DATA IS STORED
    // THIS IS WERE ALL USER DATA IS STORED
    // THIS IS WERE ALL USER DATA IS STORED
    // THIS IS WERE ALL USER DATA IS STORED
    // THIS IS WERE ALL USER DATA IS STORED
    // THIS IS WERE ALL USER DATA IS STORED
    console.log(user);

    const styles = {
        checkStatus: {
            color: "white",
        },
    };

    return (
        <div className="app-container">
            <div className="app-main">
                {/* display different elements based on log in status */}
                {loggedIn ? (
                    <div style={styles.checkStatus}>
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
                                    <h2>Expenses</h2>
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
                    <div style={styles.checkStatus}>
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
