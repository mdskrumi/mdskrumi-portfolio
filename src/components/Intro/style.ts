import styled from "styled-components";

export const IntroContainerDiv = styled.div`
  align-items: center;
  display: flex;
  cursor: default;
  justify-content: center;
  padding: 3vw 5vw;
  margin: auto;
  width: 70vw;

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 5vh 5vw 7vh 5vw;
  }
`;

export const IntroImageDiv = styled.div`
  border-radius: 200px;
  height: 50vh;
  padding: 0px 30px 0px 30px;
  max-width: 300px;
  max-height: 300px;
  min-width: 200px;
  min-height: 200px;
  width: 50vw;
  overflow: hidden;

  @media (max-width: 768px) {
    filter: brightness(100%);
    padding: 0px 10px 0px 10px;
    max-width: 150px;
    max-height: 150px;
    min-width: 100px;
    min-height: 100px;
    height: 100%;
    width: 50vw;
    overflow: hidden;
  }
`;

export const IntroDetailsDesignationsDiv = styled.div`
  font-size: 22px;
  height: 35px;

  @media (max-width: 768px) {
    font-size: 18px;
    height: 35px;
    padding: 15px 0px;
  }
`;

export const IntroDetailsNameDiv = styled.div`
  font-size: 36px;
  padding-top: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IntroDescriptionDiv = styled.div`
  font-size: 20px;
  padding-top: 3px;

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 80vw;
    margin: auto;
  }
`;

export const IntroActionsDiv = styled.div`
  display: flex;
  padding-top: 30px;

  @media (max-width: 768px) {
    display: flex;
    padding: 40px 0px;
    justify-content: center;
  }
`;

export const IntroSingleActionDiv = styled.div`
  color: #0f0f0f;
  cursor: pointer;
  text-align: left;
  font-size: 24px;
  font-family: "Lobster Two", cursive;
  text-shadow: 0px 0px 24px #ffffff, 0px 0px 24px #ffffff, 0px 0px 24px #ffffff;
  width: 200px;

  &:hover {
    color: #ffffff;
    text-shadow: 0px 0px 24px #000000, 0px 0px 24px #000000;
    font-family: "Lobster", cursive;
  }

  @media (max-width: 768px) {
    width: 200px;
    text-align: center;
    font-size: 18px;
  }
`;
