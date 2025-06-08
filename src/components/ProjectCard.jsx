import React from 'react';
import '../App.css';

function ProjectCard({ project }) {
  return (
    <div className="info-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
