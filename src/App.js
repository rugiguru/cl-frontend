import "./App.css";
import Layout from "./Components/Layout";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import PageDetail from "./Components/PageDetail";
import WritePost from "./Components/post/WritePost"
// import Layout from "./Components/Layout"

function App() {
  return (
    <>
      {/* <Layout /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="page-detail" element={<PageDetail />} />
          <Route path="write-post" element={<WritePost />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
