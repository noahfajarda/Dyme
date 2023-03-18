import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

// styling
import "../styles/HomePage.css";

// components
import Menu from "../components/HOME_PAGE_COMPONENTS/Menu/Menu";
import PieChart from "../components/HOME_PAGE_COMPONENTS/PieChart/PieChart";
import UserAmount from "../components/HOME_PAGE_COMPONENTS/UserAmount/UserAmount";
import GithubLinks from "../components/HOME_PAGE_COMPONENTS/GithubLinks/GithubLinks";

// calculation functions
import getTotalExpensesByCategory from "../utils/calculations";

function HomePage({ user }) {
  const [total, setTotal] = useState(0);
  const [totalExpensesByCategory, setTotalExpensesByCategory] = useState({});
  // use effect for the total, so it only updates when the total updates
  useEffect(() => {
    // calculate total again
    setTotal(0);
    if (user?.expenses !== undefined && user?.expenses?.length !== 0) {
      user.expenses.forEach((expense) => {
        setTotal((prev) => prev + expense.amount);
      });
    }
  }, [user]);

  // use effect for calculating category $ totals & %
  useEffect(() => {
    getTotalExpensesByCategory(user, total, setTotalExpensesByCategory);
  }, [total, user?.expenses, user]);

  // show data
  if (
    Object.keys(totalExpensesByCategory).length !== 0 &&
    totalExpensesByCategory.Entertainment[1] !== Infinity
  ) {
    console.log(totalExpensesByCategory);
  }

  return (
    <>
      <div className="app-container">
        <div className="app-main">
          <div className="main-header-line">
            <h1>Hello, Welcome back</h1>
            <h1>This is the year: {new Date().getFullYear()}</h1>

            <h1>
              This is the total amount for expenses var you can use: ${total}
            </h1>
            <Menu />
          </div>
          {Auth.loggedIn() ? (
            <div>
              <button onClick={Auth.logout}>Log Out</button>
              {/* showing ALL data stored in a user */}
              <div className="DB-info-container-1">
                <h1>
                  UserID: <p className="DB-info">{user?._id}</p>
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
              <div className="expenses-data">
                {Object.keys(totalExpensesByCategory).map((key, index) => {
                  return (
                    <div key={index}>
                      <h2>
                        {key}: Total: ${totalExpensesByCategory[key][0]}{" "}
                        Percentage: {totalExpensesByCategory[key][1]}%
                      </h2>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <div className="expenses-data">test</div>
              <UserAmount />
            </div>
          ) : (
            <p>Not logged in</p>
          )}
          <div className="chart-row three">
            <div className="chart-container-wrapper" id="expense-color">
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
                  <span className="progress-type">Food & Dining</span>
                  <span className="progress-amount">56%</span>
                </div>
                <div className="progress-bar-info">
                  <span className="progress-color shortlisted"></span>
                  <span className="progress-type">Entertainment</span>
                  <span className="progress-amount">18%</span>
                </div>
                <div className="progress-bar-info">
                  <span className="progress-color on-hold"></span>
                  <span className="progress-type">Auto Expenses</span>
                  <span className="progress-amount">10%</span>
                </div>
                <div className="progress-bar-info">
                  <span className="progress-color rejected"></span>
                  <span className="progress-type">Bills</span>
                  <span className="progress-amount">8%</span>
                </div>
                <div className="progress-bar-info">
                  <span className="progress-color blue "></span>
                  <span className="progress-type">Miscellaneous Expenses</span>
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
                    <div className="container-1 pt-5">
                      <div className="row align-items-stretch">
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                          <div className="wrap">
                            <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                              Portfolio Balance
                              <svg
                                className="MuiSvgIcon-root-19"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                role="presentation"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                              </svg>
                            </h4>
                            <span className="hind-font caption-12 c-dashboardInfo__count">
                              $10,500
                            </span>
                          </div>
                        </div>
                        <div className="c-dashboardInfo col-lg-3 col-md-6">
                          <div className="wrap">
                            <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                              Total Expenses
                              <svg
                                className="MuiSvgIcon-root-19"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                role="presentation"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                              </svg>
                            </h4>
                            <span className="hind-font caption-12 c-dashboardInfo__count">
                              $1,900
                            </span>
                            <span className="hind-font-1 caption-12 c-dashboardInfo__subInfo">
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
                    <h3> 5. Hydroflask £29.99 06/03/2016</h3>
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
                      <svg viewBox="0 0 36 36" className="circular-chart pink">
                        <path
                          className="circle-bg"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        ></path>
                        <path
                          className="circle"
                          strokeDasharray="30, 100"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        ></path>
                        <text x="18" y="20.35" className="percentage">
                          30%
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
