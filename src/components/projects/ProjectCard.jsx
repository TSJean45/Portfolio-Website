import React from "react";
import "./projects.scss";

const ProjectCard = ({ project }) => {
    const { title, description, techStack, imageUrl } = project;
  
    return (
      <div className="project-card">
        <div className="image-container">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="details">
          <div className="content">
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="chip">{tech}</span>
              ))}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="footer">
            <button className="button primary">View Details</button>
            <button className="button secondary">Visit Site</button>
          </div>
        </div>
      </div>
    );
  };

export default ProjectCard;
