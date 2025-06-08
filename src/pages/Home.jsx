import React from "react";
import "../App.css";
import mm from '../assets/mm.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-left">
        <p className="greeting">Hi, my name is</p>
        <h1 className="name">Rayi Gireesh Kumar</h1>
        <h2 className="title">I'm a Web Developer</h2>
        <p className="description">
          Passionate about creating modern, responsive, and user-friendly web applications. 
          Specializing in front-end development with a strong foundation in back-end technologies and AI integration.
        </p>
        <a href="#contact" className="home-button">Hire Me</a>
      </div>
      <MyComponent />
      <div className="tech-lines-bg">
        <div className="glow-cube"></div>
        <div className="glow-circle"></div>
      </div>
    </div>
  );
};


function MyComponent() {
  return (
    <div className="intro-right">
      <img src={mm} alt="Profile" className="profile-img" />
    </div>
  );
}


export default Home;
