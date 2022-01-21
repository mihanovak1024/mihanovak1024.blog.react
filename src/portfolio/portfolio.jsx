import React from "react";
import "../css/index.css";
import { Emphasize } from "../textutils";
import { Link } from "react-router-dom";

export class Portfolio extends React.Component {
  
  render() {
    return (
      <div className="Portfolio">
        <h1>Portfolio</h1>
        <p className="Portfolio__Description">Some of my hobby projects.</p>
        <p className="Portfolio__Description">
          The main goal is <Emphasize text="gaining knowledge" /> and with some
          I tried to scratch my own itch.
        </p>
        <br></br>

        <ProjectsGrid projects={this.props.projectList} />
      </div>
    );
  }
}

function ProjectsGrid(props) {
  let projects = props.projects.map(project => <PortfolioProject key={project.title} url={project.url} img={project.img} title={project.title} excerpt={project.excerpt} />);

  return (
    <div className="Portfolio__ProjectGrid">
      {projects}
    </div>
  );
}

function PortfolioProject(props) {
  let url = "https://mihanovak1024.com/portfolio/" + props.url;
  return (
    <div className="Portfolio__Project">
      <img className="Portfolio__ProjectImage" src={props.img} />
      <a className="Portfolio__Title Portfolio__Title--LightBlue" href={url}>{props.title}</a>
      <p className="Portfolio__ProjectExcerpt">{props.excerpt}</p>
    </div>
  );
}
