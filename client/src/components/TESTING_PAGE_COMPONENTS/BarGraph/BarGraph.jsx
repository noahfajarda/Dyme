import React, { useEffect } from "react";
import "./BarGraph.css";

function BarGraph() {
  let months = document.querySelectorAll("td");
  const max = 5000;

  months.forEach((month) => {
    if (month.dataset.graph) {
      console.log(month);
      const value = month.dataset.graph;
      const bar = month.querySelector("span");
      console.log(value);
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
          <td class="c-bar-graph__cell" data-graph="900">
            <span class="c-bar-graph__data">900</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="1500">
            <span class="c-bar-graph__data">1500</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="2400">
            <span class="c-bar-graph__data">2400</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="3000">
            <span class="c-bar-graph__data">3000</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="1200">
            <span class="c-bar-graph__data">1200</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="1520">
            <span class="c-bar-graph__data">1520</span>
          </td>
          <td class="c-bar-graph__cell" data-graph="1520">
            <span class="c-bar-graph__data">1520</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BarGraph;
