import React, { useState } from "react";
import "../styles/ExpenseStyles.css";

function ExpensesPage() {

    const [expenses, setExpenses] = useState({
        rent: 0,
        lifestyle: 0,
        auto: 0,
        food: 0,
        health: 0,
        entertainment: 0,
        misc: 0
    });


  return (
    <div className="expense-page">
    <div>
        <h1>Expenses</h1>
    </div>
      <ul className="accordion">
        <li className="accordion-item">
          <input id="s1" className="hide" type="checkbox" />
          <label for="s1" className="accordion-label">
            Rent & Living Expenses
          </label>
          <p className="accordion-child">
            ${expenses.rent}
          </p>
        </li>
        <li className="accordion-item">
          <input id="s2" className="hide" type="checkbox" />
          <label for="s2" className="accordion-label">
            Lifestyle
          </label>
          <p className="accordion-child">
            ${expenses.lifestyle}
          </p>
        </li>
        <li className="accordion-item">
          <input id="s3" className="hide" type="checkbox" />
          <label for="s3" className="accordion-label">
            Auto & Transportation
          </label>
          <p className="accordion-child">
            ${expenses.auto}
          </p>
        </li>
        <li className="accordion-item">
          <input id="s4" className="hide" type="checkbox" />
          <label for="s4" className="accordion-label">
            Food/Dining
          </label>
          <p className="accordion-child">
          ${expenses.food}
          </p>
        </li>
        <li className="accordion-item">
          <input id="s5" className="hide" type="checkbox" />
          <label for="s5" className="accordion-label">
            Health & Fitness
          </label>
          <p className="accordion-child">
          ${expenses.health}
          </p>
        </li>
        <li className="accordion-item">
          <input id="s6" className="hide" type="checkbox" />
          <label for="s6" className="accordion-label">
            Entertainment
          </label>
          <p className="accordion-child">
          ${expenses.entertainment}
          </p>
        </li>
        <li className="accordion-item">
          <input id="s7" className="hide" type="checkbox" />
          <label for="s7" className="accordion-label">
            Misc.
          </label>
          <p className="accordion-child">
          ${expenses.misc}
          </p>
        </li>
      </ul>
      <a href="/home">
        <button>Back To Home</button>
      </a>
    </div>
  );
}

export default ExpensesPage;
