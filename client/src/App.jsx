// React Boilerplate
import React, { useEffect, useState } from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
    useQuery,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import { QUERY_ONE_USER, QUERY_me } from "./utils/queries";

// pages
import UserAmount from "./pages/UserAmount";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import QuestionPage from "./pages/QuestionPage.tsx";
import LoginPage1 from "./pages/LoginPage1";
import DisplayDataPage from "./pages/DisplayDataPage";
import ExpensesPage from "./pages/ExpensesPage";
import Auth from "./utils/auth";

function App() {
    const { loading, error, data } = useQuery(QUERY_me);
    // isolate the DB data you need

    return (
        <Router>
            {/* wrapper for everything routing related */}
            <div className="App">
                <header className="App-header">
                <Routes>
                        {/* all other routes */}
                        <Route
                                    path="/DisplayDataPage"
                                    element={<DisplayDataPage />}
                                />
                                <Route
                                    path="/question"
                                    element={<QuestionPage />}
                                />
                                <Route
                                    path="/useramount"
                                    element={<UserAmount />}
                                />
                                <Route
                                    path="/expenses"
                                    element={<ExpensesPage />}
                                />
                                <Route
                                    path="/home"
                                    element={<HomePage user={data?.me} />}
                                />
                        <Route path="*" element={<LoginSignupPage />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
