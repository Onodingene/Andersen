import React from 'react';
import './FillForm.css'
import logo from '../../assets/FillForm.jpg';
 // Assuming you have a CSS file for styling

const Form = () => {
  return (
    <div className="content">
      <h1>We prioritize the security and confidentiality of your personal information.</h1>
      <div className="form-wrapper">
        <img src={logo} alt="People in meeting" className="header-image" />
        <form className="incident-form">
          <h2>Fill out the form with details about the incident</h2>
          <div className="form-group">
            <label>Enter your name (optional)</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Enter your email</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>Name of organization</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Location of incident/address</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Incident type</label>
            <input type="text" placeholder="HR related issues e.g. sexual harassment, bullying" />
          </div>
          <div className="form-group">
            <label>Date of incident</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>List the names of people involved in this incident (separate with commas)</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>
              Please provide a detailed description of the incident, including specific times, dates, locations, and names where possible. Outline who was involved, what happened, when it occurred, and how the incident unfolded.
            </label>
            <textarea rows="6"></textarea>
          </div>
          <div className="form-group">
            <label>Upload additional information e.g. documents, video, audio, images</label>
            <input type="file" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
