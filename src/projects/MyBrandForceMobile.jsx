import React from "react";
import { MoreProjects } from "../components/MoreProjects";

// remember to add app store link 

export const MyBrandForceMobile = () => {
    return (
        <div id="project-page" className="content-section">
           <h1 className="section-title">this is the mbf mobile app page</h1>

          
        <MoreProjects currentProjectId='mbf-mobile' /> 
        </div>
    )

    

}