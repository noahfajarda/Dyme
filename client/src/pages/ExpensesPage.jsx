import React, { useEffect, useState } from "react";
import "../styles/ExpensePage.css";
import Auth from "../utils/auth";
import { Link, Navigate } from "react-router-dom";

// queries
import { useQuery } from "@apollo/client";
import { QUERY_ONE_USER, QUERY_me } from "../utils/queries";

// components
import FormComponent from "../components/EXPENSE_PAGE_COMPONENTS/FormComponent/FormComponent";
import AccordionComponent from "../components/EXPENSE_PAGE_COMPONENTS/AccordionComponent/AccordionComponent";

function ExpensesPage() {
  const [expenses, setExpenses] = useState({});
  const [total, setTotal] = useState(0);
  const { loading, error, data } = useQuery(QUERY_me);
  // uncomment to see the user data
  // console.log(data?.me);

  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(QUERY_ONE_USER, {
    variables: { id: data?.me._id },
  });

  useEffect(() => {
    if (userData) {
      setExpenses(userData?.user?.expenses);
      // insert logic for the total amount
      setTotal(0);
      userData?.user?.expenses.forEach((expense) => {
        setTotal((prev) => prev + expense.amount);
      });
    }
  }, [userData]);

  // log in check
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  const categories = [
    { id: "s1", category: "Rent & Living Expenses" },
    { id: "s2", category: "Lifestyle" },
    { id: "s3", category: "Auto & Transportation" },
    { id: "s4", category: "Food & Dining" },
    { id: "s5", category: "Health & Fitness" },
    { id: "s6", category: "Entertainment" },
    { id: "s7", category: "Miscellaneous" },
  ];

  return (
    <>
      {loading ? (
        <p>LOADING...</p>
      ) : data?.me ? (
        <div className="expense-page">
          <header>
            <h1 id="exp-header-1" className="exp-header">Expenses</h1>
            {/* <img
            src="https://media.tenor.com/wCE_eJELZ3kAAAAi/tuzki-usagi-wink.gif"
            className="money-cat"
            alt="expense pic"
            ></img> */}
            <h1 className="exp-header">
              Total: ${total.toLocaleString("en-US")}
            </h1>
            <a href="/home">
              <button id="home-button">Back to Home</button>
            </a>
          </header>
          {/* form */}
          <div className="flexbox">
          <FormComponent userData={userData} categories={categories} />
          <AccordionComponent userData={userData} categories={categories} />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default ExpensesPage;