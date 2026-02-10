import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectImgJSM from "../assets/img/princess-mononok-rest.jpg"



export const Projects = () => {
  const projects = [
    {
      id: "intune-connect",
      title: "JSM Intune Connect",
      description: "Beep beep",
    },
    {
      id: "gremlinizer",
      title: "Gremlinizer",
      description: "Beep beep",
    },
    {
      id: "three",
      title: "Three",
      description: "Beep boop ",
    },
    
  ];

  return (
    <section id="projects" className="content-section">
      <div>
        <h1 className="section-title">// projects</h1>
        <div className="project-grid">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
            />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
