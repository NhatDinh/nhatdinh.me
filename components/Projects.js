import React from "react";

//components
import ProjectCard from "./ProjectCard";

//data
import data from "../data/projects.json";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: {} };
  }

  componentWillMount() {
    this.setState({ projects: data.projects });
  }

  componentDidMount() {
    console.log("did mount", this.state.projects);
  }

  render() {
    return (
      <ul>
        {this.state.projects.map(project => (
          <li className="format-disabled" key={project.id}>
            <ProjectCard
              title={project.name}
              description={project.description}
              links={project.links}
              gif={project.gif}
              features={project.features}
            />
          </li>
        ))}
      </ul>
    );
  }
}
export default Projects;
