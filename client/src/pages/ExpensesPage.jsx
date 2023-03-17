import React, { useEffect, useState } from "react";
import "../styles/ExpenseStyles.css";
import Auth from "../utils/auth";
import { Link, Navigate } from "react-router-dom";

// queries
import { QUERY_ONE_USER, QUERY_me } from "../utils/queries";
import { useQuery } from "@apollo/client";

function ExpensesPage() {
    const [expenses, setExpenses] = useState({});
    const { loading, error, data } = useQuery(QUERY_me);
    console.log(data?.me);
    // retrieve the id from token to get specific user data
    // const token = Auth.getProfile();
    // const id = token.data._id;

    const { loading: userLoading, error: userError, data: userData } = useQuery(QUERY_ONE_USER, {
        variables: { id: data?.me._id },
    });

    useEffect(() => {
      if (userData) {
        setExpenses(userData?.user?.expenses);
      }
    }, [userData])

    const updateExpenses = (event) => {
      setExpenses({
        ...expenses,
      })
      // useMutation here has well
    }

    // isolate the DB data you need
    // const user = data?.user || [];

    // log in check
    if (!Auth.loggedIn()) {
        return <Navigate to="/login" />;
    }

    //const [userData?.user?.expenses, set]

    // const userData?.user?.expenses = user.expenses;
    // console.log(userData?.user?.expenses);

    //     const submitButton = document.getElementById("submit");

    // submitButton.addEventListener("click", (event) => {
    //   event.preventDefault(); // prevent the form from submitting and reloading the page

    //   const category = document.getElementById("category").value;
    //   const amount = document.getElementById("amount").value;
    //   const name = document.getElementById("name").value;

    //   // do something with the form data, for example:
    //   console.log(`Category: ${category}, Amount: ${amount}, Name: ${name}`);

    //   // clear the form fields
    //   document.getElementById("category").value = "rent";
    //   document.getElementById("amount").value = "";
    //   document.getElementById("name").value = "";
    // });

    return (<>
      {loading ? (<p>LOADING...</p>) : data?.me ? (
        <div className="expense-page">
        <div>
            <a href="/home">
                <h1 className="exp-header">Expenses</h1>
            </a>
        </div>
        {/* 
  <div style={{ marginTop: "100px" }}>
    {userData?.user?.expenses &&
      userData?.user?.expenses.map((expense) => {
        return (
          <div id={expense._id}>
            <div style={{ marginTop: "10px" }}>{expense.name}</div>
            <div>{expense.amount}</div>
            <div>{expense.category}</div>
          </div>
        );
      })}
  </div>

  <div style={{ marginTop: "100px" }}>
    {userData?.user?.expenses &&
      userData?.user?.expenses
        .filter((expense) => expense.category === "Food & Dining")
        .map((expense) => {
          return (
            <div id={expense._id}>
              <div style={{ marginTop: "10px" }}>{expense.name}</div>
              <div>{expense.amount}</div>
              <div>{expense.category}</div>
            </div>
          );
        })}
  </div> */}

        <form class="expense-form" onSubmit={(event) => updateExpenses(event)}>
            <h2>Add an expense:</h2>
            <div class="expense-inputs">
                <div class="expense-category">
                    <label for="category">Category:</label>
                    <select id="category">
                        <option value="Rent & Living Expenses">
                            Rent & Living Expenses
                        </option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Auto & Transportation">
                            Auto & Transportation
                        </option>
                        <option value="Food & Dining">Food & Dining</option>
                        <option value="Health And Fitness">
                            Health And Fitness
                        </option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                </div>
                <div class="expense-amount">
                    <label for="amount">Amount: $</label>
                    <input type="text" id="amount" />
                </div>
                <div class="expense-name">
                    <label for="name">Name:</label>
                    <input type="text" id="name" />
                </div>
                <button id="submit">Submit</button>
            </div>
        </form>

  <ul className="accordion">



<li className="accordion-item">
<input id="s1" className="hide" type="checkbox" />
<label for="s1" className="accordion-label">
Rent & Living Expenses
</label>
<p className="accordion-child">
{userData?.user?.expenses && (
  <table className="expense-table">
    <thead>
      <tr>
        <th><h3 className="expenses-h3 exp-border" id="h3name">Name:</h3></th>
        <th><h3 className="expenses-h3 exp-border" id="h3description">Description:</h3></th>
        <th><h3 className="expenses-h3" id="h3amount">Amount:</h3></th>
      </tr>
    </thead>
    <tbody>
      {userData?.user?.expenses
        .filter((expense) => expense.category === "Rent")
        .map((expense) => {
          return expense.amount !== 0 ? (
            <tr key={expense._id} className="expense-row">
              <td><div>{expense.name}</div></td>
              <td><div>{expense.description}</div></td>
              <td><div>${expense.amount}</div></td>
            </tr>
          ) : (
            <tr key={expense._id} className="expense-row">
              <td colSpan="3"><div>No data added!</div></td>
            </tr>
          );
        })}
    </tbody>
  </table>
)}
</p>
</li>



    <li className="accordion-item">
      <input id="s2" className="hide" type="checkbox" />
      <label for="s2" className="accordion-label">
        Lifestyle
      </label>
      <p className="accordion-child">
      {userData?.user?.expenses && (
  <table className="expense-table">
    <thead>
      <tr>
        <th><h3 className="expenses-h3 exp-border" id="h3name">Name:</h3></th>
        <th><h3 className="expenses-h3 exp-border" id="h3description">Description:</h3></th>
        <th><h3 className="expenses-h3" id="h3amount">Amount:</h3></th>
      </tr>
    </thead>
    <tbody>
      {userData?.user?.expenses
        .filter((expense) => expense.category === "Lifestyle")
        .map((expense) => {
          return expense.amount !== 0 ? (
            <tr key={expense._id} className="expense-row">
              <td><div>{expense.name}</div></td>
              <td><div>{expense.description}</div></td>
              <td><div>${expense.amount}</div></td>
            </tr>
          ) : (
            <tr key={expense._id} className="expense-row">
              <td colSpan="3"><div>No data added!</div></td>
            </tr>
          );
        })}
    </tbody>
  </table>
)}
      </p>
    </li>
    <li className="accordion-item">
      <input id="s3" className="hide" type="checkbox" />
      <label for="s3" className="accordion-label">
        Auto & Transportation
      </label>
      <p className="accordion-child">
        {" "}
        {userData?.user?.expenses && (
  <table className="expense-table">
    <thead>
      <tr>
        <th><h3 className="expenses-h3 exp-border" id="h3name">Name:</h3></th>
        <th><h3 className="expenses-h3 exp-border" id="h3description">Description:</h3></th>
        <th><h3 className="expenses-h3" id="h3amount">Amount:</h3></th>
      </tr>
    </thead>
    <tbody>
      {userData?.user?.expenses
        .filter((expense) => expense.category === "Auto & Transportation")
        .map((expense) => {
          return expense.amount !== 0 ? (
            <tr key={expense._id} className="expense-row">
              <td><div>{expense.name}</div></td>
              <td><div>{expense.description}</div></td>
              <td><div>${expense.amount}</div></td>
            </tr>
          ) : (
            <tr key={expense._id} className="expense-row">
              <td colSpan="3"><div>No data added!</div></td>
            </tr>
          );
        })}
    </tbody>
  </table>
)}
      </p>
    </li>
    <li className="accordion-item">
      <input id="s4" className="hide" type="checkbox" />
      <label for="s4" className="accordion-label">
        Food & Dining
      </label>
      <p className="accordion-child">
        {" "}
        {userData?.user?.expenses && (
  <table className="expense-table">
    <thead>
      <tr>
        <th><h3 className="expenses-h3 exp-border" id="h3name">Name:</h3></th>
        <th><h3 className="expenses-h3 exp-border" id="h3description">Description:</h3></th>
        <th><h3 className="expenses-h3" id="h3amount">Amount:</h3></th>
      </tr>
    </thead>
    <tbody>
      {userData?.user?.expenses
        .filter((expense) => expense.category === "Food & Dining")
        .map((expense) => {
          return expense.amount !== 0 ? (
            <tr key={expense._id} className="expense-row">
              <td><div>{expense.name}</div></td>
              <td><div>{expense.description}</div></td>
              <td><div>${expense.amount}</div></td>
            </tr>
          ) : (
            <tr key={expense._id} className="expense-row">
              <td colSpan="3"><div>No data added!</div></td>
            </tr>
          );
        })}
    </tbody>
  </table>
)}
      </p>
    </li>
    <li className="accordion-item">
      <input id="s5" className="hide" type="checkbox" />
      <label for="s5" className="accordion-label">
        Health & Fitness
      </label>
      <p className="accordion-child">
        {" "}
        {userData?.user?.expenses && (
  <table className="expense-table">
    <thead>
      <tr>
        <th><h3 className="expenses-h3 exp-border" id="h3name">Name:</h3></th>
        <th><h3 className="expenses-h3 exp-border" id="h3description">Description:</h3></th>
        <th><h3 className="expenses-h3" id="h3amount">Amount:</h3></th>
      </tr>
    </thead>
    <tbody>
      {userData?.user?.expenses
        .filter((expense) => expense.category === "Health & Fitness")
        .map((expense) => {
          return expense.amount !== 0 ? (
            <tr key={expense._id} className="expense-row">
              <td><div>{expense.name}</div></td>
              <td><div>{expense.description}</div></td>
              <td><div>${expense.amount}</div></td>
            </tr>
          ) : (
            <tr key={expense._id} className="expense-row">
              <td colSpan="3"><div>No data added!</div></td>
            </tr>
          );
        })}
    </tbody>
  </table>
)}
      </p>
    </li>
    <li className="accordion-item">
      <input id="s6" className="hide" type="checkbox" />
      <label for="s6" className="accordion-label">
        Entertainment
      </label>
      <p className="accordion-child">
        {" "}
        {userData?.user?.expenses && (
  <table className="expense-table">
    <thead>
      <tr>
        <th><h3 className="expenses-h3 exp-border" id="h3name">Name:</h3></th>
        <th><h3 className="expenses-h3 exp-border" id="h3description">Description:</h3></th>
        <th><h3 className="expenses-h3" id="h3amount">Amount:</h3></th>
      </tr>
    </thead>
    <tbody>
      {userData?.user?.expenses
        .filter((expense) => expense.category === "Entertainment")
        .map((expense) => {
          return expense.amount !== 0 ? (
            <tr key={expense._id} className="expense-row">
              <td><div>{expense.name}</div></td>
              <td><div>{expense.description}</div></td>
              <td><div>${expense.amount}</div></td>
            </tr>
          ) : (
            <tr key={expense._id} className="expense-row">
              <td colSpan="3"><div>No data added!</div></td>
            </tr>
          );
        })}
    </tbody>
  </table>
)}
      </p>
    </li>
    <li className="accordion-item">
      <input id="s7" className="hide" type="checkbox" />
      <label for="s7" className="accordion-label">
        Miscellaneous
      </label>
      <p className="accordion-child">
        {" "}
        {userData?.user?.expenses && (
  <table className="expense-table">
    <thead>
      <tr>
        <th><h3 className="expenses-h3 exp-border" id="h3name">Name:</h3></th>
        <th><h3 className="expenses-h3 exp-border" id="h3description">Description:</h3></th>
        <th><h3 className="expenses-h3" id="h3amount">Amount:</h3></th>
      </tr>
    </thead>
    <tbody>
      {userData?.user?.expenses
        .filter((expense) => expense.category === "Miscellaneous")
        .map((expense) => {
          return expense.amount !== 0 ? (
            <tr key={expense._id} className="expense-row">
              <td><div>{expense.name}</div></td>
              <td><div>{expense.description}</div></td>
              <td><div>${expense.amount}</div></td>
            </tr>
          ) : (
            <tr key={expense._id} className="expense-row">
              <td colSpan="3"><div>No data added!</div></td>
            </tr>
          );
        })}
    </tbody>
  </table>
)}
      </p>
    </li>
  </ul>
  <a href="/home">
    <button>Back To Home</button>
  </a>
</div>
      ) : <Navigate to="/login" />}
    </>
        
  );
}

export default ExpensesPage;
