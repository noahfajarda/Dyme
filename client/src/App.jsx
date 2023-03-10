// React Boilerplate
// import React, { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";
import HomePage from "./pages/HomePage";

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
              {/* all other routes */}
              <Route path="/home" element={<HomePage />} />
              <Route path="*" element={<MainPage />} />
            </Routes>
          </header>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
