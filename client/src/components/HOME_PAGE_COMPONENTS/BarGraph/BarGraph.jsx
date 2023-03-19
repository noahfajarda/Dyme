import React, { useEffect } from "react";
import "./BarGraph.css";

function BarGraph({ totalExpensesByCategory }) {
  const max = 5000;

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
            data-graph={totalExpensesByCategory["Rent & Living"][0]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Rent & Living"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["LifeStyle"][0]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["LifeStyle"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Auto & Transportation"][0]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Auto & Transportation"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Food & Dining"][0]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Food & Dining"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Health & Fitness"][0]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Health & Fitness"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Entertainment"][0]}
          >
            <span className="c-bar-graph__data">
              {totalExpensesByCategory["Entertainment"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Miscellaneous"][0]}
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
