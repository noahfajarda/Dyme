import React, { useEffect, useState } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
// styles
import "../styles/TESTINGPage.css";
// components
import GithubLinks from "../components/TESTING_PAGE_COMPONENTS/GithubLinks/GithubLinks";
import Menu from "../components/TESTING_PAGE_COMPONENTS/Menu/Menu";
// import PieChart from "../components/TESTING_PAGE_COMPONENTS/PieChart/PieChart";
// import TodoList from "../components/TESTING_PAGE_COMPONENTS/TodoList/TodoList";
import BarGraph from "../components/TESTING_PAGE_COMPONENTS/BarGraph/BarGraph";
import ProgressBar from "../components/TESTING_PAGE_COMPONENTS/ProgressBar/ProgressBar";

import getTotalExpensesByCategory from "../utils/calculations";

function TESTINGPage({ user }) {
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
    <div className="app-container">
      <div className="app-main">
        <div className="main-header-line">
          <h1 id="welcome">Hello, Welcome back {user?.firstName}</h1>
          <Menu />
        </div>
        <div className="chart-row three">
          <div className="chart-container-wrapper" id="expense-color">
            <ProgressBar totalExpensesByCategory={totalExpensesByCategory} />
            <div id="app"></div>
          </div>
          <div className="chart-container-wrapper">
            <div id="total-budget" className="chart-container">
              <div id="root">
                <div className="container-1 pt-5">
                  <div className="row align-items-stretch">
                    <div className="c-dashboardInfo col-lg-3 col-md-6">
                      <div className="wrap">
                        <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                          Budget Balance
                          <svg
                            className="MuiSvgIcon-root-19"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            role="presentation"
                          >
                            <title>
                              A budget balance is the difference between the
                              total income and the total expenses in a budget.
                            </title>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                          </svg>
                        </h4>
                        <span className="hind-font caption-12 c-dashboardInfo__count">
                          <p className="budget-balance"> ${user?.budget}</p>
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
                            <title>
                              Total expenses refer to the sum of all the
                              expenses through rent, lifestyle, Food & Dining
                              etc.
                            </title>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                          </svg>
                        </h4>
                        <span className="hind-font caption-12 c-dashboardInfo__count">
                          <p className="total-expenses"> ${total}</p>
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
                <h3> 1. Tesco $122.50 05/02/2023</h3>
                <h3> 2. Game $22.50 05/02/2023 </h3>
                <h3> 3. Tesco $10.00 01/02/2023 </h3>
                <h3> 4. Steam $19.99 05/02/2023</h3>
                <h3> 5. Hydroflask $29.99 06/03/2023</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-row two">
          <div className="chart-container-wrapper big">
            <div className="chart-container">
              <div className="chart-container-header">
                <a href="/expenses">Expenses </a>
              </div>
              <BarGraph totalExpensesByCategory={totalExpensesByCategory} />
              <div className="chart-data-details">
                <div className="chart-details-header"></div>
              </div>
            </div>
          </div>
          <div className="chart-container-wrapper small">
            <div className="chart-container">
              <div className="chart-container">
                <div className="chart-info-wrapper"></div>
                <div className="chart-svg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GithubLinks />
    </div>
  );
}
export default TESTINGPage;
