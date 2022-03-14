import React from "react";
import { animated } from "react-spring";

// hooks
import useRaise from "../../Hooks/useRaise";

// Images
import Menu_Image from "../../assets/images/menu.png";
import Facebook_Image from "../../assets/images/facebook.png";
import LinkedIn_Image from "../../assets/images/linkedin.png";
import GitHub_Image from "../../assets/images/github.png";

// Styles
import { FooterDiv, FooterMenuImage, FooterHrDiv, FooterEndDiv } from "./style";

const Footer = () => {
  const [style1, toggle1] = useRaise(1, false);
  const [style2, toggle2] = useRaise(2, false);
  const [style3, toggle3] = useRaise(3, false);

  const handleItemOnClick = (link: string) => {
    window.open(link, "_blank");
  };

  const handleOnMenuClick = () => {
    if (
      typeof toggle1 === "function" &&
      typeof toggle2 === "function" &&
      typeof toggle3 === "function"
    ) {
      toggle1();
      toggle2();
      toggle3();
    }
  };

  return (
    <FooterDiv>
      <FooterMenuImage
        as={animated.img}
        style={typeof style1 === "object" ? style1 : {}}
        src={Facebook_Image}
        alt="facebook"
        loading="lazy"
        onClick={() => handleItemOnClick("https://www.facebook.com")}
      />
      <FooterMenuImage
        as={animated.img}
        style={typeof style2 === "object" ? style2 : {}}
        src={LinkedIn_Image}
        alt="linkedin"
        loading="lazy"
        onClick={() =>
          // handleItemOnClick("https://www.linkedin.com/in/mdskrumi")
          handleItemOnClick("https://www.linkedin.com/")
        }
      />
      <FooterMenuImage
        as={animated.img}
        style={typeof style3 === "object" ? style3 : {}}
        src={GitHub_Image}
        alt="github"
        loading="lazy"
        onClick={() => handleItemOnClick("https://github.com/mdskrumi")}
      />
      <FooterMenuImage
        src={Menu_Image}
        alt="menu"
        loading="lazy"
        onClick={handleOnMenuClick}
      />
      <FooterHrDiv />
      <FooterEndDiv> © 2022 All rights reserved.</FooterEndDiv>
    </FooterDiv>
  );
};

export default React.memo(Footer);
