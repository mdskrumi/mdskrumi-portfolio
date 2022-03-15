import styled from "styled-components";

export const DoYouKnowDiv = styled.div`
  cursor: pointer;
  height: 64px;
  left: 20px;
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 64px;
  -webkit-transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0);
  filter: ${(props) =>
    props.theme === "dark"
      ? `drop-shadow(0 0 1.75rem #ffffff)`
      : `drop-shadow(0 0 1.75rem #000000)`};
  z-index: 10;

  @media (max-width: 800px) {
    height: 56px;
    left: 20px;
    width: 56px;
  }

  @media (max-width: 600px) {
    height: 48px;
    left: 20px;
    width: 48px;
  }

  @media (max-width: 480px) {
    height: 44px;
    left: 20px;
    width: 44px;
  }

  &:hover {
    height: 68px;
    left: 20px;
    position: absolute;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 68px;
    -webkit-transform: translate(-50%, -50%);
    filter: ${(props) =>
      props.theme === "dark"
        ? `drop-shadow(0 0 1.75rem #9d9d9d)`
        : `drop-shadow(0 0 1.75rem #1c1c1c)`};
  }
`;
