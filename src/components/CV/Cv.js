import React, { forwardRef } from 'react';
import LinkButton from '../buttons/LinkButton'
import cvsc from '../../assets/cvsc.png'
import "./cv.scss"

const Cv = forwardRef((props, ref) => {

    const cvLink = "https://drive.google.com/file/d/1YaXKpL_98Nu7iShgW56UcPRnC4SjFy47/view?usp=sharing"

    const loadCv = () => {
        window.open(cvLink);
    }

    return (
        <div>
            <div ref={ref} className="cv-container">
                <img alt="Cv" id="cvimg" src={cvsc} />
                <LinkButton onClick={loadCv} link={"View CV in Google Drive"} />
            </div>
        </div>
    );
}
)

export default Cv;
