import { useState } from "react";

// Custom Components
import Modal from "../Modal";
import QuoteModal from "../QuoteModal";

// Files;
import RESUME from "../../assets/files/mdskrumi_resume.pdf";

// Images
import ReactTypingEffect from "react-typing-effect";
import ProfileImage from "../../assets/images/profile_image.jpg";

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOnDownloadResume = () => {
    const a: HTMLAnchorElement = document.createElement("a");
    a.href = `${RESUME}`;
    a.download = "mdskrumi_resume.pdf";
    a.click();
  };

  return (
    <>
      <div className="intro__container">
        <div className="intro_img">
          <img src={ProfileImage} alt="mdskrumi" />
        </div>
        <div className="intro_details">
          <div className="designation">
            <ReactTypingEffect
              cursor={" "}
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
          <div className="description">
            With more than 2 years of experience in web frontend engineering, I
            have built websites and applications used by millions of users every
            day. I am also ready To face challenges using knowledge, perception,
            innovation, and Competitive mentality to pursue a long-term
            successful career in the dynamic and professional environment of any
            organization through my attitude hard work, dedication, and
            determination.
          </div>

          <div className="intro__actions">
            <div className="button" onClick={handleClickOnDownloadResume}>
              Download Resume
            </div>
            <div className="button" onClick={() => setIsModalOpen(true)}>
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
