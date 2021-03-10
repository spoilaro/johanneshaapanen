
import './App.css';
import LandingPage from "./components/LandingPage"
import Cv from "./components/CV/Cv"
import Contact from "./components/contact/Contact"
import { useRef } from "react"

function App() {

  const cvRef = useRef(null);
  const contactRef = useRef(null);

  const cvScroll = () => {
    cvRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const contactScroll = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
        <LandingPage onCvClick={cvScroll} onContactClick={contactScroll} />
        <Cv ref={cvRef} />
        <Contact ref={contactRef} />
    </div>
  );
}

export default App;
