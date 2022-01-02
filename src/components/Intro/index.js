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
            cursor=" "
            displayTextRenderer={(str, inx) => {
              return str.split("").map((s) => {
                if (s == s.toUpperCase()) {
                  return (
                    <span
                      style={{
                        color: "#fff",
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
          Eiusmod eu culpa sint ipsum sit pariatur eiusmod. Commodo
          reprehenderit dolore consequat fugiat nisi. Sunt duis cillum sit minim
          aliqua adipisicing esse sunt et quis.Eiusmod eu culpa sint ipsum sit
          pariatur eiusmod. Commodo reprehenderit dolore consequat fugiat nisi.
          Sunt duis cillum sit minim aliqua adipisicing esse.
        </div>
      </div>
    </div>
  );
};

export default Intro;
