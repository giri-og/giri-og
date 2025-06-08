import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

const containerStyle = {
  height: "100vh",
  overflowY: "scroll",
  scrollSnapType: "y mandatory",
  scrollBehavior: "smooth", // smooth scrolling
};

const sectionStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  scrollSnapAlign: "start",
};

function MainPage() {
  return (
    <div style={containerStyle}> {/* <-- Parent container enabling scroll */}
      <section id="home" style={sectionStyle}><Home /></section>
      <section id="about" style={sectionStyle}><About /></section>
      <section id="projects" style={sectionStyle}><Projects /></section>
      <section id="certificates" style={sectionStyle}><Certificates /></section>
      <section id="contact" style={sectionStyle}><Contact /></section>
    </div>
  );
}

export default MainPage;
