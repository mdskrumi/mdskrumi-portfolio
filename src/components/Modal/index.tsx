import ReactDom from "react-dom";

import { ModalBodyDiv, ModalContentDiv } from "./style";

const Modal = (props: any) => {
  // console.log("__MODAL_PROPS__: ", props);

  const { children, isModalOpen, setIsModalOpen } = props;

  const ROOT_NODE = document.getElementById("modal");
  if (ROOT_NODE)
    return (
      isModalOpen &&
      ReactDom.createPortal(
        <>
          <ModalBodyDiv
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
          <ModalContentDiv>{children}</ModalContentDiv>
        </>,
        ROOT_NODE
      )
    );
};

export default Modal;
