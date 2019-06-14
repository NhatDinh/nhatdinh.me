import React from "react";

//components
import ProjectCard from "./ProjectCard";

//data
import data from "../data/projects.json";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: {}, mode: this.props.mode };
  }

  componentWillMount() {
    this.setState({ projects: data.projects });
  }

  componentDidMount() {
    console.log("did mount", this.state);
  }

  render() {
    return (
      <div className="dark-mode projects-container">
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
        <style global jsx>{`
          .projects-container {
            padding: 30px 30px;
          }
        `}</style>
      </div>
    );
  }
}
export default Projects;
