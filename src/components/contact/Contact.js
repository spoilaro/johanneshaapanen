import React, { useState, forwardRef } from 'react';
import "./contact.scss"
import LinkButton from "../buttons/LinkButton"

const Contact = forwardRef((props, ref) => {

    const [showEmail, setShowEmail] = useState(false);

    const sendEmail = () => {
        setShowEmail(true)
    }

    return (
        <div ref={ref} className="contact-page" >
            <div className="contact-container" >
                <h1>Contact me</h1>
                <h2>You can contact me via email which you can find below</h2>
                <div className="contact-button" >
                    {showEmail ? <h2>johannes.haapanen@gmail.com</h2> : <LinkButton link={"Show email"} onClick={sendEmail} />}
                </div>
            </div>
            <div className="darkenFilter" >

            </div>
        </div>
    );
})

export default Contact;
