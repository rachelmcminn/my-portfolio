import React from "react";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="project-content">
        <div className="project-card-img"></div>
        <div className="project-card-title">{title}</div>
        <div className="project-card-description">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
