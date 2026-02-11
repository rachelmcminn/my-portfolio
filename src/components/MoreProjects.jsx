import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";

// TODO - only show up to 4 relevant projects - use tags to filter

export const MoreProjects = ({ currentProjectId }) => {
  // filter out the current project
  const otherProjects = projectsData.filter(
    (project) => project.id !== currentProjectId
  );

  return (
    <section className="more-projects">
      <h2 className="section-title">// view more projects</h2>
      <div className="project-grid">
        {otherProjects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </Link>
        ))}
      </div>
      <Link to="/#projects" className="view-all-link">
        View all projects →
      </Link>
    </section>
  );
};