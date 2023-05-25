import classes from "./Subtotal.module.css";
import { useRussianCurrencyFormatter } from "./useRussianCurrencyFormatter.ts";
interface SubtotalProps {
  payAmount: number;
}

export const Subtotal = ({ payAmount = 123.55 }: SubtotalProps) => {
  const { value } = useRussianCurrencyFormatter(payAmount);

  const primaryPrice = value.split(",")[0];
  const secondaryPrice = value.split(",")[1].slice(0, 2);

  const checkCubes = [...Array(16).keys()].map((elem) => {
    return (
      <div
        key={elem}
        style={{ left: `calc(0.6rem + 4.75rem  * ${elem})` }}
        className={classes.checkBodyCube}
      />
    );
  });

  return (
    <div className={classes.subtotalContainer}>
      <div className={classes.checkEntryPoint}>
        <div className={classes.checkBody}>
          <div className={classes.upperGradient} />
          <span className={classes.priceTitle}>Стоимость покупок</span>
          <span className={classes.priceMain}>
            {primaryPrice}
            <span className={classes.priceSecondary}>,{secondaryPrice}</span>₽
          </span>
          <span className={classes.cardMessage}>Приложите</span>
          <span className={classes.cardMessage}>или прокатите карту</span>

          {checkCubes}
        </div>
      </div>
    </div>
  );
};
