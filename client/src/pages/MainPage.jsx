// imported component
import React, { useEffect, useState } from "react";
import logo from "../logo.svg";

// imported component
import TestComponent from "../components/TestComponent";
import AnotherComponent from "../components/AnotherComponent";
import AddProfileForm from "../components/AddProfileForm";

function getTodaysDate() {
    // get today's date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    return mm + "/" + dd + "/" + yyyy;
}

function MainPage() {
    const today = getTodaysDate();
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        // fetch data from API from back end endpoint '/api'
        // receives a res.json() of the object
        fetch("/api")
            .then((response) => response.json())
            .then((data) => {
                setBackendData(data);
            });
        // empty array == runs on first render of the 'App()' component
    }, []);

    return (
        <div>
            <div>Today's date is: {today}</div>
            <button>
                <a href="/test">Link to other page</a>
            </button>
            <AddProfileForm />
            <img src={logo} className="App-logo" alt="logo" />

            <TestComponent />

            {/* refer to the useEffect to see where get is being retrieved */}
            <div>
                {typeof backendData.users === "undefined" ? (
                    <p>loading</p>
                ) : (
                    backendData.users.map((user, i) => <p key={i}>{user}</p>)
                )}
            </div>
            {/* added testing components */}
            <AnotherComponent />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}

export default MainPage;
