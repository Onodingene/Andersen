import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <div className='aboutandersen'>
        <h1>About Andersen Hotline</h1>
        </div>
        <div className= 'about-every'>
        <p>
          Andersen Hotline provides Independent Whistleblowing Reporting Services to its clients by providing a platform to enable its internal and external stakeholders such as directors, employees, customers, members of the public, and other stakeholders to make reports anonymously and confidentially, incidents of unethical and fraudulent activities.
        </p>
        <div className="about-features">
          <div className="feature">
            <h3>Anonymous 
              reporting</h3>
          </div>
          <div className="feature">
            <h3>Independent
               & Secure Platform</h3>
          </div>
          <div className="feature">
            <h3>Fosters Integrity 
              and Accountability</h3>
          </div>
          <div className="feature">
            <h3>Empowering you 
              to effect positive change</h3>
          </div>
          </div>
        </div>
      </section>
      <section className="about-footer">
        <p>
        We place utmost importance on integrity, accountability, and transparency. Our platform offers a secure and confidential environment for individuals to voice concerns regarding fraud, misconduct, unethical behavior, breaches of company policies or possibly even illegal practices. Committed to maintaining ethical standards and fostering a culture of integrity, Andersen Hotline empowers whistleblowers to come forward and effect positive change through confidential reporting. We understand the importance of protecting the anonymity of our whistleblowers, ensuring that their identities remain confidential throughout the reporting process.
        </p>
      </section>
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <h3>01</h3>
            <p>
              The whistleblower reaches out to the Andersen Hotline via our toll-free line 
              08000HOTLINE (08000-4685463), email, or web form.
            </p>
          </div>
          <div className="step">
            <h3>02</h3>
            <p>
              The Andersen Hotline receives the complaint from the whistleblower and gathers relevant 
              information.
            </p>
          </div>
          <div className="step">
            <h3>03</h3>
            <p>
              The Andersen Hotline generates a report based on the complaint details provided. This 
              report is then forwarded to the relevant management level in your organization for 
              appropriate action based on the complaint's nature.
            </p>
          </div>
          <div className="step">
            <h3>04</h3>
            <p>
              The reports sent by the Andersen Hotline are meticulously crafted to ensure that no 
              information is included that could reveal the identity of the whistleblower.
            </p>
          </div>
          <div className="step">
            <h3>05</h3>
            <p>
              Your organization provides feedback to the Andersen Hotline based on its investigations 
              into the complaint.
            </p>
          </div>
          <div className="step">
            <h3>06</h3>
            <p>
              Andersen Hotline then provides feedback to the complainant.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
