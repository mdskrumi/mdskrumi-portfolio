import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ref, onValue } from "firebase/database";

// Firebase
import { database } from "../../firebase/index";

// Images;
import ProfileImage from "../../assets/images/logo.png";

export interface SplashScreenProps {
  duration: number;
}

const SplashScreen = ({ duration }: SplashScreenProps) => {
  const [messages, setMessages] = useState<string[]>();
  const divRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(divRef);
  const width = Math.min(window.screen.availWidth, window.screen.availHeight);

  useEffect(() => {
    const splashMessagesRef = ref(database, "splash-messages/");
    onValue(splashMessagesRef, (snapshot) => {
      const data = snapshot.val();
      setMessages(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        q(".splash__screen__msg__5"),
        { opacity: 0 },
        {
          x: window.screen.width / 1.75,
          duration: 2.5,
          opacity: 1,
        }
      )
      .to(divRef.current, {
        opacity: 0,
        duration: duration / 1000,
      });
  }, [q, duration]);

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
        duration: 2.5,
      }
    );
  }, [width, q]);

  return (
    <div className="splash__screen" ref={divRef}>
      <img className="splash__screen_img" src={ProfileImage} alt="Profile" />
      <div className="splash__screen__msg">
        <div className="splash__screen__msg__1">
          {messages ? messages[0] : null}
        </div>
        <div className="splash__screen__msg__2">
          {messages ? messages[1] : null}
        </div>
        <div className="splash__screen__msg__3">
          {messages ? messages[2] : null}
        </div>
        <div className="splash__screen__msg__4">
          {messages ? messages[3] : null}
        </div>
      </div>
      <div className="splash__screen__msg__5">
        {messages ? messages[4] : null}
      </div>
    </div>
  );
};

export default SplashScreen;
