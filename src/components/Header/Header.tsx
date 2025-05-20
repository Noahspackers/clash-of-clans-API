import "./Header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Header {}
const endzone = require("../../assets/2fb5e00d7167b1b4cceebf30523b22de.png");
const Header: React.FC<Header> = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>
      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* Menu */}
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {/* Close button inside the overlay */}
        <button
          className={`close-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          ✕
        </button>
        <ul>
          <li>
            <a href="#about-us">Über uns</a>
          </li>
          <li>
            <a href="#clans">Meet the Family</a>
          </li>
          <li id="endzoneLink">
            <a href="">Endzone</a>
            <p>– Family –</p>
          </li>
          <li>
            <a href="#raid-weekend">Raid-Weekend</a>
          </li>
          <li>
            <a href="#rules">Regeln</a>
          </li>
          <li>
            <a href="#join-us">Join us</a>
          </li>
        </ul>
      </nav>

      <nav className="desktop">
        <ul>
          <li>
            <a href="#about-us">Über uns</a>
          </li>
          <li>
            <a href="#clans">Meet the Family</a>
          </li>
          <li id="endzoneLink">
            <a href="">Endzone</a>
            <p>– Family –</p>
          </li>
          {/* <li>
            <Link to="/stats">Statistiken</Link>
          </li> */}
          <li>
            <a href="#raid-weekend">Raid-Weekend</a>
          </li>
          <li>
            <a href="#rules">Regeln</a>
          </li>
          <li>
            <a href="#join-us">Join us</a>
          </li>
        </ul>
      </nav>
      <div className="HeaderContent">
        <div className="HeaderContent__left">
          <h1>Endzone</h1>
          <p id="subline">Clash of Clans Family</p>
          <br />
          <span>
            Schließe dich den Besten an und erlebe epische Abenteuer in unserer
            Clan-Familie!
          </span>
          <div>
            <button>
              <a href="https://discord.com/invite/PZtZ4Pu6a4" target="_blank">
                Join our Discord
              </a>
            </button>
            <button>
              <a href="#clans">Meet the Family</a>
            </button>
          </div>
        </div>
        <div className="HeaderContent__right">
          <img src={endzone} alt="Endzone" />
        </div>
      </div>
      {/* <div className="hamburger-wrapper">
        {" "}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div
            className={classNames("bar", { bar1: true, open: isOpen })}
          ></div>
          <div
            className={classNames("bar", { bar2: true, open: isOpen })}
          ></div>
          <div
            className={classNames("bar", { bar3: true, open: isOpen })}
          ></div>
        </div>
        <nav className={`hamburger-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <a onClick={handleLinkClick} href="#">
              Home
            </a>
            <a onClick={handleLinkClick} href="#server">
              Discord
            </a>
            <a onClick={handleLinkClick} href="#whereToGo">
              Clanübersicht
            </a>
            <a onClick={handleLinkClick} href="#who">
              Wer wir sind
            </a>
            <a onClick={handleLinkClick} href="#how">
              Regeln
            </a>
            {/* <a onClick={() => close()} href="#forTheNerds">
              Statistiken
            </a> 
          </ul>
        </nav>
      </div>
    */}
    </div>
  );
};

export default Header;
