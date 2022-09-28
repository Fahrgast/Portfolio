import "./navigation.styles.scss";

import hamburger from "../../assets/shared/navbar/icon-hamburger.svg";
import closeIcon from "../../assets/shared/navbar/icon-close.svg";
import logoBubble from "../../assets/shared/navbar/logo-bubble.png";
import logo from "../../assets/shared/navbar/Logo.png";
import toggleBubble from "../../assets/shared/navbar/navbar-toggle-bubble.png";

import { useState } from "react";

import { NavLink } from "react-router-dom";
import NavigationLink from "./navigation-links/navigation-link.component";

const Navigation = () => {
  // Keeping track of the mobile navbar status
  const [navbarToggled, toggleNavbar] = useState(false);

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  // Handling Navbar expand / hide for after hamburger got clicked
  const handleNavToggle = () => {
    const navLinksContainer = document.querySelector(".nav-links-container");
    const navLinkStyle = getComputedStyle(navLinksContainer);
    const bubbleSlider = document.querySelector(".nav-toggle-bubble");

    toggleNavbar(!navbarToggled);

    if (navLinkStyle.display === "none") {
      bubbleSlider.classList.add("toggle-slide-in");
      bubbleSlider.classList.remove("toggle-slide-out");
    } else {
      bubbleSlider.classList.add("toggle-slide-out");
      bubbleSlider.classList.remove("toggle-slide-in");
    }

    handleNavLinkPop();
  };

  // handle the display of the mobile navlinks and their bubbles
  const handleNavLinkPop = () => {
    const navigationContentContainer = document.querySelector(
      ".navigation-content-container"
    );
    const navLinksContainer = document.querySelector(".nav-links-container");
    const navLinkContainer = document.querySelectorAll(".navlink-container");
    const navLinksContainerStyle = getComputedStyle(navLinksContainer);
    const navItemBubble = document.querySelectorAll(".svg-link-bubble");

    const overlay = document.querySelector(".overlay");

    // When nav gets toggled -> show mobile navbar - else hide it
    if (navLinksContainerStyle.display === "none") {
      popIn();
    } else {
      popOut();
    }

    // Pop in Animation of the Navlinks on mobile
    async function popIn() {
      navLinksContainer.style.display = "flex";
      navigationContentContainer.classList.add("toggled");
      overlay.classList.add("overlay-toggled");

      for (var i = 0; i < 3; i++) {
        await timer(600);
        navItemBubble[i].classList.remove("pop-out");
        navItemBubble[i].classList.add("pop-in");
        navLinkContainer[i].style.display = "flex";
      }
    }

    // Pop Out Animation of the Navlinks on mobile
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
      navigationContentContainer.classList.remove("toggled");
      overlay.classList.remove("overlay-toggled");
    }
  };

  return (
    <div className="wrapper">
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
            <NavigationLink name="Home" index={0} />
            <NavigationLink name="About Me" index={1} />
            <NavigationLink name="Projects" index={2} />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Navigation;
