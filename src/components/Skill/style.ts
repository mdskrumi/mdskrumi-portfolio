import styled from "styled-components";

export const SkillContainerDiv = styled.div`
  margin: auto;
  padding: 3vw 5vw;
  width: 70vw;
  cursor: default;

  @media (max-width: 800px) {
    margin: auto;
    padding: 1vh 2vw;
    width: 80vw;
  }

  @media (max-width: 480px) {
    margin: auto;
    padding: 1vh 2vw;
    width: 80vw;
  }
`;

export const SkillContainerTitleDiv = styled.div`
  text-align: center;
  font-size: 28px;

  @media (max-width: 800px) {
    text-align: center;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    text-align: center;
    font-size: 20px;
  }
`;

export const SkillContainerContentDiv = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5vh 0vw;
  @media (max-width: 800px) {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0vh 0vw;
  }

  @media (max-width: 480px) {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0vh 0vw;
  }
`;
