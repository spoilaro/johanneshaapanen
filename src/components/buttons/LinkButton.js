import React from 'react'
import "./lb.scss"

export default function LinkButton(props) {
    return (
        <div>
            <h1 className="link" >{props.link}</h1>
        </div>
    )
}
