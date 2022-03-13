import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import InfoContext from "../../contexts/info";

// Images;
import ProfileImage from "../../assets/images/logo.png";

// Style
import {
  HeaderRootDiv,
  HeaderLeftDiv,
  HeaderLeftImageDiv,
  HeaderLeftImage,
  HeaderLeftTitleDiv,
  HeaderRightDiv,
  HeaderRightUl,
  HeaderRightLi,
} from "./style";

const Header = () => {
  const infoContext = useContext(InfoContext);
  const navigate = useNavigate();

  const handleClickOnLink = (path: string) => {
    navigate(path);
  };

  return (
    <HeaderRootDiv>
      <HeaderLeftDiv>
        <HeaderLeftImageDiv>
          <HeaderLeftImage src={ProfileImage} alt="mdskrumi" loading="lazy" />
        </HeaderLeftImageDiv>
        <HeaderLeftTitleDiv onClick={() => handleClickOnLink("/")}>
          {infoContext?.infoData.name}
        </HeaderLeftTitleDiv>
      </HeaderLeftDiv>
      <HeaderRightDiv>
        <HeaderRightUl>
          <HeaderRightLi onClick={() => handleClickOnLink("/")}>
            Home
          </HeaderRightLi>

          <HeaderRightLi onClick={() => handleClickOnLink("/contact-me")}>
            Contact Me
          </HeaderRightLi>
        </HeaderRightUl>
      </HeaderRightDiv>
    </HeaderRootDiv>
  );
};

export default React.memo(Header);
