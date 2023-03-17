import React from "react";
import "./GithubLinks.css";

function GithubLinks() {
  return (
    <ul class="wrapperr">
      <li class="icon noah">
        <span class="tooltip">Noah</span>
        <span>
          <a href="https://github.com/noahfajarda">
            <i class="fab fa-github" style={{ fontSize: "2em" }}></i>
          </a>
        </span>
      </li>
      <li class="icon anas">
        <span class="tooltip">Anas</span>
        <span>
          <a href="https://github.com/aqazza">
            <i class="fab fa-github" style={{ fontSize: "2em" }}></i>
          </a>
        </span>
      </li>
      <li class="icon amr">
        <span class="tooltip">Amr</span>
        <span>
          <a href="https://github.com/amoubasher">
            <i class="fab fa-github" style={{ fontSize: "2em" }}></i>
          </a>
        </span>
      </li>
      <li class="icon diana">
        <span class="tooltip">Diana</span>
        <span>
          <a href="https://github.com/dianaanguyen">
            <i class="fab fa-github" style={{ fontSize: "2em" }}></i>
          </a>
        </span>
      </li>
      <li class="icon keith">
        <span class="tooltip">Keith</span>
        <span>
          <a href="https://github.com/Keithly009">
            <i class="fab fa-github" style={{ fontSize: "2em" }}></i>
          </a>
        </span>
      </li>
    </ul>
  );
}

export default GithubLinks;
