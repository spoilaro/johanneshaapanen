import React from 'react';
import "./contact.scss"

const Contact = () => {
    return (
        <div>
            <div className="contact-container" >
                <div className="form-container" >
                    <form id="msg-form" >
                        <div className="input-container">
                            <label>Name</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="input-container" >
                            <label>Email</label>
                            <input type="text" id="email" />
                        </div>
                        <div className="input-container" >
                            <label>Message</label>
                            <textarea type="text" id="message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
