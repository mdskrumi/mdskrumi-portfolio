import { useEffect, useRef } from "react";
import gsap from "gsap";

// Images;
import ProfileImage from "../../assets/images/logo.png";

const SplashScreen = () => {
  const p = useRef<HTMLParagraphElement>(null);
  const q = gsap.utils.selector(p);
  const width = Math.min(window.screen.availWidth, window.screen.availHeight);

  useEffect(() => {
    // Target ALL descendants with the class of .box
    gsap.timeline().to(q(".splash__screen__msg__5"), {
      x: window.screen.width / 2,
      duration: 2.5,
    });
  }, [q]);

  useEffect(() => {
    gsap.timeline().fromTo(
      q(
        ".splash__screen__msg__1, .splash__screen__msg__2, .splash__screen__msg__3, .splash__screen__msg__4"
      ),
      {
        fontSize: 0,
        opacity: 0,
      },
      {
        fontSize: width / 20,
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  return (
    <div className="splash__screen" ref={p}>
      <img className="splash__screen_img" src={ProfileImage} alt="Profile" />
      <div className="splash__screen__msg">
        <div className="splash__screen__msg__1">Subhanallah</div>
        <div className="splash__screen__msg__2">Alhamdulillah</div>
        <div className="splash__screen__msg__3">La ilaha illallahu</div>
        <div className="splash__screen__msg__4">Allahu Akbar</div>
      </div>
      <div className="splash__screen__msg__5">Allahu</div>
    </div>
  );
};

export default SplashScreen;
