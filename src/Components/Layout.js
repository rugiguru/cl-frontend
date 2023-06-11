import React, { useState, useEffect } from "react";
import LatestPosts from "./LatestPosts";
import "./Layout.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Java from "./Java";
import Dsa from "./Dsa";
import SystemDesign from "./SystemDesign";
import Footer from "./Footer";
import axios from "axios";
import RealEngineering from "./RealEngineering";

const Layout = () => {
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
    <div className="main-container">
      <Navbar />
      <LatestPosts posts={posts} />
      <Sidebar />
      <Java />
      <Dsa />
      <div id="sidebar2">
        {/* sidebar2 */}
        </div>
      <RealEngineering />
      <SystemDesign />
      <Footer />
    </div>
  );
};

export default Layout;
