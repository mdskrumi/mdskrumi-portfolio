import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

// Custom Components
import Modal from "../Modal";
import DoYouKnowModal from "../DoYouKnowModal";

// Images
import AE from "../../assets/images/ae.png";

const DoYouKnow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styles = useSpring({
    from: { x: -100 },
    to: { x: -25 },
    delay: 5000,
  });

  return (
    <>
      {!isModalOpen ? (
        <animated.div
          style={styles}
          className="do_you_know"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <img src={AE} alt="Do You Know?" loading="lazy" />
        </animated.div>
      ) : null}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <DoYouKnowModal />
      </Modal>
    </>
  );
};

export default React.memo(DoYouKnow);
