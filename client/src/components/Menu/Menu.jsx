import React, { useEffect, useState } from "react";
import "./Menu.css";

export default function Menu() {
    window.onload = function () {
        var navbarLinksList = document.querySelectorAll(".navbar .navbar-link");
        var navbarUnderscore = document.querySelector(".navbar .navbar-underscore");
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
        <nav class="navbar">
        <ul class="navbar-list">
          <li class="navbar-item">
            <a class="navbar-link" href="www.google.com">
              <i class="bi bi-house navbar-link-icon"></i>
            </a>
          </li>

          <li class="navbar-item">
            <a class="navbar-link" href="www.google.com">
              <i class="bi bi-person navbar-link-icon"></i>
            </a>
          </li>

          <div class="navbar-underscore"></div>
        </ul>
      </nav>
    );
};