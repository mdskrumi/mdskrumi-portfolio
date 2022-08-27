import React, { useState, useContext } from "react";

// Context
import ThemeContext from "../../contexts/theme";

// Custom Components
import Modal from "../Modal";
import DoYouKnowModal from "../DoYouKnowModal";

// Images
import AE from "../../assets/images/ae.png";

// Styles
import { DoYouKnowDiv } from "./style";

const DoYouKnow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {!isModalOpen ? (
        <DoYouKnowDiv
          theme={theme}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <img src={AE} alt="Do You Know?" loading="lazy" />
        </DoYouKnowDiv>
      ) : null}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <DoYouKnowModal />
      </Modal>
    </>
  );
};

export default React.memo(DoYouKnow);
