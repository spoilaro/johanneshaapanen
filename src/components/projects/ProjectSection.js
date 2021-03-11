import React from 'react';
import Project from "./Project"
import "./projectsection.scss"

const ProjectSection = () => {
    return (
        <div>
            <div className="projects-container" >
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    );
}

export default ProjectSection;
