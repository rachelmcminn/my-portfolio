import React from "react";
import { MoreProjects } from "../components/MoreProjects";
import { projectsData } from "../data/projects";


export const Gremlinizer = () => {
    const project = projectsData.find(p => p.id === 'gremlinizer');

    return (
        <div id="project-page" className="content-section">
           <h1 className="section-title">{project?.title}</h1>
           <p>{project?.description}</p>

         

        <MoreProjects currentProjectId='gremlinizer' /> 
        </div>
    )

    

}