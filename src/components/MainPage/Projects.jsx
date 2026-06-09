import ProjectCard from "../ProjectCard.jsx";
import { projectsData } from "../../data/projects.js";

export const Projects = () => {
  return (
    <section id="projects" className="content-section">
      <div>
        <h1 className="section-title">// projects</h1>
        <div className="project-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              role={project.role}
              description={project.description}
              builtWith={project.builtWith}
              githubRepoURL={project.githubRepoURL}
              figmaURL={project.figmaURL}
              liveURL={project.liveURL}
              appleStoreURL={project.appleStoreURL}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
