import React from "react";
import { useNavigate } from "react-router-dom";

const BottomTabBar = () => {
  const navigate = useNavigate();

  const handleClickOnLink = (path: string) => {
    navigate(path);
  };
  return (
    <div className="bottom__tab__bar">
      <ul>
        <li onClick={() => handleClickOnLink("/")}>Home</li>
        <li onClick={() => handleClickOnLink("/contact-me")}>Contact Me</li>
      </ul>
    </div>
  );
};

export default React.memo(BottomTabBar);
