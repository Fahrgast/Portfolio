import "./home.styles.scss";

import bubblePaths from "../../assets/shared/background/paths/bubble-paths.json";
import makeBubbleFluid from "../../components/bubble/bubble.js";

import { useEffect } from "react";

const Home = () => {
  const bottomRightPath = bubblePaths.backgroundBottomRight;

  useEffect(() => {
    makeBubbleFluid(6, 7, 0.0003, 10);
  });

  return (
    <div className="home-container" id="home-container">
      <div className="home-text-container">
        <h3 className="hello">Hey! I am</h3>
        <h1 className="name">Felix Argast.</h1>

        <h2 className="home-subheading">Self-thaught Frontend Developer,</h2>
        <h2 className="info">studied Software Engineer</h2>
      </div>
      <svg
        viewBox="0 0 153.41307 108.96785"
        className="background-bottom-right"
      >
        <g transform="translate(-19.987011,-66.516075)">
          <path d={bottomRightPath} id={`bubble-path-5`} />
        </g>
      </svg>
      <img src="../../assets/Me.png" alt="Felix" className="me" />
    </div>
  );
};

export default Home;
