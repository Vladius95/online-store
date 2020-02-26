import "./Amount.scss";

import * as React from "react";

export interface AmountProps {
  amount: number;
  currency: "USD" | "RUB";
  extraClass?: string;
}

export function Amount({ amount, currency, extraClass = "" }: AmountProps) {
  const numberFormat = React.useRef(new Intl.NumberFormat("en-US", { style: "currency", currency: currency }));

  return <p className={`amount ${extraClass}`}>{numberFormat.current.format(amount)}</p>;
}
