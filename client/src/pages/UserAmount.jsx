import React, { useEffect, useState } from "react";
import "../styles/UserAmount.css";


function UserAmount() {
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

  
  
  
  
  
  