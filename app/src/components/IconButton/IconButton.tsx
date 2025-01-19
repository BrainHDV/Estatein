import Button, { IButtonProps } from "@components/Button/Button";
import "./IconButton.scss";
import clsx from "clsx";

const IconButton = (props: IButtonProps) => {
  const { className, children } = props;
  return (
    <Button {...props} className={clsx("btn-icon", className)}>
      {children}
    </Button>
  );
};

export default IconButton;
