import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    {
      question: "Why should I submit a report?",
      answer: "Submitting a report is crucial because fraudulent or unethical activities may have repercussions that directly or indirectly impact you. Such activities can result in the loss of resources and customers for businesses, ultimately affecting the work environment and the business's continuity, depending on the circumstances."
    },
    {
      question: "Will I be identifiable through my phone number or email address when I submit a report?",
      answer: "Submitting a report is crucial because fraudulent or unethical activities may have repercussions that directly or indirectly impact you. Such activities can result in the loss of resources and customers for businesses, ultimately affecting the work environment and the business's continuity, depending on the circumstances."
    },
    {
      question: "How can I be certain that my identity will remain confidential?",
      answer: "Your identity is safeguarded through multiple measures. Firstly, our systems do not reveal your phone number to Andersen Hotline due to the absence of Caller ID technology. Furthermore, you are not obligated to provide your name or any personal details unless they are deemed essential for the investigation of a report. In such instances, your explicit consent will be sought before disclosing your identity to the recipients of our report regarding your complaint."
    },
    {
      question: "What should I do with the Reference Number provided after submitting a report?",
      answer: "Submitting a report is crucial because fraudulent or unethical activities may have repercussions that directly or indirectly impact you. Such activities can result in the loss of resources and customers for businesses, ultimately affecting the work environment and the business's continuity, depending on the circumstances."
    },
    {
      question: "How can I be confident in the effectiveness of reporting via the Andersen Hotline?",
      answer: "The Andersen Hotline is deeply committed to upholding best-in-class standards and delivering results for our clients. We are dedicated to ensuring the continued success of this service. Reports submitted through the Andersen Hotline are promptly relayed to the client organization to be meticulously investigated. A whistleblower can always follow up their report as long as the unique reference number associated with the complaint is provided."
    },
    {
      question: "Can I receive a specific timeline for the resolution of my Report?",
      answer: "The Andersen Hotline offers an independent whistleblowing service, providing a safe and secure channel for individuals to report unethical practices and concerns within their work environment to the relevant management and board of directors. As a result, the investigation and feedback process will be initiated promptly upon receipt of the report, and updates will be provided to whistleblowers as soon as information is received from the organization involved."
    },
    {
      question: "Will the Client be able to listen to recordings of my call to the Andersen Hotline?",
      answer: "No, they will not. Protecting your anonymity and safety is our top priority. The client will only receive a carefully worded report from the Andersen Hotline, ensuring your identity remains confidential."
    }
  ];

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleOpen(index)}>
            {faq.question}
          </div>
          {open === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
