import Icon from "./Icon";

const ProjectCard = ({
  title,
  role,
  description,
  builtWith,
  githubRepoURL,
  figmaURL,
  liveURL,
  appleStoreURL,
}) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <div>
          <div className="links-flex">
            <Icon
              icon="fa-solid fa-folder"
              style={{ fontSize: "30px", color: "#FECEF1" }}
            />
            <div>
              <div className="project-card-links">
                {githubRepoURL && (
                  <a href={githubRepoURL} target="_blank" rel="noreferrer">
                    <Icon
                      icon="fa-brands fa-github"
                      style={{ fontSize: "28px" }}
                      className="icons-card-links"
                    />
                  </a>
                )}
                {figmaURL && figmaURL !== "null" && (
                  <a href={figmaURL} target="_blank" rel="noreferrer">
                    <Icon
                      icon="fa-brands fa-figma"
                      style={{ fontSize: "26px" }}
                      className="icons-card-links"
                    />
                  </a>
                )}
                {liveURL && (
                  <a href={liveURL} target="_blank" rel="noreferrer">
                    <Icon
                      icon="fa-solid fa-arrow-up-right-from-square"
                      style={{ fontSize: "24px" }}
                      className="icons-card-links"
                    />
                  </a>
                )}
                {appleStoreURL && (
                  <a href={appleStoreURL} target="_blank" rel="noreferrer">
                    <Icon
                      icon="fa-brands fa-app-store"
                      style={{ fontSize: "28px" }}
                      className="icons-card-links"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="project-card-title">{title}</div>
          <div className="project-card-role">{role}</div>
          <div className="project-card-description">{description}</div>
        </div>

        {builtWith && builtWith.length > 0 && (
          <div className="project-card-tags">
            {builtWith.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
