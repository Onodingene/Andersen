import React from 'react';
import './Header.css';
import logo from '../../assets/Logo.png'; // Correct path to the logo file

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Andersen Hotline" className="logo"  onClick={handleReportClick}/>
        <br/>
        <span className="logo-text">Hotline</span>
      </div>
      <nav className="nav" >
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/faq">FAQ</a>
      </nav>
    </header>
  );
};

export default Header;
