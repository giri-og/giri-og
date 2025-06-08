import React from "react";
import "../App.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="left-panel">
        <h2>RAYI GIREESH KUMAR</h2>
        <span className="role">Web Developer</span>
        <div className="info">
          <p><strong>EMAIL</strong><br />gireeshkumarrayi@gmail.com</p>
          <p><strong>PHONE</strong><br />+91 7674877358</p>
          <p><strong>BIRTHDAY</strong><br />July 05, 2004</p>
          <p><strong>LOCATION</strong><br />
            Purushotham Nagar Colony,<br />
            Gujarathipeta, Srikakulam, Andhra Pradesh, India, 532005
          </p>
        </div>
        <div className="socials">
          <i className="fa fa-github"></i>
          <i className="fa fa-envelope"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>

      <div className="right-panel">
        <h2>About Me</h2>
        <p className="highlight-bar"></p>
        <p>
          Analytical and driven aspiring Software Engineer specializing in Artificial Intelligence and Machine Learning, 
          with strong proficiency in Python and hands-on experience in deep learning, neural networks, and computer vision. 
          Adept at designing scalable, data-driven solutions and applying ML/DL models to real-world challenges. 
          Demonstrates a solid understanding of software development principles and thrives in collaborative, agile environments.
        </p>

        <h3>What I'm Doing</h3>
        <div className="services-grid">
<div className="service-card">
  <h4>🖌️ Web Design</h4>
  <p>The most modern and high-quality design made at a professional level.</p>
</div>
          <div className="service-card">
            <h4>🎨 Designing</h4>
            <p>The most modern and high-quality design made at a professional level.</p>
          </div>
          <div className="service-card">
            <h4>📊 Data Analyst</h4>
            <p>The most accurate analysis and predictive data analysis using advanced techniques.</p>
          </div>
          <div className="service-card">
            <h4>💻 Web Development</h4>
            <p>High-quality development of sites at the professional level.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
