import { useRef } from "react";

export const useRussianCurrencyFormatter = (currency: number) => {
  const currencyFormatter = useRef(
    new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" })
  );

  return {
    value: currencyFormatter.current.format(currency),
  };
};
