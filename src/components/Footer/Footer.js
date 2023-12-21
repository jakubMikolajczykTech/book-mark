import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="wrapper">
        <div className="footer-links">
          <img src="./images/logo-bookmark-white.svg" alt="Logo" className="footer-logo" />
          <hr />
          <a href="#">FEATURES</a>
          <hr />
          <a href="#">PRICING</a>
          <hr />
          <a href="#">CONTACT</a>
          <hr />
        </div>
        <div className="footer-social">
          <img src="./images/icon-facebook.svg" alt="" className="footer-icon" />
          <img src="./images/icon-twitter.svg" alt="" className="footer-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
