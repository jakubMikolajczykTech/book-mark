import React, { useState, useEffect } from 'react';
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="logo-container">
        <img src="./images/logo-bookmark.svg" alt="Logo" className="header-logo" />
      </div>
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <img src="./images/icon-hamburger.svg" alt="Hamburger" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-item">FEATURES</div>
        <hr className={`nav-hr ${isMenuOpen ? 'visible' : ''}`} />
        <div className="nav-item">PRICING</div>
        <hr className={`nav-hr ${isMenuOpen ? 'visible' : ''}`} />
        <div className="nav-item">CONTACT</div>
        <hr className={`nav-hr ${isMenuOpen ? 'visible' : ''}`} />
        <div className="nav-item"><button>LOGIN</button></div>
      </nav>
    </header>
  );
};

export default Header;
