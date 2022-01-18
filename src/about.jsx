import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Sidebar } from "./sidebar.jsx";
import { Header } from "./header.jsx";
import { Footer } from "./footer.jsx";

export class About extends React.Component {
  render() {
    return (
      <div>
        <div className="bodyContent">
          <Header />
        </div>
        <hr />
        <div className="bodyContent flexOnly">
          <Sidebar />
          <div>lelelle</div>
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