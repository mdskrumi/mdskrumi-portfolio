import { useState, useContext, useRef, useEffect } from "react";
import gsap from "gsap";
// Contexts
import InfoContext from "../../contexts/info";

// Custom Components
import Modal from "../Modal";
import QuoteModal from "../QuoteModal";

// Files;
import RESUME from "../../assets/files/mdskrumi_resume.pdf";

// Images
import ReactTypingEffect from "react-typing-effect";
import ProfileImage from "../../assets/images/profile_image.jpg";

const Intro = () => {
  const infoContext = useContext(InfoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageDivRef = useRef<HTMLDivElement>(null);
  const buttonDivRefOne = useRef<HTMLDivElement>(null);
  const buttonDivRefTwo = useRef<HTMLDivElement>(null);

  const width = window.screen.availWidth;

  const handleClickOnDownloadResume = () => {
    const a: HTMLAnchorElement = document.createElement("a");
    a.href = `${RESUME}`;
    a.download = "mdskrumi_resume.pdf";
    a.click();
  };

  useEffect(() => {
    gsap.timeline().from(buttonDivRefOne.current, { x: -width, duration: 1 });
  }, []);

  useEffect(() => {
    gsap.timeline().from(buttonDivRefTwo.current, { x: width, duration: 1 });
  }, []);

  return (
    <>
      <div className="intro__container">
        <div className="intro_img" ref={imageDivRef}>
          <img src={ProfileImage} alt="mdskrumi" />
        </div>
        <div className="intro_details">
          <div className="designation">
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
          </div>
          <div className="name"> {infoContext?.infoData.name}</div>
          <div className="description">{infoContext?.infoData.intro}</div>

          <div className="intro__actions">
            <div
              ref={buttonDivRefOne}
              className="button"
              onClick={handleClickOnDownloadResume}
            >
              Download Resume
            </div>
            <div
              ref={buttonDivRefTwo}
              className="button"
              onClick={() => setIsModalOpen(true)}
            >
              Get A Quote
            </div>
          </div>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <QuoteModal />
      </Modal>
    </>
  );
};

export default Intro;
