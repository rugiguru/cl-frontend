import React from 'react'
import "./Navbar.css";
import { FaCuttlefish } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const NavbarNew = () =>{

  const navigate = useNavigate()
  
  const navigateToLayout = () => {
    navigate('/') ;
  }

  return (
    <nav className="navbar" >
        <div className="navbar-logo" onClick={navigateToLayout}>
          <span >
            <FaCuttlefish />
          </span>
          ODERLOGS
        </div>  

        <ul className="navbar-ul">
          <li>  
            <a href="#">Java</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
          <li>
            <a href="#">DS & Algo</a>
          </li>
          <li>
            <a href="#">System Design</a>
          </li>
        </ul>
      </nav>
  )
}

export default NavbarNew;
