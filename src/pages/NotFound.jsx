import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFound;
