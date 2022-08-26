import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import ThemeContext from "./contexts/theme";

// Container
import Home from "./containers/Home";
import ContactMe from "./containers/ContactMe";

// Custom Component
import DoYouKnow from "./components/DoYouKnow/index";
import Footer from "./components/Footer";

// Styles
import GlobalStyle, { AppWrapper } from "./GlobalStyle";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <AppWrapper theme={theme}>
      <GlobalStyle theme={theme} />
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
    </AppWrapper>
  );
}

export default App;
