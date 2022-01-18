import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <div className="bodyContent">
          <Header />
        </div>
        <hr />
        <div className="bodyContent flexOnly">
          <Sidebar />
          <PostsContainer postList={jsonData.postList} />
        </div>
        <footer>
          <div className="bodyContent">
            <Footer />
          </div>
        </footer>
      </div>
    );
  }
}

// ========================================

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
