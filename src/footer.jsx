import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export class Footer extends React.Component {

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <div className="footer">
        © {currentYear} Miha Novak. Powered by React.
      </div>
    );
  }
}