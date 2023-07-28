import React from 'react'
import "./SystemDesign.css"
import { FaWindows } from "react-icons/fa";


const SystemDesign = () => {
  return (
    <div id="systemDesign">
        <h2  className="systemDesign-h2">
    <span className="systemDesign-icon-span">
      <FaWindows />
    </span>
    <span className="systemDesign-heading-span"> System Design </span>
  </h2>

  <ul className="systemDesign-list ">
        <li>
          <a href="#">Basics Of System Design</a>
        </li>
        <li>
          <a href="#">High Level Design</a>
        </li>
        <li>
          <a href="#">Low Level Design</a>
        </li>
        <li>
          <a href="#">Interview Questions</a>
        </li>
      
      </ul>

    </div>
  )
}

export default SystemDesign