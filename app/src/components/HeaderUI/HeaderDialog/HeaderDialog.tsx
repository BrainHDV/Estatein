import Dialog from "@components/Dialog/Dialog";
import React, { ReactNode } from "react";
import { nav } from "../Header/Header";
import CustomLink from "@components/CustomLink/CustomLink";
import { usePathname } from "next/navigation";

interface IHeaderDialogProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const HeaderDialog = (props: IHeaderDialogProps) => {
  const { open, children, onClose } = props;

  return (
    <Dialog openModal={open} closeModal={onClose}>
      {children}
    </Dialog>
  );
};

export default HeaderDialog;
