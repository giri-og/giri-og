import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/Projects';
import '../App.css'; // for your grid layout and styles

function Projects() {
  return (
    <div className="projects-page">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid-style">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
