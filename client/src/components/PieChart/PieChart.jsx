import React from "react";
import "./PieChart.css";

export default function PieChart() {
  setTimeout(function () {
    const wrap = document.getElementById("wrap");
    wrap.className = "animated";
  }, 1000);

  const styles = { text: { color: "white" } };
  return (
    <div id="wrap" className="animated">
      <svg viewBox="0 0 450 400">
        <circle className="outline" r="100" cx="210" cy="200" />

        <circle className="pie-1" r="100" cx="210" cy="200" />
        <line className="line-1" x1="165" y1="100" x2="144" y2="65" />
        <text style={styles.text} className="text-1 text-head" x="110" y="40">
          35%
        </text>
        <text className="text-1 text-lbl" x="115" y="60">
          Food & Dining
        </text>

        <circle className="pie-2" r="100" cx="210" cy="200" />
        <line className="line-2" x1="105" y1="230" x2="65" y2="240" />
        <text className="text-2 text-head" x="10" y="255">
          18%
        </text>
        <text className="text-2 text-lbl" x="10" y="275">
          Entertainment
        </text>

        <circle className="pie-3" r="100" cx="210" cy="200" />
        <line className="line-3" x1="165" y1="300" x2="150" y2="338" />
        <text className="text-3 text-head" x="115" y="365">
          12%
        </text>
        <text className="text-3 text-lbl" x="105" y="385">
          Auto Expenses
        </text>

        <circle className="pie-4" r="100" cx="210" cy="200" />
        <line className="line-4" x1="250" y1="300" x2="270" y2="340" />
        <text className="text-4 text-head" x="255" y="365">
          12%
        </text>
        <text className="text-4 text-lbl" x="245" y="385">
          Bills
        </text>

        <circle className="pie-5" r="100" cx="210" cy="200" />
        <line className="line-5" x1="310" y1="240" x2="350" y2="255" />
        <text className="text-5 text-head" x="350" y="265">
          11%
        </text>
        <text className="text-5 text-lbl" x="335" y="285">
          Miscelleanous
        </text>

        <circle className="pie-6" r="100" cx="210" cy="200" />
        <line className="line-6" x1="320" y1="180" x2="355" y2="170" />
        <text className="text-6 text-head" x="360" y="175">
          6%
        </text>
        <text className="text-6 text-lbl" x="350" y="195">
          Lifestyle
        </text>

        <circle className="pie-7" r="100" cx="210" cy="200" />
        <line className="line-7" x1="300" y1="140" x2="335" y2="115" />
        <text className="text-7 text-head" x="340" y="115">
          5%
        </text>
        <text className="text-7 text-lbl" x="335" y="135">
          Travel
        </text>

        <circle className="pie-8" r="100" cx="210" cy="200" />
        <line className="line-8" x1="289" y1="122" x2="315" y2="95" />
        <text className="text-8 text-head" x="320" y="45">
          1%
        </text>
        <text className="text-8 text-lbl" x="290" y="65">
          Subscriptions
        </text>

        <circle
          id="helper"
          //   style="display: none"
          r="110"
          cy="200"
          cx="205"
          stroke-width="1"
          stroke="blue"
          fill="none"
        />
        <circle
          id="helper"
          //   style="display: none"
          r="150"
          cy="200"
          cx="205"
          stroke-width="1"
          stroke="blue"
          fill="none"
        />
      </svg>
    </div>
  );
}
