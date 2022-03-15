import React from "react";
import { useNavigate } from "react-router-dom";

//styles

import { BottomTabBarDiv, BottomTabBarUl } from "./style";

const BottomTabBar = () => {
  const navigate = useNavigate();

  const handleClickOnLink = (path: string) => {
    navigate(path);
  };
  return (
    <BottomTabBarDiv>
      <BottomTabBarUl>
        <li onClick={() => handleClickOnLink("/")}>Home</li>
        <li onClick={() => handleClickOnLink("/contact-me")}>Contact Me</li>
      </BottomTabBarUl>
    </BottomTabBarDiv>
  );
};

export default React.memo(BottomTabBar);
