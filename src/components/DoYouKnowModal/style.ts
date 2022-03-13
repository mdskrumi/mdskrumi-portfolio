import styled from "styled-components";

export const DoYouKnowModalDiv = styled.div`
  align-items: center;
  display: flex;
  color: #fff;
  flex-direction: column;
  font-family: "Lobster Two", cursive;
  font-weight: 400;
  justify-content: center;
  max-height: 80vh;
  max-width: 80vw;
  padding: 2px 0px;
  min-width: 300px;
  text-align: center;
  text-shadow: 0px 0px 24px #ffffff, 0px 0px 24px #ffffff, 0px 0px 24px #ffffff;
  width: 720px;
`;

export const TitleDiv = styled(DoYouKnowModalDiv)`
  font-size: 32px;
`;

export const SubTitleDiv = styled(DoYouKnowModalDiv)`
  font-size: 28px;
`;

export const YearDiv = styled(DoYouKnowModalDiv)`
  font-size: 36px;
`;

export const BodyDiv = styled(DoYouKnowModalDiv)`
  font-size: 24px;
`;

export const ModalLoadingDiv = styled.div`
  filter: drop-shadow(0 0 2rem #ffffff);
`;
