import { useState, useRef } from "react";
import gsap from "gsap";

// Images
import Menu_Image from "../../assets/images/menu.png";
import Facebook_Image from "../../assets/images/facebook.png";
import LinkedIn_Image from "../../assets/images/github.png";
import GitHub_Image from "../../assets/images/linkedin.png";

const Footer = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(divRef);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const raiseHeightOfElement = (element: string, time: number) => {
    gsap
      .timeline()
      .to(q(element), {
        y: window.screen.width <= 600 ? -40 * time : -60 * time,
        duration: time / 2,
        backgroundColor: "#ffffff",
      })
      .to(q(".menu"), { backgroundColor: "#383838" });
  };

  const resetHeightOfElement = (element: string, time: number) => {
    gsap
      .timeline()
      .to(q(element), {
        y: 0,
        duration: time / 2,
        backgroundColor: "#383838",
      })
      .to(q(".menu"), { backgroundColor: "#ffffff" });
  };

  const handleOnClick = () => {
    if (isExpanded) {
      resetHeightOfElement(".facebook", 3);
      resetHeightOfElement(".linkedin", 2);
      resetHeightOfElement(".github", 1);
      setIsExpanded(false);
    } else {
      raiseHeightOfElement(".facebook", 3);
      raiseHeightOfElement(".linkedin", 2);
      raiseHeightOfElement(".github", 1);
      setIsExpanded(true);
    }
  };

  const handleItemOnClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="footer" ref={divRef}>
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
      <img
        className="footer_menu_image menu"
        src={Menu_Image}
        alt="menu"
        onClick={handleOnClick}
      />
      <div className="custom_hr"></div>
      <div className="footer_end"> © 2022 All rights reserved.</div>
    </div>
  );
};

export default Footer;
