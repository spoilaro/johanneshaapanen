
import "./lp.scss";
import LinkButton from "./buttons/LinkButton"
import gitlogo from '../assets/github-icon.png'
import linkedinlogo from '../assets/li-icon2.png'

export default function LandingPage() {

    

    return (
        <div className="landing-container">
            <h1 className="welcome-text">Welcome</h1>
            <div className="links">
                <LinkButton link={"Contact"} />
                <LinkButton link={"CV"} />
                <LinkButton link={"Projects"} />
            </div>
            <div className="media-links" >
                <img src={gitlogo} />
                <img src={linkedinlogo} />
            </div>
        </div>
    )
}
