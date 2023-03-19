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
            className="c-bar-graph__cell "
            data-graph={totalExpensesByCategory["Rent & Living"]}
          >
            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Rent & Living Expenses"][0] /
                    maxValue) *
                  maxHeight
                }px`,
              }}
            >
              {totalExpensesByCategory["Rent & Living Expenses"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Lifestyle"]}
          >
            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Lifestyle"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            >
              {totalExpensesByCategory["Lifestyle"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Auto & Transportation"]}
          >
            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Auto & Transportation"][0] /
                    maxValue) *
                  maxHeight
                }px`,
              }}
            >
              {totalExpensesByCategory["Auto & Transportation"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Food & Dining"]}
          >
            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Food & Dining"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            >
              {totalExpensesByCategory["Food & Dining"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Health & Fitness"]}
          >
            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Health & Fitness"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            >
              {totalExpensesByCategory["Health & Fitness"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Entertainment"]}
          >
            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Entertainment"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            >
              {totalExpensesByCategory["Entertainment"][0]}
            </span>
          </td>
          <td
            className="c-bar-graph__cell"
            data-graph={totalExpensesByCategory["Miscellaneous"]}
          >
            <span
              className="c-bar-graph__data"
              style={{
                height: `${
                  (totalExpensesByCategory["Miscellaneous"][0] / maxValue) *
                  maxHeight
                }px`,
              }}
            >
              {totalExpensesByCategory["Miscellaneous"][0]}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BarGraph;
