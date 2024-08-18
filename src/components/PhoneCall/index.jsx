import React from 'react';
import './PhoneCall.css';
import logo from '../../assets/PhoneCall.jpg';

const Phone = () => {
  return (
    <div className="container">
      <div className="phone">
        <img src={logo} alt="People in meeting" className="header-pics" />
        <div className='words'>
        <p className="phoneNumber">You can log your complaint by giving us a call on</p>
        <a href="tel:+2348000077325" target="_blank" rel="noopener noreferrer">+234 123 456 7890</a>
        </div>
      </div>
    </div>
  );
};

export default Phone;
