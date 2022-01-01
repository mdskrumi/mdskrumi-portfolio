import ReactDom from "react-dom";

import { useState } from "react";

const Modal = (props) => {
  console.log("__MODAL_PROPS__: ", props);

  const { children, isModalOpen = true } = props;
  const [showRemove, setShouldRemove] = useState(false);

  return (
    isModalOpen &&
    !showRemove &&
    ReactDom.createPortal(
      <>
        <div
          onClick={() => setShouldRemove(true)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        >
          {children}
        </div>
      </>,
      document.getElementById("modal")
    )
  );
};

export default Modal;
