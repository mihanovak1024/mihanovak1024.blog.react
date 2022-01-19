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
      <BrowserRouter>
        <div className="bodyContent">
          <Header />
        </div>
        <hr />
        <div className="bodyContent flexOnly">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<PostsContainer postList={jsonData.postList} />}
            />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
        <footer>
          <div className="bodyContent">
            <Footer />
          </div>
        </footer>
      </BrowserRouter>
    );
  }
}

// ========================================

render(<App />, document.getElementById("root"));
