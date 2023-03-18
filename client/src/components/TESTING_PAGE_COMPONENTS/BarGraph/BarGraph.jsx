import React, { useEffect } from "react";
import "./BarGraph.css";

function BarGraph() {
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
    <table>
      <tr>
        <th>Month</th>
        <th>Value</th>
      </tr>
      <tr>
        <td data-graph="3000">January</td>
        <td>
          <span></span>
        </td>
      </tr>
      <tr>
        <td data-graph="2500">February</td>
        <td>
          <span></span>
        </td>
      </tr>
      <tr>
        <td data-graph="4000">March</td>
        <td>
          <span></span>
        </td>
      </tr>
      <tr>
        <td data-graph="1500">April</td>
        <td>
          <span></span>
        </td>
      </tr>
    </table>
  );
}

export default BarGraph;
