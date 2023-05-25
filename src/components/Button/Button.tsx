import React, { MouseEventHandler } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  color?: string;
  icon: React.ReactNode;
  left?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({
  color,
  children,
  icon,
  onClick
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} type={"button"} style={{ color }}>
      <div className={classes.iconContainer}>{icon}</div>
      {children ? (
        <div className={classes.textContainer}>{children}</div>
      ) : null}
    </button>
  );
};
