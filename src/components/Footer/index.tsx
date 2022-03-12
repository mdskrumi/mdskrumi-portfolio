import React from "react";
// Images
import Menu_Image from "../../assets/images/menu.png";
import Facebook_Image from "../../assets/images/facebook.png";
import LinkedIn_Image from "../../assets/images/github.png";
import GitHub_Image from "../../assets/images/linkedin.png";

const Footer = () => {
  const handleItemOnClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="footer">
      <img
        className="footer_menu_image facebook"
        src={Facebook_Image}
        alt="facebook"
        onClick={() => handleItemOnClick("https://www.facebook.com")}
      />
      <img
        className="footer_menu_image linkedin"
        src={LinkedIn_Image}
        alt="linkedin"
        onClick={() =>
          // handleItemOnClick("https://www.linkedin.com/in/mdskrumi")
          handleItemOnClick("https://www.linkedin.com/")
        }
      />
      <img
        className="footer_menu_image github"
        src={GitHub_Image}
        alt="github"
        onClick={() => handleItemOnClick("https://github.com/mdskrumi")}
      />
      <img className="footer_menu_image menu" src={Menu_Image} alt="menu" />
      <div className="custom_hr"></div>
      <div className="footer_end"> © 2022 All rights reserved.</div>
    </div>
  );
};

export default React.memo(Footer);
