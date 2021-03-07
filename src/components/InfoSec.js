import React from 'react';
import "./infosec.scss";

export default function InfoSec() {
    return (
        <div className="info-sec">
            <div className={"info-stuff-container"}>
                <div className={"logos-container"}>
                    <img id="git-logo" src="https://img.icons8.com/nolan/64/github.png"/>
                    <img id="li" src="https://img.icons8.com/nolan/64/linkedin.png"/>
                    <img id="ig-logo" src="https://img.icons8.com/nolan/64/instagram-new.png"/>
                </div>
                <div className={"text-container"}>
                    <p>
                        Hi, My name is Johannes.
                        I am 21 year old student from Finland.
                        My skills include but React, Flask and Express.
                        I have mostly worked on web apps with React but I have experience in mobile developement with java too.
                    </p>
                </div>
            </div>
        </div>
    )
}
