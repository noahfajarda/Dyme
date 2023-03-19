import React from "react";
import "./ProgressBar.css";
function ProgressBar({ totalExpensesByCategory }) {
  console.log(totalExpensesByCategory);
  return (
    <div className="chart-container" style={{ flexDirection: "column" }}>
      <div className="chart-container-header">
        <h2>Expenses</h2>
        <span href="#">This month</span>
      </div>
      <div className="acquisitions-bar">
        <span className="bar-progress rejected" style={{ width: "10%" }}></span>
        <span className="bar-progress on-hold" style={{ width: "20%" }}></span>
        <span
          className="bar-progress shortlisted"
          style={{ width: "20%" }}
        ></span>
        <span
          className="bar-progress applications"
          style={{ width: "20%" }}
        ></span>
        <span className="bar-progress green" style={{ width: "10%" }}></span>
        <span className="bar-progress purple" style={{ width: "10%" }}></span>
        <span className="bar-progress yellow" style={{ width: "10%" }}></span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color applications"></span>
        <span className="progress-type">Rent & Living Expenses</span>
        <span className="progress-amount">
          {/* {totalExpensesByCategory["Rent & Living Expenses"][0]} */}
        </span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color shortlisted"></span>
        <span className="progress-type">LifeStyle</span>
        <span className="progress-amount">20%</span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color on-hold"></span>
        <span className="progress-type">Auto & Transportation</span>
        <span className="progress-amount">20%</span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color rejected"></span>
        <span className="progress-type">Food & Dining</span>
        <span className="progress-amount">10%</span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color green"></span>
        <span className="progress-type">Health & Fitness</span>
        <span className="progress-amount">10%</span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color purple"></span>
        <span className="progress-type">Entertainment</span>
        <span className="progress-amount">10%</span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color yellow"></span>
        <span className="progress-type">Miscellaneous</span>
        <span className="progress-amount">10%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
