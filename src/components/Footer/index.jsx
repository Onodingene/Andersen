import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h3>Menu</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="column">
        <h3>Contact Us</h3>
        <p>0800-007-7325
        <p>hotline@ng.Andersen.com</p>
        47 Glover Rd, Ikoyi, Lagos</p>
      </div>
      
      <div className="column">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/andersenng/" target="_blank" rel="noopener noreferrer">
            <p className="fab fa-linkedin"></p> LinkedIn
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FAndersenNigeria%2F" target="_blank" rel="noopener noreferrer">
            <p className="fab fa-twitter"></p> Twitter
          </a>
          <a href="https://www.facebook.com/andersenng/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
            <p className="fab fa-facebook"></p> Facebook
          </a>
          <a href="https://www.youtube.com/@anderseninnigeria7420" target="_blank" rel="noopener noreferrer">
            <p className="fab fa-youtube"></p> YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
