
import './App.css';
import LandingPage from "./components/LandingPage"
import InfoSec from "./components/InfoSec"
import { useState, useEffect } from "react"
import { useSpring, animated} from "react-spring"

function App() {

  return (
    <div className="App">
        <LandingPage/>
        <InfoSec/>
    </div>
  );
}

export default App;
