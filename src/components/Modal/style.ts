import styled from "styled-components";

// export const name = styled.div`
//   @media (max-width: 800px) {
//   }
// `;

export const ModalBodyDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.75);
  cursor: url("../images/exit.png"), auto;
`;

export const ModalContentDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
