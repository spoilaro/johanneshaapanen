
import './App.css';
import LandingPage from "./components/LandingPage"
import Cv from "./components/CV/Cv"
import Contact from "./components/contact/Contact"
import { useRef } from "react"

function App() {

  const cvRef = useRef(null);

  const cvScroll = () => {
    cvRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="App">
        <LandingPage onCvClick={cvScroll} />
        <Cv ref={cvRef} />
        <Contact/>
    </div>
  );
}

export default App;
