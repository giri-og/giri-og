import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Rayi Gireesh Kumar. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
