import { useRef, cloneElement } from "react";
import styles from "./dialog.module.css";

// childProps: optional object of props to inject into the child component
function Modal({ btnLabel, children, trigger, childProps = {} }) {
  const modalRef = useRef();

  function openModal() {
    modalRef.current.showModal();
  }

  function closeModal() {
    modalRef.current.close();
  }

  return (
    <>
      {trigger ? (
        cloneElement(trigger, { onClick: openModal })
      ) : (
        <button onClick={openModal}>{btnLabel}</button>
      )}
      <dialog ref={modalRef} className={styles.modal}>
        {cloneElement(children, { onClose: closeModal, ...childProps })}
      </dialog>
    </>
  );
}

export default Modal;
