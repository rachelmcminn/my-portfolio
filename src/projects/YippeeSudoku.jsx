import React from "react";
import { MoreProjects } from "../components/MoreProjects";

export const YippeeSudoku = () => {

    return (
        <div id="project-page" className="content-section">
           <h1 className="section-title">this is the sudoku page</h1>

            <p>
                Overview
            </p>
        
        <MoreProjects currentProjectId='yippee-sudoku' /> 
        </div>
    )

    

}