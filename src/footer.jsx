import React from "react";
import "./index.css";

export class Footer extends React.Component {

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <div className="Footer">
        <p className="Footer__Text">
          © {currentYear} Miha Novak. Powered by React.
        </p>
      </div>
    );
  }
}