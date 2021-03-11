import React, { forwardRef } from 'react';
import Project from "./Project"
import "./projectsection.scss"

import livingloanImg from "../../assets/livingloan_preview1.png"
import tennisImg from  "../../assets/tennis_preview.png"
import portfolioImg from "../../assets/portfolio_preview.png"

const livingLoanData = {
    image: livingloanImg,
    title: "LivingLoan",
    gitLink: "https://github.com/spoilaro/livingloan",
    liveLink: "http://livingloan.herokuapp.com/",
    intro: `LivingLoan is a web app that allows you to calculate the remaining student 
            loan for the current month. This project was made with React.`
}
const tennisData = {
    image: tennisImg,
    title: "Vilppulan Tennisseura",
    gitLink: "https://github.com/spoilaro/vilppulantennisseura",
    liveLink: "http://www.vilppulantennisseura.fi/",
    intro: `Vilppulan Tennisseura is a web site I made for my tennis club. 
            It was made using vanilla Html, Css and JavaScript.`
}
const portfolioData = {
    image: portfolioImg,
    title: "Johannes Haapanen site",
    gitLink: "https://github.com/spoilaro/johanneshaapanen",
    liveLink: "http://johanneshaapanen.herokuapp.com/",//TODO add link
    intro: `Web site to show what I can do. Cv and contact information can be found here. 
            It was made with React and Sass`,

}


const ProjectSection = forwardRef((props, ref) => {
    return (
        <div>
            <div ref={ref} className="projects-container" >
                <Project {...livingLoanData} />
                <Project {...tennisData} />
                <Project {...portfolioData} />
            </div>
        </div>
    );
})

export default ProjectSection;
