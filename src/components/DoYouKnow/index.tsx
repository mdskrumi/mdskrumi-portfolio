import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import Draggable from "gsap/Draggable";

// Custom Components
import Modal from "../Modal";
import DoYouKnowModal from "../DoYouKnowModal";

// Images
import AE from "../../assets/images/ae.png";

const DoYouKnow = () => {
  gsap.registerPlugin(Draggable);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Draggable.create(".do_you_know", {
      type: "x,y",
      inertia: true,
      onDragEnd: function () {
        console.log(
          "x velocity is: " +
            InertiaPlugin.getVelocity(this.target, "x") +
            " and the duration is " +
            this.tween.duration() +
            " seconds."
        );
      },
    });
    gsap.timeline().from(imageDivRef.current, {
      x: -window.screen.availWidth,
      duration: 2,
    });
  }, []);

  return (
    <>
      {!isModalOpen ? (
        <div
          ref={imageDivRef}
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
