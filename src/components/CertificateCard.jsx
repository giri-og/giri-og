import React from "react";
import "../App.css";

const CertificateCard = ({ title, image, link }) => {
  return (
    <div className="certificate-card">
      <img src={image} alt={title} className="certificate-image" />
      <h3 className="certificate-title">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className="certificate-button">
        View Certificate
      </a>
    </div>
  );
};

export default CertificateCard;
