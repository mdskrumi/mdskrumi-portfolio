import React from "react";
import { animated } from "react-spring";

// hooks
import useRaise from "../../Hooks/useRaise";

// Images
import Menu_Image from "../../assets/images/menu.png";
import Facebook_Image from "../../assets/images/facebook.png";
import LinkedIn_Image from "../../assets/images/linkedin.png";
import GitHub_Image from "../../assets/images/github.png";

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
    <div className="footer">
      <animated.img
        style={typeof style1 === "object" ? style1 : {}}
        className="footer_menu_image facebook"
        src={Facebook_Image}
        alt="facebook"
        onClick={() => handleItemOnClick("https://www.facebook.com")}
      />
      <animated.img
        style={typeof style2 === "object" ? style2 : {}}
        className="footer_menu_image linkedin"
        src={LinkedIn_Image}
        alt="linkedin"
        onClick={() =>
          // handleItemOnClick("https://www.linkedin.com/in/mdskrumi")
          handleItemOnClick("https://www.linkedin.com/")
        }
      />
      <animated.img
        style={typeof style3 === "object" ? style3 : {}}
        className="footer_menu_image github"
        src={GitHub_Image}
        alt="github"
        onClick={() => handleItemOnClick("https://github.com/mdskrumi")}
      />
      <img
        className="footer_menu_image menu"
        src={Menu_Image}
        alt="menu"
        onClick={handleOnMenuClick}
      />
      <div className="custom_hr"></div>
      <div className="footer_end"> © 2022 All rights reserved.</div>
    </div>
  );
};

export default React.memo(Footer);
