import React from "react";
import "./Java.css";
import { FaJava } from "react-icons/fa";

const Java = () => {
  return (
    <div id="java">
      <h2 className="java-h2">
        <span className="java-icon-span">
          <FaJava />
        </span>
        <span className="java-heading-span"> Java </span>
      </h2>

      <ul className="java-list">
        <li>
          <a href="#">Java Strings</a>
        </li>
        <li>
          <a href="#">Java Multithreading</a>
        </li>
        <li>
          <a href="#">Java Interfaces</a>
        </li>
        <li>
          <a href="#">Java Lambda Functions</a>
        </li>
        <li>
          <a href="#">Java Interview Questions</a>
        </li>
        <li>
          <a href="#">SOLID Principles using Java</a>
        </li>
      </ul>
    </div>
  );
};

export default Java;
