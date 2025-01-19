import { useEffect, useRef } from "react";

const Dialog = ({ openModal, closeModal, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);
  return (
    <dialog ref={ref} onCancel={closeModal}>
      {children}
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
};

export default Dialog;
