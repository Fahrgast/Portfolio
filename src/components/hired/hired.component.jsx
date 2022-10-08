import "./hired.styles.scss";

import bubblePaths from "../../assets/shared/background/paths/bubble-paths.json";
import makeBubbleFluid from "../../components/bubble/bubble.js";

import { useEffect } from "react";

const Hired = () => {
  const topRightPath = bubblePaths.backgroundTopRight;
  const middleLeftPath = bubblePaths.backgroundMiddleLeft;
  const bottomRightPath = bubblePaths.backgroundBottomRight;

  function resizeSVG(svgId) {
    var svg = document.getElementById(svgId);
    // Get the bounds of the SVG content
    var bbox = svg.getBBox();
    // Update the width and height using the size of the contents
    svg.setAttribute(
      "viewBox",
      `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
    );
  }

  useEffect(() => {
    resizeSVG("top-right");
  });

  return (
    <div className="background-container home-container hired-container">
      <div className="space-maker"></div>
      <svg
        viewBox="0 0 438.92892 295.93677"
        className="background-top-right"
        id="top-right"
      >
        <g transform="translate(-2.1479911,0.38196723)">
          <path d={topRightPath} id={`bubble-path-4`} />
        </g>
      </svg>
      <svg
        viewBox="0 0 153.41307 108.96785"
        className="background-bottom-right"
      >
        <g transform="translate(-19.987011,-66.516075)">
          <path d={bottomRightPath} id={`bubble-path-5`} />
        </g>
      </svg>

      <svg
        viewBox="0 0 438.92892 295.93677"
        className="background-middle-left"
        id="left"
      >
        <g transform="translate(-3.2210662,-4.6452298)">
          <path d={middleLeftPath} id={`bubble-path-6`} />
        </g>
      </svg>
    </div>
  );
};

export default Hired;
