import React from "react";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sm-container card-container">
        <h1>Sales Metrics</h1>
        <p>
          Analytics dashboard app to let software businesses visualize their
          sales data. Companies can upload a public Google Sheet to visualize
          meaningful data about their business.
        </p>
        <h4 className="horizontal-center">
          <ul className="links-wrapper">
            <li className="format-disabled">
              <a
                className="format-disabled"
                href="https://salesmetrics-71cb5.firebaseapp.com"
                target="_blank"
              >
                Live
              </a>
            </li>{" "}
            -{" "}
            <li className="format-disabled">
              <a
                className="format-disabled"
                href="https://github.com/NhatDinh/salesmetrics"
                target="_blank"
              >
                Code
              </a>
            </li>
          </ul>
        </h4>
        <div className="gif-wrapper is-center">
          <img src="../static/salesmetrics.gif" alt="my image" />
        </div>
        <div className="details-wrapper">
          <ul>
            <li>
              App built using ReactJS, HTML5, CSS3, SCSS, ApexCharts, Firebase,
              Figma, Git.
            </li>
            <li>Free for personal use. </li>
          </ul>
        </div>
        <style global jsx>{`
          .card-container {
            display: flex;
            flex-direction: column;
          }

          .card-container h1 {
            font-size: 32px;
            color: rgba(98, 206, 161, 1);
            text-align: center;
          }

          .card-container {
            font-size: 22px;
            color: black;
          }

          .gif-wrapper img {
            width: 80%;
            height: 100%;
          }

          /* Screen sizes */
          /* Tablet */
          @media (max-width: 991px) {
            .card-container h1 {
              font-size: 34px;
            }

            .card-container {
              font-size: 24px;
            }

            .details-container {
              display: flex;
              flex-direction: rows;
            }
          }

          /* Mobile - Landscape */
          @media (max-width: 767px) {
            .card-container h1 {
              font-size: 32px;
            }

            .card-container {
              font-size: 22px;
            }
          }

          /* Mobile - Portrait */
          @media (max-width: 479px) {
            .card-container h1 {
              font-size: 28px;
            }

            .card-container {
              font-size: 18px;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default ProjectCard;
