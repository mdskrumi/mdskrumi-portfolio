import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ref, onValue } from "firebase/database";

// Context
import InfoContext from "./contexts/info";

// Container
import Home from "./containers/Home";
import ContactMe from "./containers/ContactMe";

// Custom Component
import DoYouKnow from "./components/DoYouKnow/index";
import SplashScreen from "./components/SplashScreen/index";
import BottomTabBar from "./components/BottomTabBar/index";
import Footer from "./components/Footer";

// Firebase
import { database } from "./firebase/index";

// CSS
import "../src/assets/css/App.css";
import "../src/assets/css/SplashScreen.css";
import "../src/assets/css/Modal.css";
import "../src/assets/css/Header.css";
import "../src/assets/css/BottomTabBar.css";
import "../src/assets/css/Intro.css";
import "../src/assets/css/DoYouKnow.css";
import "../src/assets/css/Skill.css";
import "../src/assets/css/Project.css";
import "../src/assets/css/ContactMe.css";
import "../src/assets/css/Footer.css";

function App() {
  const infoContext = useContext(InfoContext);
  const [showedSplashScreen, setShowedSplashScreen] = useState(
    sessionStorage.getItem("splash") || "not showed"
  );
  const [splashScreenDuration, setSplashScreenDuration] =
    useState<number>(3500);

  useEffect(() => {
    const splashDurationRef = ref(database, "splash-duration/");
    onValue(splashDurationRef, (snapshot) => {
      const data = snapshot.val();
      setSplashScreenDuration(data);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("splash", "showed");
      setShowedSplashScreen("showed");
    }, splashScreenDuration + 2500);
    return () => clearTimeout(timer);
  }, [showedSplashScreen, splashScreenDuration]);

  useEffect(() => {
    const infoRef = ref(database, "info/");
    onValue(infoRef, (snapshot) => {
      const data = snapshot.val();
      infoContext?.setInfoData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showedSplashScreen !== "showed" ? (
        <SplashScreen duration={splashScreenDuration} />
      ) : (
        <div className="app_wrapper">
          <DoYouKnow />
          <BrowserRouter>
            <Routes>
              <Route path="/" caseSensitive={true} element={<Home />} />
              <Route
                path="/contact-me"
                caseSensitive={true}
                element={<ContactMe />}
              />
            </Routes>
            <BottomTabBar />
          </BrowserRouter>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
