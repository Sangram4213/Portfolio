import React from "react";

const ProjectCard = ({ src, link, h3, p, liveDemo }) => {
  return (
    <>
      <div className="card-container">
        <a href={link} target="_blank">
          <img className="hover" src={src} alt={`${h3} logo`} />
          <h3>{h3}</h3>
          <p>{p}</p>
        </a>
        <a
        href={liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-btn"
      >
        Live Demo
      </a>
      </div>
    </>
  );
};

export default ProjectCard;
