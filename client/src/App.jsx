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
<<<<<<< HEAD
import LoginPage1 from "./pages/LoginPage1";
import DisplayDataPage from "./pages/DisplayDataPage";

const client = new ApolloClient({
  uri: "/graphql",
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
              <Route path="/test" element={<TestPage />} />
              <Route path="/DisplayDataPage" element={<DisplayDataPage />} />
              <Route path="/question" element={<QuestionPage />} />
              <Route path="/login" element={<LoginPage1 />} />
              <Route path="/useramount" element={<UserAmount />} />
              <Route path="/home" element={<HomePage />} />
              {/* all other routes */}
              <Route path="*" element={<MainPage />} />
            </Routes>
          </header>
        </div>
      </Router>
    </ApolloProvider>
  );
=======
import LoginSignupPage from "./pages/LoginSignupPage";
import DisplayDataPage from "./pages/DisplayDataPage";
import ExpensesPage from "./pages/ExpensesPage";

function App() {
    const { loading, error, data } = useQuery(QUERY_me);
    // isolate the DB data you need
    const user = data?.me;
    return (
        <Router>
            {/* wrapper for everything routing related */}
            <div className="App">
                <header className="App-header">
                    <Routes>
                        {/* individual display route */}
                        {user && (
                            <>
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
                                    element={<HomePage user={user} />}
                                />
                            </>
                        )}
                        <Route path="/login" element={<LoginSignupPage />} />
                        {/* all other routes */}
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
>>>>>>> a17a459117907d58977105f89be175e20b0e950a
}

export default App;
