import styled from "styled-components";

// export const name = styled.div`
//   @media (max-width: 800px) {
//   }
// `;

export const BottomTabBarDiv = styled.div`
  visibility: hidden;

  @media (max-width: 600px) {
    visibility: visible;
    background-color: #222222;
    bottom: 0;
    filter: drop-shadow(0 0 2.75rem #9d9d9d);
    position: fixed;
    margin: 0px;
    padding: 0px;
    width: 100vw;
  }
`;

export const BottomTabBarUl = styled.ul`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px 0px;
    padding: 0px;
    color: #ffffff;
    list-style: none;
  }
`;
