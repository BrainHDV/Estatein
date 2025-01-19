import clsx from "clsx";
import Link from "next/link";
import "./CustomLink.scss";
import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";

type ICustomLinkColor = "primary" | "secondary";
type ICustomLinkSize = "small" | "medium" | "large";
type ICustomLinkVariant = "text" | "outlined" | "contained";

interface ICustomLinkProps {
  className?: string;
  color?: ICustomLinkColor;
  size?: ICustomLinkSize;
  variant?: ICustomLinkVariant;
  href: Url;
  children: ReactNode;
}

const CustomLink = (props: ICustomLinkProps) => {
  const {
    className,
    color = "primary",
    size,
    variant = "text",
    href,
    children,
  } = props;

  const getLinkColor = (color: ICustomLinkColor) => {
    switch (color) {
      case "primary":
        return "link-primary";

      case "secondary":
        return "link-secondary";
    }
  };

  const getLinkSize = (size: ICustomLinkSize) => {
    switch (size) {
      case "small":
        return "link-small";
      case "large":
        return "link-large";
    }
  };

  const getLinkVariant = (color: ICustomLinkVariant) => {
    switch (color) {
      case "text":
        return "link-text";

      case "outlined":
        return "link-outlined";

      case "contained":
        return "link-contained";
    }
  };

  return (
    <Link
      className={clsx(
        "link-common",
        getLinkColor(color),
        getLinkSize(size),
        getLinkVariant(variant),
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
