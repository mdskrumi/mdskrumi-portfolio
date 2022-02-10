import { useEffect, useRef } from "react";
import gsap from "gsap";

// Images;
import ProfileImage from "../../assets/images/logo.png";

const SplashScreen = () => {
  const p = useRef<HTMLParagraphElement>(null);
  const q = gsap.utils.selector(p);

  useEffect(() => {
    // Target ALL descendants with the class of .box
    gsap
      .timeline()
      .to(q(".img"), {
        x: window.screen.width / 2,
        duration: 2,
        ease: "elastic.out(0.2, 0.1)",
      })
      .to(q(".img"), {
        x: window.screen.width / 2 - 50,
        duration: 1,
      })
      .to(q(".img"), {
        rotate: 180,
        duration: 1,
      })
      .to(q(".img"), {
        y: window.screen.height,
        duration: 0.75,
      })
      .to(q("splash__screen"), {
        height: "0px",
      });
  }, [q]);

  return (
    <div className="splash__screen" ref={p}>
      <div className="img">
        <img src={ProfileImage} alt="Profile" />
      </div>
    </div>
  );
};

export default SplashScreen;
