import React from 'react';
import Project from "./Project"
import "./projectsection.scss"
import livingloanImg from "../../assets/livingloan_preview1.png"

const livingLoanData = {
    image: livingloanImg,
    title: "LivingLoan",
    gitLink: "https://github.com/spoilaro/livingloan",
    liveLink: "http://livingloan.herokuapp.com/"
}


const ProjectSection = () => {
    return (
        <div>
            <div className="projects-container" >
                <Project {...livingLoanData} />
                <Project/>
                <Project/>
            </div>
        </div>
    );
}

export default ProjectSection;
