import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Home.css'; // Import the CSS file

const handleHomePage = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate('/UserReportForm');
  };

  const handleUserTrackClick = () => {
    navigate('/UserTrack');
  };


  return (
    <div className="homepage">
      <div className="overlay">

        <h1>
          Empowering Transparency<br />
          Safeguarding Integrity
        </h1>
        <p>
          Join us in fostering a culture of accountability and ethical conduct
        </p>
        <div className="buttons">
          <button
            onClick={handleReportClick}
            className="make-report"
          >
            Make a Report
          </button>
          <button
            onClick={handleUserTrackClick}
            className="track-report"
          >
            Track a report
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
