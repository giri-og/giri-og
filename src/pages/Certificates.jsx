import React from "react";
import certificates from "../data/Certificates";
import CertificateCard from "../components/CertificateCard";

const Certificates = () => (
  <>
    {/* Futuristic background animation - once per page */}
    <div className="tech-lines-bg">
      <div className="glow-cube"></div>
      <div className="glow-circle"></div>
    </div>

    <div className="certificates-page">
      {/* Section Title */}
      <h2 className="section-title">CERTIFICATES</h2>

      {/* Cards Grid */}
      <div className="certificates-grid">
        {certificates.map((cert, i) => (
          <CertificateCard key={i} {...cert} />
        ))}
      </div>
    </div>
  </>
);

export default Certificates;
