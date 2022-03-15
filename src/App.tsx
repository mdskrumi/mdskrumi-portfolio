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

// Styles
import { AppWrapper } from "./GlobalStyle";

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
    <AppWrapper>
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
    </AppWrapper>
  );
}

export default App;
