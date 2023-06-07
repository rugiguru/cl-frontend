import React from 'react'
import { FaDatabase } from "react-icons/fa";
import { TbMathSymbols } from "react-icons/tb";
import "./Dsa.css"

const Dsa = () => {
  return (
    <div id="dsa">
    <h2  className="dsa-h2">
    <span className="dsa-icon-span">
      <TbMathSymbols />
     </span>
    <span className="dsa-heading-span"> DSA </span>
  </h2>
  <ul className="dsa-list">
        <li>
          <a href="#">Arrays</a>
        </li>
        <li>
          <a href="#">Strings</a>
        </li>
        <li>
          <a href="#">Linked List</a>
        </li>
        <li>
          <a href="#">Stack</a>
        </li>
        <li>
          <a href="#">Queue</a>
        </li>
        <li>
          <a href="#">Hashing</a>
        </li>
      </ul>
  </div>
  )
}

export default Dsa