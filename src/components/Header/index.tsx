import { useNavigate } from "react-router-dom";
// Files;
import RESUME from "../../assets/files/mdskrumi_resume.pdf";
// Images;
import ProfileImage from "../../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleClickOnLink = (path: string) => {
    navigate(path);
  };

  const handleClickOnDownloadResume = () => {
    const a: HTMLAnchorElement = document.createElement("a");
    a.href = `${RESUME}`;
    a.download = "mdskrumi_resume.pdf";
    a.click();
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
          Md. Sakibul Alam
        </div>
      </div>
      <div className="header_right">
        <ul>
          <li onClick={() => handleClickOnLink("/")}>Home</li>
          <li onClick={handleClickOnDownloadResume}>Download Resume</li>
          <li onClick={() => handleClickOnLink("/contact-me")}>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
