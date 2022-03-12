import React from "react";
import { useEffect, useState, useContext } from "react";
import { ref, onValue } from "firebase/database";
import { animated, useSpring } from "react-spring";

// Context
import SplashContext from "../../contexts/splash";

// Firebase
import { database } from "../../firebase/index";

// Images;
import Loading from "../../assets/images/loading.gif";

export interface SplashScreenProps {}

const SplashScreen = () => {
  const [messages, setMessages] = useState<string[]>();
  const splashContext = useContext(SplashContext);

  const styles = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 5000,
    onRest: () => {
      sessionStorage.setItem("isSplashShown", "true");
      splashContext?.setIsSplashShown(true);
      window.location.reload();
    },
  });

  useEffect(() => {
    const splashMessagesRef = ref(database, "splash-messages/");
    onValue(splashMessagesRef, (snapshot) => {
      const data = snapshot.val();
      setMessages(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <animated.div className="splash__screen" style={{ ...styles }}>
      {messages ? (
        <>
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
        </>
      ) : (
        <div>
          <img src={Loading} alt="loading" />
        </div>
      )}
    </animated.div>
  );
};

export default React.memo(SplashScreen);
