import { useRef, cloneElement } from "react";
import "./dialog.css";

function Modal({ btnLabel, children }) {
  const modalRef = useRef();

  function openModal() {
    modalRef.current.showModal();
  }

  function closeModal() {
    modalRef.current.close();
  }

  return (
    <>
      <button onClick={openModal}>{btnLabel}</button>
      <dialog ref={modalRef} className="modal">
        {cloneElement(children, { onClose: closeModal })}
      </dialog>
    </>
  );
}

export default Modal;
