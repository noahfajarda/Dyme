import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_EXPENSE } from "../../../utils/mutations";

export default function AccordionItem({ userData, category, id }) {
    // Expense Mutations
    const [DeleteExpenseData, { deleteExpenseError, deleteExpenseData }] =
        useMutation(DELETE_EXPENSE);

    const deleteExpense = async (e) => {
        const expenseIdToDelete = e.target.parentNode.id;
        // delete expense
        await DeleteExpenseData({
            variables: {
                id: expenseIdToDelete,
            },
        });
        document.location.reload();
    };
    return (
        <li className="accordion-item">
            <input id={id} className="hide" type="checkbox" />
            <label htmlFor={id} className="accordion-label">
                {category}
            </label>
            <p className="accordion-child">
                {userData?.user?.expenses && (
                    <table className="expense-table">
                        <thead>
                            <tr>
                                <th>
                                    <h3
                                        className="expenses-h3 exp-border"
                                        id="h3name"
                                    >
                                        Name:
                                    </h3>
                                </th>
                                <th>
                                    <h3
                                        className="expenses-h3 exp-border"
                                        id="h3description"
                                    >
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
                                .filter(
                                    (expense) => expense.category === category
                                )
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
                                            <button onClick={deleteExpense}>
                                                DELETE
                                            </button>
                                        </tr>
                                    ) : (
                                        <tr
                                            key={expense._id}
                                            className="expense-row"
                                        >
                                            <td colSpan="3">
                                                <div>No data added!</div>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                )}
            </p>
        </li>
    );
}
