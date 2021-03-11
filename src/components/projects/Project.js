import React from 'react';
import LinkButton from "../buttons/LinkButton"
import "./project.scss"

const Project = () => {
    return (
        <div>
            <div className="project-container" >
                <h1>PlaceHolder</h1>
                <img/>
                <div className="info-container" >
                    <p>
                        dasfkjhsjdakhfjkhsdajkhfkjhasdkjhfhsdkjh kfsd kjfdhs kjfhskjadh fkjsh dkfhskdhf sdhaf ldaskjhfk jhsadkf hskjdh fkjshdakj fhkjahd fhdakshfkj hsdkj 
                    </p>
                    <div className="button-container" >
                        <LinkButton/>
                        <LinkButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
