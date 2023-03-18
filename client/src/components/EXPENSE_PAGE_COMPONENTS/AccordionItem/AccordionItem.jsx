import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_EXPENSE } from "../../../utils/mutations";
import { QUERY_ONE_USER } from "../../../utils/queries";

export default function AccordionItem({ userData, category, id }) {
  // Expense Mutations
  const [DeleteExpenseData, { deleteExpenseError, deleteExpenseData }] =
    useMutation(DELETE_EXPENSE, {
      update(cache, { data: { deleteExpense } }) {
        try {
          // get the singular user with specific id
          const { user } = cache.readQuery({
            query: QUERY_ONE_USER,
            variables: { id: userData.user._id },
          });

          // set a new variable
          // get every expense EXCEPT for the one that matches the clicked id
          const newExpenses = user.expenses.filter(
            (t) => t._id !== deleteExpense._id
          );

          // rewriting the read query
          cache.writeQuery({
            query: QUERY_ONE_USER,
            data: { user: { ...user, expenses: newExpenses } },
          });
        } catch (e) {
          console.error(e);
        }
      },
    });

  const deleteExpense = async (e) => {
    const expenseIdToDelete = e.target.parentNode.parentNode.id;
    // delete expense
    await DeleteExpenseData({
      variables: {
        id: expenseIdToDelete,
      },
    });
  };

  return (
    <li className="accordion-item">
      <input id={id} className="hide" type="checkbox" />
      <label htmlFor={id} className="accordion-label">
        {category}
      </label>
      <div className="accordion-child">
        {userData?.user?.expenses && (
          <table className="expense-table">
            <thead>
              <tr>
                <th>
                  <h3 className="expenses-h3 exp-border" id="h3name">
                    Name:
                  </h3>
                </th>
                <th>
                  <h3 className="expenses-h3 exp-border" id="h3description">
                    Description:
                  </h3>
                </th>
                <th>
                  <h3 className="expenses-h3" id="h3amount">
                    Amount:
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {userData?.user?.expenses
                .filter((expense) => expense.category === category)
                .map((expense) => {
                  return expense.amount !== 0 ? (
                    <tr
                      key={expense._id}
                      className="expense-row"
                      id={expense._id}
                    >
                      <td>
                        <div>{expense.name}</div>
                      </td>
                      <td>
                        <div>{expense.description}</div>
                      </td>
                      <td>
                        <div>${expense.amount}</div>
                      </td>
                      <td className="delete-expense">
                        <button onClick={deleteExpense}>DELETE</button>
                      </td>
                    </tr>
                  ) : (
                    <tr key={expense._id} className="expense-row">
                      <td colSpan="3">
                        <div>No data added!</div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </li>
  );
}
