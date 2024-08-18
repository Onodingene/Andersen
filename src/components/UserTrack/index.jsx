import React from 'react';
import './UserTrack.css';
import logo from '../../assets/UserTrack.jpg';

const UserTrack = () => {
  return (
    <div className="track-form-container">
      <div className="track-form">
      <h2>Track the progress of your Report</h2>
      <img src={logo} alt="Andersen Hotline" className="logo" id= "left"/>
      </div>
      <form className="track-form">
        <label htmlFor="track-id">Enter your complaint ID number</label>
        <input type="text" id="track-id" placeholder="Report ID number" />
        <button type="submit">Track Report</button>
      </form>
    </div>
  );
};

export default UserTrack;
