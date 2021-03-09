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
                <div id="device-info" >
                    <h2 >Your device screen is quite small so the CV can't fit here quite right. You can view the CV in Google Drive.</h2>
                </div>
                <LinkButton onClick={loadCv} link={"View CV in Google Drive"} />
            </div>
        </div>
    );
}
)

export default Cv;
