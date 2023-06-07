import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./PageDetail.css";
import LatestPosts from "./LatestPosts";
import Sidebar from "./Sidebar";
import { CgProfile } from "react-icons/cg";
import { RxUpdate } from "react-icons/rx";
import { useState } from "react";
import axios from "axios";
import { marker } from "./common/highlighter";
import dateFormat from 'dateformat';
import { useNavigate } from "react-router-dom";


const PageDetail = () => {
  const [postDetail, setPostDetail] = useState({});
  const [displayBody, setDisplayBody] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const navigate = useNavigate();

  const handleEditPost = () => {
    navigate(`/write-post`, {state : {id : postDetail._id}});
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // console.log(params.get("id"))
    let id = params.get("id");
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPostDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() =>{
      if(postDetail.body){
        setDisplayBody(marker(postDetail.body));
      }
    
  },[postDetail.body]);

  useEffect(() =>{
    if(postDetail.problemStatement){
      setProblemStatement(marker(postDetail.problemStatement));
    }
   
},[postDetail.problemStatement]);





  return (
    <div className="page-container">
      <div className="pageDetail-navbar">
        <Navbar />
      </div>
      <div className="pageDetail-content">
        <div className="pageDetail-latestPosts">
          <header className="pagedDetail-header">
            <h1 className="pageDetail-h1">{postDetail.title} {"  "} {process.env.NODE_ENV == "development" ? <button onClick={handleEditPost}>edit</button> : 
            <button onClick={handleEditPost}>edit</button>} </h1>
            <div className="pageDetail-inner-header">
              <h6 className="pageDetail-h6">
                <span className="pageDetail-icon">
                  <CgProfile />
                </span>
                By: Guruprasad Rugi
              </h6>
              <h6>
                <span className="pageDetail-icon">
                  <RxUpdate />
                </span>
             Last Updated: {dateFormat(postDetail.updatedAt, "mmmm dS, yyyy")  }
            
              </h6>
              <hr />
            </div>

            <hr />

            <div 
            className="post-problemstatement"
            dangerouslySetInnerHTML={{ __html: problemStatement.replace(/\n/g, '<br />') }}
            >

            </div>


            <div 
            className="post-body"
            dangerouslySetInnerHTML={{ __html: displayBody.replace(/\n/g, '<br />') }}
            >

            </div>

          </header>
        </div>
        <Sidebar />
      </div>
      <div className="pageDetail-footer">
        <Footer />
      </div>
    </div>
  );
};

export default PageDetail;
