import React from "react";
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

function TESTINGPage() {
  return (
    <div className="app-container">
      <div className="app-main">
        <div className="main-header-line">
          <h1 id="welcome">Hello, Welcome back [username]</h1>
          <Menu />
        </div>
        <div className="chart-row three">
          <div className="chart-container-wrapper" id="expense-color">
            <ProgressBar />
            <div id="app"></div>
          </div>
          <div className="chart-container-wrapper">
            <div id="total-budget" className="chart-container">
              <div id="root">
                <div class="container-1 pt-5">
                  <div class="row align-items-stretch">
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                      <div class="wrap">
                        <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                          Budget Balance
                          <svg
                            class="MuiSvgIcon-root-19"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            role="presentation"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
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
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                          </svg>
                        </h4>
                        <span class="hind-font caption-12 c-dashboardInfo__count">
                          $1,900
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
                <a href="/expenses">Budgets </a>
                <span>Last 30 days</span>
              </div>
              <BarGraph />
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
