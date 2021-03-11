import React from 'react';
import LinkButton from "../buttons/LinkButton"
import "./project.scss"

const Project = (props) => {

    const openGit = () => {
        window.open(props.gitLink)
    }
    const openLive = () => {
        window.open(props.liveLink)
    }

    return (
        <div>
            <div className="project-container" >
                <h1>{props.title}</h1>
                <div className="image-container" >
                    <img alt="Project 1" src={props.image} />
                </div>
                <div className="info-container" >
                    <p>
                        dasfkjhsjdakhfjkhsdajkhfkjhasdkjhfhsdkjh kfsd kjfdhs kjfhskjadh fkjsh dkfhskdhf sdhaf ldaskjhfk jhsadkf hskjdh fkjshdakj fhkjahd fhdakshfkj hsdkj 
                    </p>
                    <div className="button-container" >
                        <LinkButton onClick={openGit} link={"On GitHub"} />
                        <LinkButton onClick={openLive} link={"See Live"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
