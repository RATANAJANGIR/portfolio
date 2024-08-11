import React from 'react';
import './About.css';
import profilePic from '../assets/profile2.jpg'; // Ensure this is the correct path

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-info">
          <h2>About Me</h2>
          <p>
            I am a passionate and dedicated software engineer with experience in designing, developing, and deploying complex applications. My background includes working with a diverse range of technologies and frameworks, allowing me to adapt and excel in various technical environments.
            Academically, I hold a BTech in Biotechnology Engineering from indian institute of technology Guwahati (Assam).
          </p>
          <h3>Tech Stacks I Worked On</h3>
          <ul>
            <li>React</li>
            <li>NestJS</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Golang</li>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>SQL/NoSQL Databases</li>
            <li>Keycloak Authentication/Authorization</li>
            <li>Azure Cloud</li>
            <li>PagerDuty Monitoring</li>
          </ul>
        </div>
        <div className="about-photo">
          <img src={profilePic} alt="Profile" />
        </div>        
      </div>
    </section>
  );
};

export default About;
