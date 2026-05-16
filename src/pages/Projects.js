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
          <h3 className="project-title">
            I created a Youtube-like app that I called "ZixPlayer"
          </h3>
          <p className="project-description">
            Check this "ZixPlayer" App via this Link:{" "}
            <a href="https://laxminarayan-rajbhar.github.io/zixplayer-frontend/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here 🔗
            </a>
            {" "}— The ZixPlayer app is the desktop version of video-sharing website. It serves as a significant entertainment and
            social media platform by enabling users to view, share, search, and
            publish videos on desktops and tablets.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;