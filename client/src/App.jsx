// React Boilerplate
import React, { useEffect, useState } from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

// pages
import UserAmount from "./pages/UserAmount";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import DisplayDataPage from "./pages/DisplayDataPage";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    // uri: "/graphql",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            {/* wrapper for everything routing related */}
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Routes>
                            {/* individual display route */}
                            <Route
                                path="/DisplayDataPage"
                                element={<DisplayDataPage />}
                            />
                            <Route
                                path="/question"
                                element={<QuestionPage />}
                            />
                            <Route
                                path="/login"
                                element={<LoginSignupPage />}
                            />
                            <Route
                                path="/useramount"
                                element={<UserAmount />}
                            />
                            <Route path="/home" element={<HomePage />} />

                            {/* all other routes */}
                            <Route
                                path="*"
                                element={<Navigate to="/login" />}
                            />
                        </Routes>
                    </header>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
