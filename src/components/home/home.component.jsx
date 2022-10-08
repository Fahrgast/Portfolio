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
        <h3 className="hello">Hi, my name is</h3>
        <h1 className="name">Felix Argast.</h1>
        <h2 className="home-subheading">I'm a Frontend Developer</h2>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur magni recusandae iure excepturi quos! Modi tenetur earum
            amet, quisquam quidem cum sequi fugit explicabo nam velit, et
            aliquam minus placeat!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            molestiae facere, doloremque illum architecto dignissimos aliquid
            alias mollitia nisi.
          </p>
        </div>
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
