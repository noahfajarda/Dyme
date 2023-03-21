import React from "react";
import "./GithubLinks.css";
function GithubLinks() {
  return (
    <ul className="wrapperr">
      <li className="icon noah">
        <span className="tooltip">Noah</span>
        <span>
          <a
            href="https://github.com/noahfajarda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" style={{ fontSize: "2.5em" }}></i>
          </a>
        </span>
      </li>
      <li className="icon anas">
        <span className="tooltip">Anas</span>
        <span>
          <a
            href="https://github.com/aqazza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" style={{ fontSize: "2.5em" }}></i>
          </a>
        </span>
      </li>
      <li className="icon amr">
        <span className="tooltip">Amr</span>
        <span>
          <a
            href="https://github.com/amoubasher"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" style={{ fontSize: "2.5em" }}></i>
          </a>
        </span>
      </li>
      <li className="icon diana">
        <span className="tooltip">Diana</span>
        <span>
          <a
            href="https://github.com/dianaanguyen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" style={{ fontSize: "2.5em" }}></i>
          </a>
        </span>
      </li>
      <li className="icon keith">
        <span className="tooltip">Keith</span>
        <span>
          <a
            href="https://github.com/Keithly009"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" style={{ fontSize: "2.5em" }}></i>
          </a>
        </span>
      </li>
    </ul>
  );
}
export default GithubLinks;
