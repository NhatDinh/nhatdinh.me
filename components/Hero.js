import React from "react";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dark_mode: false
    };
  }

  toggleMode = () => {
    this.setState({ dark_mode: !this.state.dark_mode });
  };

  render() {
    return (
      <div className="hero-section">
        <div
          className={
            this.state.dark_mode
              ? "dark-mode grid is-center"
              : "light-mode grid is-center"
          }
        >
          <div className="m-container">
            <h1>Hi 👋🏼, I'm Nhat & I'm a Front-End Developer</h1>
            <p>
              Sharing about design and engineering makes me very happy 🌈
              <br />
              I'm super passionate about tech startups and businesses, if your
              team could use a front end engineer, I'd be very interested ✋
            </p>
          </div>
          <div className="m-container" />
          <ul className="contact-wrapper">
            <li className="format-disabled">Twitter </li>
            <li className="format-disabled"> Github </li>
            <li className="format-disabled"> Dribble </li>
            <li className="format-disabled"> LinkedIn </li>
          </ul>
          <div className="mode-wrapper m-container">
            <button className="action-btn" onClick={this.toggleMode}>
              💡 MODE
            </button>
          </div>

          <div className="waves-container">
            <svg
              width="100vw"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="white">
                <animate
                  repeatCount="indefinite"
                  fill="freeze"
                  attributeName="d"
                  dur="4s"
                  values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
                M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
                "
                />
              </path>
            </svg>
          </div>
        </div>
        <style jsx>{`
          .grid {
            display: grid;
            grid-template-rows: repleat(4, 1fr);
            grid-gap: 20px;
          }
          .hero-section {
            height: 100vh;
            width: 100vw;
            display: flex;
          }

          .hero-section h1 {
            animation: hello-animation 2.5s;
            animation-fill-mode: forwards;
            opacity: 0;
          }

          .contact-wrapper {
            display: flex;
            flex-direction: row;
          }

          .waves-container {
            width: 100vw;
            height: 100px;
          }

          @keyframes hello-animation {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0px);
            }
          }
        `}</style>
      </div>
    );
  }
}
export default Hero;
