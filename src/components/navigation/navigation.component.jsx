import "./navigation.styles.scss";

import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";
import logoBubble from "../../assets/navbar/logo-bubble-mobile.png";
import logo from "../../assets/navbar/Logo.png";
import toggleBubble from "../../assets/navbar/navbar-toggle-bubble.png";

import { useState } from "react";

import { NavLink } from "react-router-dom";
import NavigationLink from "./navigation-links/navigation-link.component";

const Navigation = () => {
  const [navbarToggled, toggleNavbar] = useState(false);

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleNavToggle = () => {
    const navigationContentContainer = document.querySelector(
      ".navigation-content-container"
    );
    const navLinksContainer = document.querySelector(".nav-links-container");
    const navLinkStyle = getComputedStyle(navLinksContainer);
    const bubbleSlider = document.querySelector(".nav-toggle-bubble");

    toggleNavbar(!navbarToggled);

    if (navLinkStyle.display === "none") {
      navigationContentContainer.classList.add("toggled");
      bubbleSlider.classList.add("toggle-slide-in");
      bubbleSlider.classList.remove("toggle-slide-out");
    } else {
      navigationContentContainer.classList.remove("toggled");
      bubbleSlider.classList.add("toggle-slide-out");
      bubbleSlider.classList.remove("toggle-slide-in");
    }

    handleNavLinkPop();
  };

  const handleNavLinkPop = () => {
    const navLinksContainer = document.querySelector(".nav-links-container");
    const navLinkContainer = document.querySelectorAll(".navlink-container");
    const navLinksContainerStyle = getComputedStyle(navLinksContainer);
    const navItemBubble = document.querySelectorAll(".navlink-bubble");

    if (navLinksContainerStyle.display === "none") {
      popIn();
    } else {
      popOut();
    }

    async function popIn() {
      navLinksContainer.style.display = "flex";
      for (var i = 0; i < 3; i++) {
        await timer(500);
        navItemBubble[i].classList.remove("pop-out");
        navItemBubble[i].classList.add("pop-in");
        navLinkContainer[i].style.display = "flex";
      }
    }

    async function popOut() {
      for (var i = 0; i < 3; i++) {
        navItemBubble[i].classList.remove("pop-in");
        navItemBubble[i].classList.add("pop-out");
      }
      await timer(750);
      navLinkContainer[0].style.display = "none";
      navLinkContainer[1].style.display = "none";
      navLinkContainer[2].style.display = "none";

      navLinksContainer.style.display = "none";
    }
  };

  return (
    <div className="navigation-container">
      <NavLink className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <img src={logoBubble} alt="" className="logo-bubble" />
      </NavLink>
      <div className="navigation-content-container">
        <img
          className="mobile-navbar-icon"
          alt="open mobile menu"
          onClick={() => handleNavToggle()}
          src={navbarToggled ? closeIcon : hamburger}
        />
        <img src={toggleBubble} alt="" className="nav-toggle-bubble" />
        <div className="nav-links-container">
          <NavigationLink name="Home" />
          <NavigationLink name="About Me" />
          <NavigationLink name="Projects" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
