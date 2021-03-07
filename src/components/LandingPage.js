
import "./lp.scss";
import { useSpring, animated, config } from "react-spring";

export default function LandingPage() {

    const props = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: { duration: 1000 }
    })

    const props2 = useSpring({
        from: {height: "100vh"},
        to: {height: "45vh"},
        config: {mass: 60, clamp: true},
        delay: 2000,
    })

    return (
        <animated.div style={props2} className="landing-container">
            <animated.h1 style={props}  className="welcome-text">Welcome</animated.h1>
        </animated.div>
    )
}
