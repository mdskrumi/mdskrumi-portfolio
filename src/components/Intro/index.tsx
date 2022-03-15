import React, { useState, useContext } from "react";
// Contexts
import InfoContext from "../../contexts/info";
import ThemeContext from "../../contexts/theme";

// Custom Components
import Modal from "../Modal";
import QuoteModal from "../QuoteModal";

// Files;
import RESUME from "../../assets/files/mdskrumi_resume.pdf";

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
  const infoContext = useContext(InfoContext);
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOnDownloadResume = () => {
    const a: HTMLAnchorElement = document.createElement("a");
    a.href = `${RESUME}`;
    a.download = "mdskrumi_resume.pdf";
    a.click();
  };

  return (
    <>
      <IntroContainerDiv>
        <IntroImageDiv>
          <img src={ProfileImage} alt="mdskrumi" loading="lazy" />
        </IntroImageDiv>
        <div>
          <IntroDetailsDesignationsDiv>
            <ReactTypingEffect
              cursor={" "}
              eraseSpeed={100}
              speed={100}
              text={
                infoContext?.infoData.designations
                  ? infoContext?.infoData.designations
                  : "Software Engineer"
              }
              typingDelay={1000}
            />
          </IntroDetailsDesignationsDiv>
          <IntroDetailsNameDiv>
            {infoContext?.infoData.name}
          </IntroDetailsNameDiv>
          <IntroDescriptionDiv>
            {infoContext?.infoData.intro}
          </IntroDescriptionDiv>

          <IntroActionsDiv>
            <IntroSingleActionDiv
              theme={theme}
              onClick={handleClickOnDownloadResume}
            >
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
