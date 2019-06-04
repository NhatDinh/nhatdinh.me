import React from "react";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="m-container card-container">
        <div className="details-wrapper">
          <h1>Sales Metrics</h1>
          <p>
            Analytics dashboard app to let software businesses visualize their
            sales data. Companies can upload a public Google Sheet to visualize
            meaningful data about their business.
            <ul>
              <li>
                App built using ReactJS, HTML5, CSS3, SCSS, ApexCharts,
                Firebase, Figma, Git.
              </li>
              <li>Free for personal use. </li>
            </ul>
          </p>
        </div>
        <div className="gif-wrapper is-center">GIF GOES HERE</div>
        <style global jsx>{`
          .card-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
          .card-container h1 {
            font-size: 32px;
            color: rgba(98, 206, 161, 1);
          }
          .card-container p {
            font-size: 22px;
            color: black;
          }
        `}</style>
      </div>
    );
  }
}
export default ProjectCard;
