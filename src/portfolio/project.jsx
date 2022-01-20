import React from "react";
import "../index.css";
import { useParams } from "react-router-dom";

const Project = () => {
  let { project } = useParams();

  return <div className="Project">{project}</div>;
};

export default Project;