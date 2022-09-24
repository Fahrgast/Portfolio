import "./navigation-link.styles.scss";

import { NavLink } from "react-router-dom";
import navLinkBubble from "../../../assets/shared/navbar/navlink-bubble-mobile.png";

const NavigationLink = ({ name }) => {
  return (
    <div className="navlink-container">
      <div className="nav-text-container">
        <NavLink className="nav-link"> {name}</NavLink>
      </div>
      <img src={navLinkBubble} alt="" className="navlink-bubble" />
    </div>
  );
};

export default NavigationLink;
