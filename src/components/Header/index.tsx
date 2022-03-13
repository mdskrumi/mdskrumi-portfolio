import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import InfoContext from "../../contexts/info";

// Images;
import ProfileImage from "../../assets/images/logo.png";

const Header = () => {
  const infoContext = useContext(InfoContext);
  const navigate = useNavigate();

  const handleClickOnLink = (path: string) => {
    navigate(path);
  };

  return (
    <div className="header_root">
      <div className="header_left">
        <div className="header_left_img">
          <img src={ProfileImage} alt="mdskrumi" loading="lazy" />
        </div>
        <div
          className="header_left_title"
          onClick={() => handleClickOnLink("/")}
        >
          {infoContext?.infoData.name}
        </div>
      </div>
      <div className="header_right">
        <ul>
          <li onClick={() => handleClickOnLink("/")}>Home</li>

          <li onClick={() => handleClickOnLink("/contact-me")}>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Header);
