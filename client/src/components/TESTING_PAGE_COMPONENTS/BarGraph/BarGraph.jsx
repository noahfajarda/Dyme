import React from "react";
import "./BarGraph.css";

function BarGraph({ totalExpensesByCategory }) {
  if (
    Object.keys(totalExpensesByCategory).length === 0 ||
    totalExpensesByCategory.Entertainment[1] === Infinity
  ) {
    return <div></div>;
  }
  return (
    <table className="c-bar-graph">
      <tfoot className="c-bar-graph__footer">
        <tr>
          <td>Rent & Living</td>
          <td>LifeStyle</td>
          <td>Auto & Transportation</td>
          <td>Food & Dining</td>
          <td>Health & Fitness</td>
          <td>Entertainment</td>
          <td>Miscellaneous</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Rent & Living"]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Rent & Living Expenses"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Lifestyle"]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Lifestyle"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Auto & Transportation"]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Auto & Transportation"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Food & Dining"]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Food & Dining"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Health & Fitness"]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Health & Fitness"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Entertainment"]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Entertainment"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Miscellaneous"]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Miscellaneous"][0]}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BarGraph;
