import React from "react";
import "./css/index.css";

export class Emphasize extends React.Component {
  render() {
    return <span className="TextSequence--Emphasize">{this.props.text}</span>;
  }
}
