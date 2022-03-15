import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Context
import { InfoProvider } from "./contexts/info";
import { SplashProvider } from "./contexts/splash";
import { ThemeProvider } from "./contexts/theme";

ReactDOM.render(
  <React.StrictMode>
    <SplashProvider>
      <InfoProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </InfoProvider>
    </SplashProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
