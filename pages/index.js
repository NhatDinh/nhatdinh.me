import React from "react";
import Head from "next/head";

//components
import Hero from "../components/Hero";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "dark"
    };
  }

  render() {
    return (
      <div className="body-container">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/x-icon"
            href="./static/paint-brush.png"
          />
        </Head>
        <Hero />
        <style global jsx>{`
          body {
            margin: 0;
            line-height: 1.3;
            font-family: avenir, proxima nova, helvetica neue, Helvetica, Arial,
              sans-serif;
            font-weight: 500;
            -webkit-font-smoothing: antialiased;
            height: 1000vh;
            font-size: 30px;
          }

          body h1 {
            font-size: 40px;
          }

          .dark-mode {
            background-color: rgba(98, 206, 161, 1);
            color: white;
          }

          .light-mode {
            background-color: rgba(98, 206, 161, 0.2);
            color: black;
          }

          .format-disabled {
            text-decoration: none;
            list-style: none;
          }

          .hide {
            display: none;
          }
          .show {
            display: block;
          }

          .hide-w-opacity {
            opacity: 0;
          }

          .show-w-opacity {
            opacity: 1;
          }

          .animated-transition {
            transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .m-container {
            padding: 0px 40px;
          }

          .sm-container {
            padding: 0px 100px;
          }

          .is-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .action-btn {
            cursor: pointer;
            text-align: center;
            border-radius: 12px;
            transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
            padding: 10px;
            font-weight: 700;
            border: none;
            font-size: 20px;
          }

          .action-btn:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
            transform: translateY(-10px);
            background-color: white;
          }

          /* Screen sizes */
          /* Tablet */
          @media (max-width: 991px) {
            body h1 {
              font-size: 34px;
            }

            body {
              font-size: 24px;
            }
          }

          /* Mobile - Landscape */
          @media (max-width: 767px) {
            body h1 {
              font-size: 32px;
            }

            body {
              font-size: 22px;
            }
          }

          /* Mobile - Portrait */
          @media (max-width: 479px) {
            .body-container h1 {
              font-size: 28px;
            }

            .body-container {
              font-size: 18px;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default Index;
