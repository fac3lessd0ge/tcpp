import classes from "./DetailsSection.module.css";
import { useFormattedDateTime } from "./useFormattedDateTime.ts";

interface DetailsSectionProps {
  terminalId: string | number;
}

export const DetailsSection = ({ terminalId = 1 }: DetailsSectionProps) => {
  const { formattedTime, formattedDate } = useFormattedDateTime();

  return (
    <span className={classes.container}>
      {formattedDate} {formattedTime} Касса #{terminalId}
    </span>
  );
};
