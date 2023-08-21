import React, { useState, useEffect } from "react";
import "./LatestPosts.css";
import { FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LatestPosts = (props) => {

  const navigate = useNavigate();

  const navigateToPagedetail = (postId) => {
    navigate(`/page-detail?id=${postId}`);
  };

  return (
    <main 
    // className="latestPosts" 
    id="recent-posts" >
      <h2 className="latestPosts-h2">
        <span className="latestPosts-icon-span">
          <FaRegClock />
        </span>
        <span className="latestPosts-heading-span"> Recent Posts </span>
      </h2>
      <div className="latestPosts-list">
        <ul className="latestPosts-ul" style={{ listStyleType: "none" }}>
          {props.posts.map((post, index) => {
           return ( 
              <li key={index}>
                <a onClick={()=>navigateToPagedetail(post._id)} href="" >
                  {post.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default LatestPosts;
