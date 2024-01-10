import "./Header.scss";
import React, { useState } from "react";

interface Header {}

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
