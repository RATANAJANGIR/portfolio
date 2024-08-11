import React from 'react';
import './Resume.css';
import resume from '../assets/resume.pdf';

const Resume = () => {
  return (
    <section className="resume" id="resume">
    <div className="resume-content">
        <h2>Resume</h2>
        <iframe 
          src={resume} 
          title="Resume" 
          width="100%" 
          height="1000px" 
          style={{ border: 'none' }}
        />
    </div>
  </section>
  );
};

export default Resume;