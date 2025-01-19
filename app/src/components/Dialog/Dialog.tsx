import clsx from "clsx";
import { ReactNode, useEffect, useRef } from "react";
import "./Dialog.scss";
import { CloseIcon } from "@assets/index";
import IconButton from "@components/IconButton/IconButton";

interface IDialogProps {
  className?: string;
  openModal: boolean;
  children: ReactNode;
  closeModal: () => void;
}

const Dialog = (props: IDialogProps) => {
  const { className, openModal, closeModal, children } = props;

  const ref = useRef(null);

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);
  return (
    <dialog
      className={clsx("dialog", className)}
      ref={ref}
      onCancel={closeModal}
    >
      <IconButton className="dialog__close-btn" onClick={closeModal}>
        <CloseIcon />
      </IconButton>
      {children}
    </dialog>
  );
};

export default Dialog;
