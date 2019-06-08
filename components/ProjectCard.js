import React from "react";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidlMount() {
    console.log("props: ", this.props.links);
  }

  render() {
    return (
      <div className="sm-container card-container">
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <h4 className="horizontal-center">
          <ul className="links-wrapper">
            <li className="format-disabled">
              <a
                className="format-disabled"
                href={this.props.links.live}
                target="_blank"
              >
                Live
              </a>
            </li>{" "}
            -{" "}
            <li className="format-disabled">
              <a
                className="format-disabled"
                href={this.props.links.code}
                target="_blank"
              >
                Code
              </a>
            </li>
          </ul>
        </h4>
        <div className="gif-wrapper is-center">
          <img src={this.props.gif} alt="my image" />
        </div>
        <div className="details-wrapper">
          <ul>
            {this.props.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <style global jsx>{`
          .card-container {
            display: flex;
            flex-direction: column;
            border-bottom: 2px solid black;
            padding-bottom: 20px;
            padding-bottom: 0 0 30px 0;
            margin: 0;
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

          .links-wrapper a {
            color: rgba(143, 0, 255, 1);
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
