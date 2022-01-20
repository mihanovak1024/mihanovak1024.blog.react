import React from "react";
import "./index.css";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { Sidebar } from "./sidebar.jsx";
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";
import { Home } from "./home.jsx";
import { Posts } from "./posts/posts.jsx";
import { About } from "./about.jsx";

import { jsonData } from "./blogdata.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="RootDiv">
        <Header />
        <hr />
        <div className="MiddleSection">
          <Sidebar />
          <div className="Main">
            <Outlet />
          </div>
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
        <Route index element={<Home postList={jsonData.postList} />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts postList={jsonData.postList} />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
