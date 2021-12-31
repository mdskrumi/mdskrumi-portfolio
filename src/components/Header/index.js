// Files

import RESUME from "../../assets/files/mdskrumi_resume.pdf";

// Images
import ProfileImage from "../../assets/images/logo.png";

const Header = () => {
  const handleClickOnDownloadResume = () => {
    const a = document.createElement("a");
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
        <div className="header_left_title">Md. Sakibul Alam</div>
      </div>
      <div className="header_right">
        <ul>
          <li>About</li>
          <li onClick={handleClickOnDownloadResume}>Download Resume</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
