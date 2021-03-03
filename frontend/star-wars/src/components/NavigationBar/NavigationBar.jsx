import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigationBar">
      <ul>
        <li>
          <a href="">Planet list</a>
        </li>
        <li>
          <a href="">Voting statistics</a>
        </li>
        <li>
          <a href="">Registration</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
