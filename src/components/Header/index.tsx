import React, { useContext } from "react";

// Contexts
import ThemeContext from "../../contexts/theme";

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
  HeaderRightMenu,
  MenuIcon,
} from "./style";

// Data
import { data } from "../../assets/data";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <HeaderRootDiv>
      <HeaderLeftDiv>
        <HeaderLeftImageDiv>
          <HeaderLeftImage src={ProfileImage} alt="mdskrumi" loading="lazy" />
        </HeaderLeftImageDiv>
        <HeaderLeftTitleDiv theme={theme}>{data.name}</HeaderLeftTitleDiv>
      </HeaderLeftDiv>
      <HeaderRightDiv>
        <HeaderRightUl>
          <HeaderRightLi>About</HeaderRightLi>
          <HeaderRightLi>Skills</HeaderRightLi>
          <HeaderRightLi>Experience</HeaderRightLi>
          <HeaderRightLi>Work</HeaderRightLi>
          <HeaderRightLi>Achievement</HeaderRightLi>
        </HeaderRightUl>
      </HeaderRightDiv>

      <HeaderRightMenu>
        <MenuIcon />
      </HeaderRightMenu>
    </HeaderRootDiv>
  );
};

export default React.memo(Header);
