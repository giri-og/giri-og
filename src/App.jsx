import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import AnimatedBackground from "./components/AnimatedBackground";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
      <TypeAnimation
        sequence={['Full Stack Developer', 1000, 'AI Explorer', 1000, 'Tech Enthusiast', 1000]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
      />
      <AnimatedBackground />
    </>
  );
}

export default App;
