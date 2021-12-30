import { BrowserRouter, Routes, Route } from "react-router-dom";

// Container
import Home from "./containers/Home";

// CSS
import "../src/assets/css/App.css";
import "../src/assets/css/Header.css";

function App() {
  return (
    <div className="app_wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" caseSensitive={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
