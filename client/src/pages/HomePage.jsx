import React from "react";
// import "../App.css";
// import SavingsGoal from "../components/SavingsGoal/SavingsGoal";
import "../styles/Homestyles.css";
import Menu from "../components/Menu/Menu";
import PieChart from "../components/PieChart/PieChart";
import GithubLinks from "../components/GithubLinks/GithubLinks";
import ToDoList from "../components/ToDoList/ToDoList";
import ChartExpenses from "../components/ChartExpenses/ChartExpenses";

function HomePage() {
  return (
    <div className="app-container">
      <div className="app-main">
        <div className="main-header-line">
          <h1>Hello, Welcome back</h1>

          <Menu />
        </div>
        <div className="chart-row three">
          <div className="chart-container-wrapper" id="expense-color">
            <div
              className="chart-container"
              style={{ flexDirection: "column" }}
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
              <PieChart food="1%" />
            </div>
            <div id="app"></div>
          </div>
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
                <h3> 5. Hydroflask £29.99 06/03/2016</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="chart-row two">
          <div class="chart-container-wrapper big">
            <div class="chart-container">
              <div class="chart-container-header">
                <h2>Top Active Jobs</h2>
                <span>Last 30 days</span>
              </div>
              <div class="line-chart">
                <canvas id="chart"></canvas>
              </div>
              <div class="chart-data-details">
                <div class="chart-details-header"></div>
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

export default HomePage;
