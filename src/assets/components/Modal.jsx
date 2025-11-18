import { useRef, cloneElement, useState, useEffect } from "react";
import styles from "./dialog.module.css";

// childProps: optional object of props to inject into the child component
function Modal({
  btnLabel,
  children,
  trigger,
  childProps = {},
  open,
  onClose,
}) {
  const modalRef = useRef();
  const [openKey, setOpenKey] = useState(0);

  function openModal() {
    setOpenKey((k) => k + 1);
    Promise.resolve().then(() => modalRef.current.showModal());
  }

  function closeModal() {
    if (modalRef.current && typeof modalRef.current.close === "function") {
      modalRef.current.close();
    }
    if (typeof onClose === "function") onClose();
  }

  // support controlled open prop (useful for edit flow)
  useEffect(() => {
    if (open) openModal();
    else if (modalRef.current && modalRef.current.open) closeModal();
  }, [open]);

  return (
    <>
      {trigger ? (
        cloneElement(trigger, { onClick: openModal })
      ) : btnLabel ? (
        <button onClick={openModal}>{btnLabel}</button>
      ) : null}
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
