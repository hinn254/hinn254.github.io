import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="images/shamiri-logo.png" alt="shamiri logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#tom">HOME</a>
          </li>
          <li className="nav-link">
            <a href="#today">ABOUT US</a>
          </li>
          <li className="nav-link">
            <a href="#we">WHAT WE DO</a>
          </li>
          <li className="nav-link">
            <a className="donate" href="#home">
              DONATE
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
