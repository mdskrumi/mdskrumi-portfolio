import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ref, onValue } from "firebase/database";

// Context
import InfoContext from "./contexts/info";
import SplashContext from "./contexts/splash";

// Container
import SplashScreen from "./containers/SplashScreen";
import Home from "./containers/Home";
import ContactMe from "./containers/ContactMe";

// Custom Component
import DoYouKnow from "./components/DoYouKnow/index";
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
  const splashContext = useContext(SplashContext);

  useEffect(() => {
    const infoRef = ref(database, "info/");
    onValue(infoRef, (snapshot) => {
      const data = snapshot.val();
      infoContext?.setInfoData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app_wrapper">
      <DoYouKnow />
      <BrowserRouter>
        <Routes>
          {!splashContext?.isSplashShown ? (
            <Route path="/" caseSensitive={true} element={<SplashScreen />} />
          ) : (
            <>
              <Route path="/" caseSensitive={true} element={<Home />} />
              <Route
                path="/contact-me"
                caseSensitive={true}
                element={<ContactMe />}
              />
            </>
          )}
        </Routes>
        <BottomTabBar />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
