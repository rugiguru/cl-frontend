import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import PageDetail from "./Components/PageDetail";
import WritePost from "./Components/post/WritePost"
import NewLayout from "./Components/NewLayout";
// import Layout from "./Components/Layout"

function App() {
  return (
    <>
      {/* <Layout /> */}
      <BrowserRouter 
      basename={`/${process.env.PUBLIC_URL}`}
      >
        <Routes>
          <Route path="" element={<NewLayout />} />
          <Route path="page-detail" element={<PageDetail />} />
          <Route path="write-post" element={<WritePost />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
