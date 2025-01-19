import React, { ReactNode } from "react";
import styles from "./Grid.module.scss";
import clsx from "clsx";

interface IGridProps {
  mode?: "content" | "popout" | "feature" | "full";
  children: ReactNode;
}

const Grid = (props: IGridProps) => {
  const { mode = "content", children } = props;

  const getGridMode = (
    mode: "content" | "popout" | "feature" | "full"
  ) => {
    switch (mode) {
      case "content":
        return styles.content;

      case "popout":
        return styles.popout;

      case "feature":
        return styles.feature;

      case "full":
        return styles.full;

      default:
        return styles.content;
    }
  };

  return (
    <div className={clsx(styles.wrapper, getGridMode(mode))}>
      {children}
    </div>
  );
};

export default Grid;
