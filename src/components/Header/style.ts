import styled from "styled-components";

export const HeaderRootDiv = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 20px 30px 10px 20px;

  @media (max-width: 600px) {
    padding: 20px 0px 10px 0px;
  }
`;

export const HeaderLeftDiv = styled(HeaderRootDiv)`
  align-items: center;
  display: flex;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
    width: 100vw;
  }
`;

export const HeaderLeftImageDiv = styled.div`
  height: 48px;
  width: 48px;
  cursor: default;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
    width: 100vw;
    padding-bottom: 5px;
  }
`;

export const HeaderLeftImage = styled.img`
  height: 48px;
  width: 48px;
  cursor: default;
`;

export const HeaderLeftTitleDiv = styled.div`
  font-size: 24px;
  margin: 0px 0px 0px 0.75vw;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    text-shadow: 0px 0px 24px #000000, 0px 0px 24px #000000;
    font-family: "Lobster", cursive;
  }

  @media (max-width: 600px) {
    font-size: 26px;
    margin: 0px;
  }
`;

export const HeaderRightDiv = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const HeaderRightUl = styled.ul`
  align-items: center;
  display: flex;
  font-size: 18px;
  list-style: none;
  cursor: pointer;
`;

export const HeaderRightLi = styled.li`
  width: 80px;
  &:hover {
    color: #ffffff;
    text-shadow: 0px 0px 24px #000000, 0px 0px 24px #000000;
    font-family: "Lobster", cursive;
  }
`;
