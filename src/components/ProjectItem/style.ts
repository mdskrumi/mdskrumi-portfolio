import styled from "styled-components";

// export const name = styled.div`
//   @media (max-width: 800px) {
//   }
// `;

export const ProjectContentContainerDiv = styled.div`
  align-items: center;
  display: block;
  justify-content: center;
  padding-top: 20px;
  width: 45%;

  @media (max-width: 800px) {
    align-items: center;
    display: block;
    justify-content: center;
    padding-top: 20px;
    width: 100%;
  }
`;

export const ProjectContentContainerTitleDiv = styled.div`
  padding-bottom: 2vh;
  font-size: 22px;

  @media (max-width: 800px) {
    padding-bottom: 2vh;
    font-size: 18px;
  }
`;

export const ProjectDescriptionDiv = styled.div`
  padding: 5px 0px 25px 0px;
  text-align: justify;
`;

export const ProjectImagesDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const ProjectImagesImage = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 300px;
`;

export const ProjectWatchLiveDiv = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 1;
`;

export const ProjectWatchLiveA = styled.a`
  text-decoration: none;
  color: black;
  text-shadow: 0px 0px 24px #000000, 0px 0px 24px #000000;
`;
