import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/My Logo.jpg";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="desktop-view">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav-menu">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
        <div className="CV">
          <a
            href="https://drive.google.com/file/d/1Ao7NYiHL_nPVen2CCEqe2ELrHt4hm402/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            Get My Resume
          </a>
        </div>
      </div>

      <button type="button" onClick={toggleMenu} className="menu-icon">
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>
      {showMenu && (
        <nav className="nav-menu-mob">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
