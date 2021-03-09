import React, { useRef, forwardRef } from 'react';
import cvsc from '../../assets/cvsc.png'
import "./cv.scss"

const Cv = forwardRef((props, ref) => {

    return (
        <div>
            <div ref={ref} className="cv-container">
                <img alt="Image of Cv" id="cvimg" src={cvsc} />
            </div>
        </div>
    );
}
)

export default Cv;
