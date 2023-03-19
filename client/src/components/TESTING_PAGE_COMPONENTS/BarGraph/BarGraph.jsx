import React, { useEffect } from "react";
import "./BarGraph.css";

function BarGraph({ totalExpensesByCategory }) {
  console.log(totalExpensesByCategory);
  let months = document.querySelectorAll("td");
  const max = 5000;

  months.forEach((month) => {
    if (month.dataset.graph) {
      const value = month.dataset.graph;
      const bar = month.querySelector("span");
      const barHeight = (value / max) * 100;
      bar.style.height = `${barHeight}%`;
    }
  });

  return (
    <table class="c-bar-graph">
      <tfoot class="c-bar-graph__footer">
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
          <td class="c-bar-graph__cell" data-graph="{Replace_Me}">
            <span class="c-bar-graph__data">Replace_Me</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="{Replace_Me}">
            <span class="c-bar-graph__data">Replace_Me</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="{Replace_Me}">
            <span class="c-bar-graph__data">Replace_Me</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="{Replace_Me}">
            <span class="c-bar-graph__data">Replace_Me</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="{Replace_Me}">
            <span class="c-bar-graph__data">Replace_Me</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="{Replace_Me}">
            <span class="c-bar-graph__data">Replace_Me</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="{Replace_Me}">
            <span class="c-bar-graph__data">Replace_Me</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BarGraph;
