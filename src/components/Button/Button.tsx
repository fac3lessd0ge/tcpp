import React from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  color?: string;
  icon: React.ReactNode;
  left?: boolean;
}

export const Button = ({
  color,
  children,
  icon,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button type={"button"} style={{ color }}>
      <div className={classes.iconContainer}>{icon}</div>
      {children ? (
        <div className={classes.textContainer}>{children}</div>
      ) : null}
    </button>
  );
};
