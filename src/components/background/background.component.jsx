import "./background.styles.scss";

import bubblePaths from "../../assets/shared/background/paths/bubble-paths.json";
import makeBubbleFluid from "../../components/bubble/bubble.js";

import { useEffect } from "react";

const Background = () => {
  const topRightPath = bubblePaths.backgroundTopRight;
  const middleLeftPath = bubblePaths.backgroundMiddleLeft;
  const bottomRightPath = bubblePaths.backgroundBottomRight;

  useEffect(() => {
    makeBubbleFluid(4, 10, 0.00025, 10);
    makeBubbleFluid(5, 10, 0.00025);
    makeBubbleFluid(6, 7, 0.00025, 10);
  });

  return (
    <div className="background-container">
      <svg viewBox="0 0 438.92892 295.93677" className="background-top-right">
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
      <svg viewBox="0 0 438.92892 295.93677" className="background-middle-left">
        <g transform="translate(-3.2210662,-4.6452298)">
          <path d={middleLeftPath} id={`bubble-path-6`} />
        </g>
      </svg>
    </div>
  );
};
export default Background;
