
import "./lp.scss";
import LinkButton from "./buttons/LinkButton"

export default function LandingPage() {

    

    return (
        <div className="landing-container">
            <h1 className="welcome-text">Welcome</h1>
            <div className="links">
                <LinkButton link={"Contact"} />
                <LinkButton link={"CV"} />
                <LinkButton link={"Projects"} />
            </div>
        </div>
    )
}
