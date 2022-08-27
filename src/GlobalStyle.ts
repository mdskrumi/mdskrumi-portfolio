import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  background-color: ${(props) =>
    props.theme === "dark" ? "#1e1e1e" : "#E3E3E3"};
  margin: 0px;
  padding: 0px;
  max-width: 100vw;
  scroll-behavior: smooth;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

img {
  width: 100%;
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #222222;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #222222;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #222222;
}
`;

export const AppWrapper = styled.div`
  background-color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#121916";
      case "light":
        return "#b4b4b4";
    }
  }};
  color: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "#ffffff";
      case "light":
        return "#000000";
    }
  }};
  font-family: monospace, "Courier New", Courier;
  margin: auto;
  max-width: 1920px;
  min-height: 100vh;
  text-shadow: ${(props) => {
    switch (props.theme) {
      case "dark":
        return "0px 0px 24px #000000, 0px 0px 24px #000000, 0px 0px 24px #000000";
      case "light":
        return "0px 0px 24px #ffffff, 0px 0px 24px #ffffff, 0px 0px 24px #ffffff";
    }
  }};
`;

export default GlobalStyle;
