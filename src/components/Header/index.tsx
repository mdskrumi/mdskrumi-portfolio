import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import InfoContext from "../../contexts/info";
import ThemeContext from "../../contexts/theme";

// Images;
import ProfileImage from "../../assets/images/logo.png";
import ProfileImagedark from "../../assets/images/logo-dark.png";

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
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleClickOnLink = (path: string) => {
    navigate(path);
  };

  return (
    <HeaderRootDiv>
      <HeaderLeftDiv>
        <HeaderLeftImageDiv>
          <HeaderLeftImage
            src={theme === "dark" ? ProfileImage : ProfileImagedark}
            alt="mdskrumi"
            loading="lazy"
          />
        </HeaderLeftImageDiv>
        <HeaderLeftTitleDiv
          theme={theme}
          onClick={() => handleClickOnLink("/")}
        >
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
