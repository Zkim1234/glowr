import { useRef, cloneElement } from "react";
import styles from "./dialog.module.css";

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
      <dialog ref={modalRef} className={styles.modal}>
        {cloneElement(children, { onClose: closeModal })}
      </dialog>
    </>
  );
}

export default Modal;
