import React, { useState } from "react";
import "./Sidebar.css";
import { FaSistrix } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Sidebar = () => {
  const [email, setEmail] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const notify = () => {
    if (!validateEmail(email)) {
      toast.error("Enter valid email !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/subscribers`)
        .then((res) => {
          toast.success("Successfully subscribed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setEmail("");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div 
    // id="sidebar"
    id="sidebar-2" class="box"
    >
      <form className="sidebar-search-form">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          className="sidebar-search-input"
        />
        <button type="submit" className="sidebar-search-btn">
          <span>
            <FaSistrix size={30} />
          </span>
        </button>
      </form>
      <div className="sidebar-getUpdate">
        <h3 className="sidebar-h3">Subscribe</h3>
        <p className="sidebar-p">Subscribe to stay up-to-date.</p>
        <form className="sidebar-getupdate-form">
          <input
            className="sidebar-email-input"
            type="email"
            value={email}
            placeholder="Enter email.."
            onChange={handleEmail}
          ></input>
          <button className="sidebar-getupdate-btn" onClick={notify}>
            Get Update
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
