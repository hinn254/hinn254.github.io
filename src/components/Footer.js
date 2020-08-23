import React from "react";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-logo">
          <img alt="logo" src="images/shamiri_logo-1-298x300.png" />
        </div>
        <div className="footer-item">
          <h2>Connect with us</h2>
          <ul>
            <li>Email: team@shamiri.institute</li>
            <li>Phone (US): +1 617 669 7297</li>
            <li>Phone (KEN): +254 756 121145</li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Get to know us</h2>
          <ul>
            <li>
              <a href="#t">Who we are</a>
            </li>
            <li>
              <a href="#t">Our leadership</a>
            </li>
            <li>
              <a href="#t">Project thrive!</a>
            </li>

            <li>
              <a href="#t">Resources & Papers</a>
            </li>

            <li>
              <a href="#t">Join Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Our Mission</h2>
          <p>
            Shamiri Institute INC, is a non-profit organization whose mission is
            to provide youths in Sub Saharan Africa, and beyond, with the tools
            that they need to improve their life outcomes.
          </p>
        </div>
      </div>
      <hr />
      <div className="bye">
        <a href="#t"> &copy; Shamiri Institute, Inc 2020 </a>
      </div>
    </footer>
  );
};

export default Footer;
