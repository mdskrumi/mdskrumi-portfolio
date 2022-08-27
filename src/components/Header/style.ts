import styled from "styled-components";

export const HeaderRootDiv = styled.div`
  position: fixed;
  height: 3rem;
  background-color: #121916;
  width: 100%;
  justify-content: space-around;
  display: flex;
  padding: 10px 0px 10px 0px;
  margin: auto;
  border-bottom: 2px #202020 solid;
  align-items: center;
`;

export const HeaderLeftDiv = styled.div`
  align-items: center;
  display: flex;
`;

export const HeaderLeftImageDiv = styled.div`
  margin-right: 1rem;
  cursor: default;
`;

export const HeaderLeftImage = styled.img`
  height: 42px;
  width: 42px;
  cursor: pointer;
`;

export const HeaderLeftTitleDiv = styled.div`
  font-size: 24px;
  cursor: pointer;
  &:hover {
    font-family: "Courier New", Courier, monospace;
  }
`;

export const HeaderRightDiv = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const HeaderRightUl = styled.ul`
  display: flex;
  list-style: none;
  cursor: pointer;

  li + li {
    margin-left: 1.5rem;
  }
`;

export const HeaderRightLi = styled.li`
  flex-shrink: 0;
  &:hover {
    color: ${(props) => {
      switch (props.theme) {
        case "dark":
          return "#ffffff";
        case "light":
          return "#000000";
      }
    }};
    font-family: "Courier New", Courier, monospace;
  }
`;

export const HeaderRightMenu = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;

export const MenuIcon = styled.img``;
