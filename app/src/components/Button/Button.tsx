import clsx from "clsx";
import React, { ReactNode } from "react";
import "./Button.scss";

type IButtonColor = "primary" | "secondary";
type IButtonSize = "small" | "medium" | "large";
type IButtonVariant = "text" | "outlined" | "contained";

export interface IButtonProps {
  className?: string;
  color?: IButtonColor;
  size?: IButtonSize;
  variant?: IButtonVariant;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const {
    className,
    color = "primary",
    size = "medium",
    variant,
    disabled,
    children,
    onClick,
  } = props;

  const getButtonColor = (color: IButtonColor) => {
    switch (color) {
      case "primary":
        return "btn-primary";

      case "secondary":
        return "btn-secondary";
    }
  };

  const getButtonSize = (color: IButtonSize) => {
    switch (color) {
      case "small":
        return "btn-small";
      case "large":
        return "btn-large";
    }
  };

  const getButtonVariant = (color: IButtonVariant) => {
    switch (color) {
      case "outlined":
        return "btn-outlined";

      case "contained":
        return "btn-contained";
    }
  };

  return (
    <button
      className={clsx(
        "btn-common",
        getButtonColor(color),
        getButtonSize(size),
        getButtonVariant(variant),
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
