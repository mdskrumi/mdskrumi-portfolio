import React from "react";
import ReactDom from "react-dom";

const Modal = (props: any) => {
  // console.log("__MODAL_PROPS__: ", props);

  const { children, isModalOpen, setIsModalOpen } = props;

  const ROOT_NODE = document.getElementById("modal");
  if (ROOT_NODE)
    return (
      isModalOpen &&
      ReactDom.createPortal(
        <>
          <div
            className="modal_body"
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
          <div className="modal_content">{children}</div>
        </>,
        ROOT_NODE
      )
    );
};

export default React.memo(Modal);
