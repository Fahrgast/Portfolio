import "./navigation-link.styles.scss";

import makeBubbleFluid from "../../bubble/bubble.js";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import bubblePaths from "../../../assets/shared/background/paths/bubble-paths.json";

const NavigationLink = ({ name, index }) => {
  useEffect(() => {
    makeBubbleFluid(index, 15, 0.003, 0, "navlink-container");
  });

  const navLinkBubblePath = bubblePaths.navlinkBubble;

  return (
    <div className="navlink-container">
      <div className="nav-text-container">
        <NavLink className="nav-link"> {name}</NavLink>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 121.000000 54.000000"
        preserveAspectRatio="xMidYMid meet"
        className="svg-link-bubble"
      >
        <g transform="translate(0.000000,54.000000) scale(0.100000,-0.100000)">
          <path id={`bubble-path-${index}`} d={navLinkBubblePath} />
        </g>
      </svg>
    </div>
  );
};

export default NavigationLink;
