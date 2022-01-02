// Images
import ReactTypingEffect from "react-typing-effect";
import ProfileImage from "../../assets/images/profile_image.jpg";

const Intro = () => {
  return (
    <div className="intro__container">
      <div className="intro_img">
        <img src={ProfileImage} alt="mdskrumi" />
      </div>
      <div className="intro_details">
        <div className="designation">
          <ReactTypingEffect
            cursor={" "}
            displayTextRenderer={(str, inx) => {
              return str.split("").map((s) => {
                if (s === s.toUpperCase()) {
                  return (
                    <span
                      style={{
                        fontSize: "28px",
                      }}
                    >
                      {s}
                    </span>
                  );
                }
                return s;
              });
            }}
            eraseSpeed={100}
            speed={100}
            text={[
              "Software Engineer",
              "Web Frontend Engineer",
              "Competitive Programmer",
            ]}
            typingDelay={1000}
          />
        </div>
        <div className="name">Md. Sakibul Alam</div>
        <div className="vung_vang">
          Ready To face challenges using knowledge, perception, innovation, and
          Competitive mentality to pursue long term successful career in dynamic
          and professional environment of any organization through my attitude
          hard work, dedication, and determination.
        </div>
      </div>
    </div>
  );
};

export default Intro;
