import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Container
import Home from "./containers/Home";
import ContactMe from "./containers/ContactMe";

// Custom Component
import DoYouKnow from "./components/DoYouKnow/index";
import SplashScreen from "./components/SplashScreen/index";

// Firebase
import "./firebase/index";

// CSS
import "../src/assets/css/App.css";
import "../src/assets/css/SplashScreen.css";
import "../src/assets/css/Modal.css";
import "../src/assets/css/Header.css";
import "../src/assets/css/Intro.css";
import "../src/assets/css/DoYouKnow.css";
import "../src/assets/css/Skill.css";
import "../src/assets/css/ContactMe.css";

function App() {
  const [showedSplashScreen, setShowedSplashScreen] = useState(
    sessionStorage.getItem("splash") || "not showed"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("splash", "showed");
      setShowedSplashScreen("showed");
    }, 5000);
    return () => clearTimeout(timer);
  }, [showedSplashScreen]);

  return (
    <>
      {showedSplashScreen !== "showed" && <SplashScreen />}
      <div className="app_wrapper">
        {showedSplashScreen === "showed" && <DoYouKnow />}
        <BrowserRouter>
          <Routes>
            <Route path="/" caseSensitive={true} element={<Home />} />
            <Route
              path="/contact-me"
              caseSensitive={true}
              element={<ContactMe />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
