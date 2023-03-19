import React from "react";
import "./BarGraph.css";

function BarGraph({ totalExpensesByCategory }) {
  if (
    Object.keys(totalExpensesByCategory).length === 0 ||
    totalExpensesByCategory.Entertainment[1] === Infinity
  ) {
    return <div></div>;
  }
  const maxValue = Math.max(
    ...Object.values(totalExpensesByCategory).map((category) => category[0])
  );
  const maxHeight = 200; // set the maximum height you want the bars to reach

  return (
    <table className="c-bar-graph">
      <tfoot className="c-bar-graph__footer">
        <tr>
          <td>Rent/Living</td>
          <td>Lifestyle</td>
          <td>Auto & Trans.</td>
          <td>Food & Dining</td>
          <td>Health & Fit</td>
          <td>Entertainment</td>
          <td>Miscellaneous</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td
            className="c-bar-graph__cell "
            data-graph={totalExpensesByCategory["Rent & Living"]}
          >
            {totalExpensesByCategory["Rent & Living Expenses"][0]}

            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Rent & Living Expenses"][0] /
                    maxValue) *
                  maxHeight
                }px`,
              }}
            ></span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Lifestyle"]}
          >
            {totalExpensesByCategory["Lifestyle"][0]}
            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Lifestyle"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            ></span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Auto & Transportation"]}
          >
            {totalExpensesByCategory["Auto & Transportation"][0]}

            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Auto & Transportation"][0] /
                    maxValue) *
                  maxHeight
                }px`,
              }}
            ></span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Food & Dining"]}
          >
            {totalExpensesByCategory["Food & Dining"][0]}

            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Food & Dining"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            ></span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Health & Fitness"]}
          >
            {totalExpensesByCategory["Health & Fitness"][0]}

            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Health & Fitness"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            ></span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Entertainment"]}
          >
            {totalExpensesByCategory["Entertainment"][0]}

            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Entertainment"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            ></span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Miscellaneous"]}
          >
            {totalExpensesByCategory["Miscellaneous"][0]}

            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Miscellaneous"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            ></span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BarGraph;
