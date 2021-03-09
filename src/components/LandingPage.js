
import "./lp.scss";
import LinkButton from "./buttons/LinkButton"
import gitlogo from '../assets/github-icon.png'
import linkedinlogo from '../assets/li-icon2.png'

export default function LandingPage(props) {

    const gitUrl = "https://github.com/spoilaro";
    const liUrl = "https://www.linkedin.com/in/johannes-haapanen-ab0ba4205/"

    const goToGitHub = () => {
        window.open(gitUrl);
    }
    const goToLinkedIn = () => {
        window.open(liUrl)
    }

    return (
        <div className="landing-container">
            <h1 className="welcome-text">Welcome</h1>
            <div className="links">
                <LinkButton link={"Contact"} />
                <LinkButton onClick={props.onCvClick} link={"CV"} />
                <LinkButton link={"Projects"} />
            </div>
            <div className="media-links" >
                <img onClick={goToGitHub} alt="git-logo" src={gitlogo} />
                <img onClick={goToLinkedIn} alt="li-logo" src={linkedinlogo} />
            </div>
        </div>
    )
}
