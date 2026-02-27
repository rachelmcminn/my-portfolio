import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const ProjectCard = ({ title, role, description, builtWith, githubRepoURL, figmaURL, liveURL, appleStoreURL }) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <div className="links-flex">
           <FontAwesomeIcon icon="fa-solid fa-folder" style={{ fontSize: '30px',  }} className="icons-card-links" />   
          <div>
          <div className="project-card-links">
          {githubRepoURL && (
            <a href={githubRepoURL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-github" style={{ fontSize: '24px' }} className="icons-card-links"/>
            </a>
          )}
          {figmaURL && figmaURL !== "null" && (
            <a href={figmaURL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-figma" style={{ fontSize: '24px' }} className="icons-card-links"/>
            </a>
          )}
          {liveURL && (
            <a href={liveURL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '23px' }} className="icons-card-links"/>
            </a>
          )}
          {appleStoreURL && (
            <a href={appleStoreURL} target="_blank" rel="noreferrer">
             <FontAwesomeIcon icon="fa-brands fa-app-store" style={{ fontSize: '24px' }} className="icons-card-links"/>
            </a>
          )}
        </div>

          </div>
        </div>
      
        <div className="project-card-title">{title}</div>
        <div className="project-card-role">{role}</div>
        <div className="project-card-description">{description}</div>

        {builtWith && builtWith.length > 0 && (
          <div className="project-card-tags">
            {builtWith.map((tech) => (
              <span key={tech} className="tech-chip">{tech}</span>
            ))}
          </div>
        )}

       
      </div>
    </div>
  );
};

export default ProjectCard;