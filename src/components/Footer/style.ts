import styled from "styled-components";

// export const name = styled.div`
//   @media (max-width: 600px) {
//   }
// `;

export const FooterDiv = styled.div`
  cursor: pointer;
`;

export const FooterMenuImage = styled.img`
  background-color: #ffffff;
  filter: drop-shadow(0 0 7.5px #ffffff);
  border-radius: 24px;
  height: 48px;
  width: 48px;
  position: fixed;
  bottom: 2%;
  right: 2%;
  @media (max-width: 600px) {
    border-radius: 20px;
    height: 40px;
    width: 40px;
    position: fixed;
    bottom: 72px;
    right: 2%;
  }
`;

export const FooterHrDiv = styled.div`
  border: 1px solid #c4c4c4;
`;

export const FooterEndDiv = styled.div`
  color: #ffffff;
  padding: 15px;
  text-align: center;
  @media (max-width: 600px) {
    margin-bottom: 60px;
  }
`;
