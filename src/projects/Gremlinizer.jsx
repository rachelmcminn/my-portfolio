import React from "react";
import { MoreProjects } from "../components/MoreProjects";


export const Gremlinizer = () => {

    return (
        <div id="project-page" className="content-section">
           <h1 className="section-title">this is the gremlinizer page</h1>

         

        <MoreProjects currentProjectId='gremlinizer' /> 
        </div>
    )

    

}