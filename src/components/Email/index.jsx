import React from 'react';
import './Email.css';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button'; // Make sure to import the Button component

const Email = () => {
  return (
    <div className="email-page">
      <div className="content">
        <div className="email-container">
          <p className="email-text">
            You can log your complaint by
            <br />
            sending us an email at
          </p>
          <EmailIcon />
          <a href="mailto:Hotline@ng.Andersen.com" target="_blank" rel="noopener noreferrer">
            <p className="email">Contact@AndersenHotline.org</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Email;
