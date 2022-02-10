import { useNavigate } from "react-router-dom";

// Images;
import ProfileImage from "../../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleClickOnLink = (path: string) => {
    navigate(path);
  };

  return (
    <div className="header_root">
      <div className="header_left">
        <div className="header_left_img">
          <img src={ProfileImage} alt="mdskrumi" />
        </div>
        <div
          className="header_left_title"
          onClick={() => handleClickOnLink("/")}
        >
          Md. Sakibul Alam + Hafsa
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

export default Header;
