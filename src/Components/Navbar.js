import React, { useEffect } from "react";
import "./Navbar.css";
import { useState } from "react";
import { FaCuttlefish } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const NavbarNew = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const navigate = useNavigate();

  const navigateToLayout = () => {
    navigate("/");
  };


// useEffect(() => {
//   console.log(isNavExpanded)
// }, [isNavExpanded])



  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={navigateToLayout}>
        <span>
          <FaCuttlefish />
        </span>
        ODERLOGS
        <div
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FaHamburger />
        </div>
      </div>
      <div className={isNavExpanded ? "navbar-ul" : "navbar-ul-none"}>
      <ul className="navbar-ul" >
        <li>
          <a href="#">Java</a>
        </li>

        <li>
          <a href="#">DS & Algo</a>
        </li>
        <li>
          <a href="#">System Design</a>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default NavbarNew;
