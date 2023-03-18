import React, { useEffect, useState } from "react";
import "./Menu.css";

export default function Menu() {
    window.onload = function () {
        var navbarLinksList = document.querySelectorAll(".navbar .navbar-link");
        var navbarUnderscore = document.querySelector(
            ".navbar .navbar-underscore"
        );
        var activeNavLinkClassName = "active";

        navbarLinksList.forEach(function (navLink) {
            if (navLink.classList.contains(activeNavLinkClassName)) {
                showNavbarUnderscore(navLink);
            }

            navLink.addEventListener("click", function () {
                for (var i = 0; i < navbarLinksList.length; i++) {
                    var link = navbarLinksList[i];
                    if (link.classList.contains(activeNavLinkClassName)) {
                        link.classList.remove(activeNavLinkClassName);
                        break;
                    }
                }

                this.classList.add(activeNavLinkClassName);
                showNavbarUnderscore(this);
            });
        });

        function showNavbarUnderscore(navLink) {
            navbarUnderscore.style.width = navLink.offsetWidth + "px";
            navbarUnderscore.style.transform =
                "translateX(" + navLink.offsetLeft + "px)";

            if (navbarUnderscore.style.display !== "block") {
                navbarUnderscore.style.display = "block";
            }
        }
    };
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a className="navbar-link" href="www.google.com">
                        <i className="bi bi-house navbar-link-icon"></i>
                    </a>
                </li>

                <li className="navbar-item">
                    <a className="navbar-link" href="www.google.com">
                        <i className="bi bi-person navbar-link-icon"></i>
                    </a>
                </li>

                <div className="navbar-underscore"></div>
            </ul>
        </nav>
    );
}
