import React from "react";
import "./AnimatedBackground.css"; // We'll define the animations here

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <div className="glow-cube cube-1"></div>
      <div className="glow-cube cube-2"></div>
      <div className="glow-cube cube-3"></div>
      <div className="glow-circle"></div>
      {/* Add more cubes or shapes as needed */}
    </div>
  );
};

export default AnimatedBackground;
