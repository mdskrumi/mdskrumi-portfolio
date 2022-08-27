import { useContext } from "react";

// Context
import ThemeContext from "./contexts/theme";

// Container
import Home from "./page/Home";

// Custom Component
import DoYouKnow from "./components/DoYouKnow/index";

// Styles
import GlobalStyle, { AppWrapper } from "./GlobalStyle";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <AppWrapper theme={theme}>
      <GlobalStyle theme={theme} />
      <DoYouKnow />
      <Home />
    </AppWrapper>
  );
}

export default App;
