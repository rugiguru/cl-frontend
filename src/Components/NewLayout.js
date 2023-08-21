import React, { useState, useEffect } from "react";
import LatestPosts from "./LatestPosts";
// import "./Layout.css";
import "./NewLayout.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Java from "./Java";
import Dsa from "./Dsa";
import SystemDesign from "./SystemDesign";
import Footer from "./Footer";
import axios from "axios";
import RealEngineering from "./RealEngineering";

const NewLayout = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((res) => {
        setPosts(res.data);
        // console.log(res.data);
        // res.data.tags.filter(dt => {
        //   return dt.contains("java") || dt.contains("dsa")
        // } )
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="test-container">
      {/* <nav>navbar</nav> */}
      <Navbar />

      {/* <div id="recent-posts" class="box">recent-posts</div> */}
      <LatestPosts posts={posts} />

      {/* <div id="sidebar-2" class="box">sidebar-2</div> */}
      <Sidebar />

      {/* <div id="java" class="box">java</div> */}
      <Java />

      {/* <div id="dsa" class="box">dsa</div> */}
      <Dsa />

      {/* <div id="realEngineer" class="box">realEngineer</div>
      <div id="systemDesign" class="box">systemDesign</div> */}

      <RealEngineering />
      <SystemDesign />
      <Footer />
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default NewLayout;