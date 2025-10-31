import { useRef, cloneElement, useState } from "react";
import styles from "./dialog.module.css";

// childProps: optional object of props to inject into the child component
function Modal({ btnLabel, children, trigger, childProps = {} }) {
  const modalRef = useRef();
  const [openKey, setOpenKey] = useState(0);

  function openModal() {
    // bump key so cloned child is remounted (clears its internal state)
    setOpenKey((k) => k + 1);
    // show dialog after React has a chance to remount the child
    Promise.resolve().then(() => modalRef.current.showModal());
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
        {cloneElement(children, {
          key: openKey,
          onClose: closeModal,
          ...childProps,
        })}
      </dialog>
    </>
  );
}

export default Modal;
