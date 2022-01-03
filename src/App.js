import { BrowserRouter, Routes, Route } from "react-router-dom";

// Container
import Home from "./containers/Home";
import ContactMe from "./containers/ContactMe";

// Custom Component
import DoYouKnow from "./components/DoYouKnow/index";

// Firebase
import "./firebase/index";

// CSS
import "../src/assets/css/App.css";
import "../src/assets/css/Modal.css";
import "../src/assets/css/Header.css";
import "../src/assets/css/Intro.css";
import "../src/assets/css/DoYouKnow.css";
import "../src/assets/css/Skill.css";

function App() {
  return (
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
      </BrowserRouter>
    </div>
  );
}

export default App;
