import React from "react";
import "./ProgressBar.css";
function ProgressBar({ totalExpensesByCategory }) {
  if (
    Object.keys(totalExpensesByCategory).length === 0 ||
    totalExpensesByCategory.Entertainment[1] === Infinity
  ) {
    return <div></div>;
  }
  console.log(totalExpensesByCategory);
  const barWidths = {
    "Rent & Living Expenses":
      totalExpensesByCategory["Rent & Living Expenses"][1],
    Lifestyle: totalExpensesByCategory.Lifestyle[1],
    "Auto & Transportation":
      totalExpensesByCategory["Auto & Transportation"][1],
    "Food & Dining": totalExpensesByCategory["Food & Dining"][1],
    "Health & Fitness": totalExpensesByCategory["Health & Fitness"][1],
    Entertainment: totalExpensesByCategory.Entertainment[1],
    Miscellaneous: totalExpensesByCategory.Miscellaneous[1],
  };
  return (
    <div className="chart-container" style={{ flexDirection: "column" }}>
      <div className="chart-container-header">
        <a href="/expenses">
          <h2> Expenses</h2>
        </a>
      </div>
      <div className="acquisitions-bar">
        <span
          className="bar-progress rejected"
          style={{ width: `${barWidths["Food & Dining"]}%` }}
        ></span>
        <span
          className="bar-progress on-hold"
          style={{ width: `${barWidths["Auto & Transportation"]}%` }}
        ></span>
        <span
          className="bar-progress shortlisted"
          style={{ width: `${barWidths["Lifestyle"]}%` }}
        ></span>
        <span
          className="bar-progress applications"
          style={{ width: `${barWidths["Rent & Living Expenses"]}%` }}
        ></span>
        <span
          className="bar-progress green"
          style={{ width: `${barWidths["Health & Fitness"]}%` }}
        ></span>
        <span
          className="bar-progress purple"
          style={{ width: `${barWidths.Entertainment}%` }}
        ></span>
        <span
          className="bar-progress yellow"
          style={{ width: `${barWidths.Miscellaneous}%` }}
        ></span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color applications"></span>
        <span className="progress-type">Rent & Living Expenses</span>
        <span className="progress-amount">
          {totalExpensesByCategory["Rent & Living Expenses"][1]}%
        </span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color shortlisted"></span>
        <span className="progress-type">LifeStyle</span>
        <span className="progress-amount">
          {totalExpensesByCategory["Lifestyle"][1]}%
        </span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color on-hold"></span>
        <span className="progress-type">Auto & Transportation</span>
        <span className="progress-amount">
          {totalExpensesByCategory["Auto & Transportation"][1]}%
        </span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color rejected"></span>
        <span className="progress-type">Food & Dining</span>
        <span className="progress-amount">
          {totalExpensesByCategory["Food & Dining"][1]}%
        </span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color green"></span>
        <span className="progress-type">Health & Fitness</span>
        <span className="progress-amount">
          {totalExpensesByCategory["Health & Fitness"][1]}%
        </span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color purple"></span>
        <span className="progress-type">Entertainment</span>
        <span className="progress-amount">
          {totalExpensesByCategory["Entertainment"][1]}%
        </span>
      </div>
      <div className="progress-bar-info">
        <span className="progress-color yellow"></span>
        <span className="progress-type">Miscellaneous</span>
        <span className="progress-amount">
          {totalExpensesByCategory["Miscellaneous"][1]}%
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
