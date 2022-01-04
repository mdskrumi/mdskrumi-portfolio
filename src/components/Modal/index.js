import ReactDom from "react-dom";

const Modal = (props) => {
  // console.log("__MODAL_PROPS__: ", props);

  const { children, isModalOpen, setIsModalOpen } = props;

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
      document.getElementById("modal")
    )
  );
};

export default Modal;
