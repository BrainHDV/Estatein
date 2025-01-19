import React, { ReactNode } from "react";
import Dialog from "@components/Dialog/Dialog";
import "./HeaderDialog.scss";

interface IHeaderDialogProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const HeaderDialog = (props: IHeaderDialogProps) => {
  const { open, children, onClose } = props;

  return (
    <Dialog className="header-dialog" openModal={open} closeModal={onClose}>
      {children}
    </Dialog>
  );
};

export default HeaderDialog;
