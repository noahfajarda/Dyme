import React from "react";
import "./UserAmount.css";

export default function GithubLinks() {
  return (
    <div className="expenses-data">
      {/* do we need this? can we use this? css linked as "userAmount.css" */}
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
