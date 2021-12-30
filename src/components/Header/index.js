// Images
import ProfileImage from "../../assets/images/logo.png";

const Header = () => {
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
          <li>asd 1</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd n</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
