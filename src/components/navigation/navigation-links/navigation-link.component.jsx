import "./navigation-link.styles.scss";

import makeBubbleFluid from "../../bubble/bubble.js";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const NavigationLink = ({ name, index }) => {
  useEffect(() => {
    makeBubbleFluid(index, "navlink-container");
  });

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
          <path
            id={`bubble-path-${index}`}
            d="M240 523 c-222 -23 -269 -73 -179 -189 149 -194 532 -341 833 -320
          176 12 306 108 306 226 0 74 -89 194 -178 239 -85 43 -148 50 -462 48 -162 -1
          -306 -3 -320 -4z"
          />
        </g>
      </svg>
    </div>
  );
};

export default NavigationLink;
