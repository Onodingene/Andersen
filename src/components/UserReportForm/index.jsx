import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserReportForm.css';
const ReportOptions = () => {
  const navigate = useNavigate();
  
  const handleFillFormClick = () => {
    navigate('/FillForm');
  };

  const handlePhoneCallClick = () => {
    navigate('/PhoneCall');
  };

  const handleEmailClick = () => {
    navigate('/Email');
  };

  const handleLocationClick = () => {
    navigate('/Location');
  };
  return (
    <div className="report-options">
      <div className="report" >
        <img src="src\assets\UserReportForm.jpg" alt="Person at a desk" className="header-image" />
        <div className='like-report'>
        <h2>How would you like to log your report?</h2>
        </div>
      </div>
      <div className="options-grid">
        <div className="option " onClick={handleFillFormClick}>
          <h3>Fill out a form</h3>
          <p>
            Easily submit a report or incident report using our user-friendly online form.
            Provide details securely and confidentially, ensuring your voice is heard. Reporting
            wrongdoing has never been simpler!
          </p>
        </div>
        <div className="option" onClick={handlePhoneCallClick}>
          <h3>Give us a phone call </h3>
          <p>
            Contact us directly by phone to report misconduct or seek assistance. Our team is
            committed to ensuring your concerns are heard and handled with the utmost confidentiality.
          </p>
        </div>
        <div className="option" onClick={handleEmailClick}>
          <h3>Send us an email</h3>
          <p>
            Reach out to us via email to report incidents or seek guidance. Your communications will
            be handled discreetly and with the highest level of privacy.
          </p>
        </div>
        <div className="option" onClick={handleLocationClick}>
          <h3>Visit our office </h3>
          <p>
            Schedule a confidential meeting at our office to discuss any ethical concerns or
            misconduct you wish to report. We provide a secure and supportive environment for whistleblowers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReportOptions;
