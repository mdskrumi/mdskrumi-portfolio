import styled from "styled-components";

export const SkillContentContainerDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
  width: 50%;

  @media (max-width: 800px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    width: 50%;
  }

  @media (max-width: 480px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    width: 100%;
  }
`;

export const SkillImageDiv = styled.div`
  width: 150px;
  height: 150px;
  margin: 30px 10px;

  @media (max-width: 800px) {
    width: 75px;
    height: 75px;
    margin: 20px 5px;
  }

  @media (max-width: 480px) {
    width: 75px;
    height: 75px;
    margin: 20px 5px;
  }
`;

export const SkillDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
