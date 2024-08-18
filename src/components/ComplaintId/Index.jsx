import React from 'react';
import './ReportConfirmation.css';

const ReportConfirmation = () => {
    return (
        <div className="report-container">
            <img 
                src="Andersen_Hotline.png" 
                alt="Andersen Hotline" 
                className="report-image" 
            />
            <div className="report-content">
                <h1>Your report has been logged successfully <span className="check-icon">✔️</span></h1>
                <p>Thank you for reporting your concern to Andersen Hotline. Rest assured, your complaint has been received, and will be communicated to the right level of management at your organization. Your anonymity is our priority, and every effort will be made to protect your identity throughout the process. We appreciate your trust in us and will keep you informed of any developments.</p>
                <p><strong>Your report id number is AHL-1234567890</strong></p>
                <p>Your report has been logged successfully, and a unique Complaint ID has been issued to track the progress of your complaint. Please keep this ID safe for future reference.</p>
                <p>We encourage you to check back regularly to monitor the progress of your complaint. Our team will also be in touch with you via email to provide updates and communicate any necessary information.</p>
            </div>
        </div>
    );
}

export default ReportConfirmation;
