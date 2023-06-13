import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  const navigateToPagedetail = (postId) => {
    navigate(`/page-detail?id=${postId}`);
  };

  return (
    <footer>
      <div className="footer-div">
        <div>
          <h4 className="footer-h4">About Us</h4>
          <p className="footer-content">
            It is easy to get lost in the internet searching for coding
            solutions while learning the coding. </p>
            <p className="footer-content">Here a set of problems and
            solutions are written based on best resources available, best
            possible solutions for the problems will be posted here.
          </p>
        </div>
        <div>
        <h4 className="footer-h4">Explore</h4>
          <ul className="footer-content">
          <li><a href="#">Interview</a></li>
          <li><a href="#">DSA & Algo</a></li>
          <li><a href="#">Low Level Designing</a></li>
          <li><a href="#">High Level Designing</a></li>
          <li><a onClick={()=>navigateToPagedetail("64835dc0752339739aa90982")} >Book Shelf</a></li>
          </ul>
        </div>
        <div>
        <h4 className="footer-h4">Meta Links</h4>
        <ul className="footer-content">
            <li><a onClick={()=>navigateToPagedetail("64835d77752339739aa9097f")} >About Us</a></li>
            {/* <li><a href="">Contact Us</a></li> */}
            <li><a onClick={()=>navigateToPagedetail("64835d85752339739aa90980")} >Advertise</a></li>
            <li><a onClick={()=>navigateToPagedetail("64835d9a752339739aa90981")} >Privacy Policy</a></li>
          </ul>
        </div>
        <div>
        <h4 className="footer-h4">React out us @</h4>
        <div className="footer-reachOut">
         <a href="https://instagram.com/coderlogs?igshid=ZDc4ODBmNjlmNQ=="> < BsInstagram className="footer-image" /></a>
          {/* < BsFacebook className="footer-image" /> */}
         <a href="mailto:coderlogs.guru@gmail.com">< SiGmail className="footer-image" /></a> 
         <a href="https://twitter.com/CoderLogs?t=I-L_tS-1MFTZOfAW8eNKMQ&s=09">< BsTwitter className="footer-image" /></a> 
        </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
