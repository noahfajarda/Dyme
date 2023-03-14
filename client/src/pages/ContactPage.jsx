import React, { useEffect, useState } from "react";
import { useHref } from "react-router-dom";
import "../App.css";
const styles = {
  a: {
    backgroundColor: '#e8eaf6',
  }
}

function testPage() {
  return (
  <div className="container">
    <h1>Contact Us</h1>
    <a href="https://github.com/noahfajarda/Financial-Budgeter">GitHub</a>
  </div>
  );
}

export default testPage;
