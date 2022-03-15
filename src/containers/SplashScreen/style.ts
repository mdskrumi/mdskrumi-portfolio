import styled from "styled-components";

interface SplashScreenMsgPrimaryDivProps {
  even: boolean;
}

export const SplashScreenDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  color: ${(props) => (props.theme === "dark" ? "#ffffff" : "#000000")};
`;

export const SplashScreenMsgPrimaryDiv = styled.div<SplashScreenMsgPrimaryDivProps>`
  padding: 10px;
  text-shadow: ${(props) =>
    props.theme === "dark"
      ? "0px 0px 24px #ffffff, 0px 0px 24px #ffffff, 0px 0px 24px #ffffff"
      : "0px 0px 24px #000000, 0px 0px 24px #000000, 0px 0px 24px #000000"};
  font-size: 48px;
  margin-left: ${(props) => (props.even ? "-10%" : "10%")};
  text-align: ${(props) => (props.even ? "left" : "right")};

  @media (max-width: 800px) {
    font-size: 36px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const SplashScreenMsgSecondaryDiv = styled.div`
  width: 100vw;
  text-shadow: ${(props) =>
    props.theme === "dark"
      ? "0px 0px 24px #ffffff, 0px 0px 24px #ffffff, 0px 0px 24px #ffffff"
      : "0px 0px 24px #000000, 0px 0px 24px #000000, 0px 0px 24px #000000"};
  text-align: center;
  font-size: 24px;

  @media (max-width: 800px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
