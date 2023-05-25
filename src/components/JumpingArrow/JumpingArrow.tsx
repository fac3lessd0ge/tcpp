// @ts-ignore
import { ReactComponent as BigArrowDown } from "../../assets/icons/BigArrowDown.svg";

import classes from "./JumpingArrow.module.css";

export const JumpingArrow = () => {
  return (
    <div className={classes.container}>
      <BigArrowDown />
    </div>
  );
};
