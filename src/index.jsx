import React from "react";
import "./index.css";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import { Sidebar } from "./sidebar.jsx";
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import { PostsContainer } from "./posts.jsx";
import { jsonData } from "./blogdata.jsx";
import { render } from "react-dom";
import { About } from "./about.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <div className="MiddleSection">
          <Sidebar />
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }
}

// ========================================

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={<PostsContainer postList={jsonData.postList} />}
        />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
