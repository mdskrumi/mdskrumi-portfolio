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

// Styles
import {
  SplashScreenDiv,
  SplashScreenMsgPrimaryDiv,
  SplashScreenMsgSecondaryDiv,
} from "./style";

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
    <SplashScreenDiv as={animated.div} style={{ ...styles }}>
      {messages ? (
        <>
          <div>
            <SplashScreenMsgPrimaryDiv even={true}>
              {messages ? messages[0] : null}
            </SplashScreenMsgPrimaryDiv>
            <SplashScreenMsgPrimaryDiv even={false}>
              {messages ? messages[1] : null}
            </SplashScreenMsgPrimaryDiv>
            <SplashScreenMsgPrimaryDiv even={true}>
              {messages ? messages[2] : null}
            </SplashScreenMsgPrimaryDiv>
            <SplashScreenMsgPrimaryDiv even={false}>
              {messages ? messages[3] : null}
            </SplashScreenMsgPrimaryDiv>
          </div>
          <SplashScreenMsgSecondaryDiv>
            {messages ? messages[4] : null}
          </SplashScreenMsgSecondaryDiv>
        </>
      ) : (
        <div>
          <img src={Loading} alt="loading" loading="lazy" />
        </div>
      )}
    </SplashScreenDiv>
  );
};

export default React.memo(SplashScreen);
