import React from 'react';
import './Contact.css';
import contactPhoto from '../assets/profile1.jpg'; // Ensure this is the correct path

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-photo">
          <img src={contactPhoto} alt="Profile" />
        </div>
        <div className="contact-info">
          <h2>Contact</h2>
          <div className="contact-item">
            <h3>Software Engineer</h3>
            <p><strong>SDE1:</strong> Blackrock</p>
            <p><strong>Email:</strong> ratana.jangir@blackrock.com</p>
            <p><strong>Location:</strong> Gurgaon</p>
          </div>
          <div className="contact-item">
            <h3>Personal</h3>
            <p><strong>Hometown:</strong> Churu, Rajasthan</p>
            <p><strong>Email:</strong> ratanajangir13@gmail.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jangir12" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/RATANAJANGIR" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
          </div>         
        </div>
      </div>
    </section>
  );
};

export default Contact;
