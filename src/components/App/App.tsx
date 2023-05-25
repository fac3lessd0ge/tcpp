import { Button } from "../Button";
import { JumpingArrow } from "../JumpingArrow";
import { DetailsSection } from "../DetailsSection";
import { Subtotal } from "../Subtotal";

import { ReactComponent as Person } from "../../assets/icons/Person.svg";
import { ReactComponent as ArrowBack } from "../../assets/icons/ArrowBack.svg";

import classes from "./App.module.css";

export function App() {
  return (
    <>
      <div className={classes.paperContainer}>
        <div className={classes.detailsContainer}>
          <DetailsSection terminalId={123} />
        </div>

        <Subtotal payAmount={550.234} />

        <div className={classes.arrowContainer}>
          <JumpingArrow />
        </div>
      </div>

      <div className={classes.buttonsContainer}>
        <Button icon={<ArrowBack />} />

        <Button icon={<Person />}>Вызов сотрудника</Button>
      </div>
    </>
  );
}
