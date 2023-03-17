import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Auth from "../utils/auth";
import "../styles/UserAmount.css";

function UserAmount() {
    if (!Auth.loggedIn()) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="loader">
            <h4>This is the total amount you currently have!</h4>
            <div className="loader__image">
                <div className="loader__coin">
                    <img
                        src="https://www.dropbox.com/s/fzc3fidyxqbqhnj/loader-coin.png?raw=1"
                        alt=""
                    />
                </div>
                <div className="loader__hand">
                    <img
                        src="https://www.dropbox.com/s/y8uqvjn811z6npu/loader-hand.png?raw=1"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default UserAmount;
