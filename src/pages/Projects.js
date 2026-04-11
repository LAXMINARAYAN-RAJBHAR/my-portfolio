import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">Portfolio Website</h3>
          <p className="project-description">
            A colorful React + Tailwind portfolio showcasing my skills.
          </p>
        </div>
        <div className="project-card">
          <h3 className="project-title">React Navbar</h3>
          <p className="project-description">
            Custom responsive navigation bar with smooth styling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
