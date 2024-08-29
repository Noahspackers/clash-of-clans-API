import "./Header.scss";
import React, { useState } from "react";

interface Header {}
const endzone = require("../../assets/2fb5e00d7167b1b4cceebf30523b22de.png");
const Header: React.FC<Header> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleLinkClick = () => {
    const newScrollHeight = scrollHeight + 120;
    setScrollHeight(newScrollHeight);
    setIsOpen(!isOpen);
    console.log(newScrollHeight);
  };

  return (
    <div className="header">
      <nav className="desktop">
        <ul>
          <li>
            <a href="">Über uns</a>
          </li>{" "}
          <li>
            <a href="">Meet the Family</a>
          </li>
          <li id="endzoneLink">
            <a href="">Endzone</a>
            <p>– Family –</p>
          </li>
          <li>
            <a href="">Regeln</a>
          </li>
          <li>
            <a href="">Join us</a>
          </li>
        </ul>
      </nav>
      <div className="HeaderContent">
        <div className="HeaderContent__left">
          <h1>Endzone</h1>
          <p id="subline">Clash of Clash Family</p>
          <br />
          <span>
            Schließe dich den Besten an und erlebe epische Abenteuer in unserer
            Clan-Familie!
          </span>
          <div>
            <button>Join our Discord</button>
            <button>Meet the Family</button>{" "}
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
