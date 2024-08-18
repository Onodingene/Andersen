import React from 'react';
import './Location.css';
import logo from '../../assets/Location.jpg';
import DomainIcon from '@mui/icons-material/Domain';

const LocationPage = () => {
  return (
    <div className="location-page">
      <div className="content">
      <img src={logo} alt="Andersen Hotline" className="logo" id= "left"/>
        <div className="location-container">
          <p className="location-text">
            You can make a report by dispatching/delivering to out office at
            <br />
          <a href="https://www.google.com/maps/place/Andersen+in+Nigeria/@6.4517713,3.4369468,17z/data=!3m1!4b1!4m6!3m5!1s0x103bf4c66948fff1:0x5f7919a30a0851fe!8m2!3d6.451766!4d3.4395217!16s%2Fg%2F11bwnbvm8j?entry=ttu" 
            target="_blank" 
            rel="noopener noreferrer">
            <p className="locate"></p> 47 Glover Road,Ikoyi,Lagos,Nigeria. 
          </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
