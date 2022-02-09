import { useState } from "react";

// Custom Components
import Modal from "../Modal";
import DoYouKnowModal from "../DoYouKnowModal";

// Images
import AE from "../../assets/images/ae.png";

const DoYouKnow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {!isModalOpen ? (
        <div
          className="do_you_know"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <img src={AE} alt="Do You Know?" />
        </div>
      ) : null}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <DoYouKnowModal />
      </Modal>
    </>
  );
};

export default DoYouKnow;
