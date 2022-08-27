import React, { useState, useContext } from "react";
// Contexts
import ThemeContext from "../../contexts/theme";

// Custom Components
import Modal from "../Modal";
import QuoteModal from "../QuoteModal";

// Images
import ReactTypingEffect from "react-typing-effect";
import ProfileImage from "../../assets/images/profile_image.jpg";

// Style
import {
  IntroContainerDiv,
  IntroImageDiv,
  IntroDetailsDesignationsDiv,
  IntroDetailsNameDiv,
  IntroDescriptionDiv,
  IntroActionsDiv,
  IntroSingleActionDiv,
} from "./style";

const Intro = () => {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <IntroContainerDiv>
        <IntroImageDiv>
          <img src={ProfileImage} alt="mdskrumi" loading="lazy" />
        </IntroImageDiv>
        <div>
          <IntroDetailsDesignationsDiv>
            <ReactTypingEffect
              cursor={"_"}
              eraseSpeed={100}
              speed={100}
              text={"Software Engineer"}
              typingDelay={1000}
            />
          </IntroDetailsDesignationsDiv>
          <IntroDetailsNameDiv>Nmae</IntroDetailsNameDiv>
          <IntroDescriptionDiv>intro</IntroDescriptionDiv>

          <IntroActionsDiv>
            <IntroSingleActionDiv theme={theme}>
              Download Resume
            </IntroSingleActionDiv>
            <IntroSingleActionDiv
              theme={theme}
              onClick={() => setIsModalOpen(true)}
            >
              Get A Quote
            </IntroSingleActionDiv>
          </IntroActionsDiv>
        </div>
      </IntroContainerDiv>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <QuoteModal />
      </Modal>
    </>
  );
};

export default React.memo(Intro);
