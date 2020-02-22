import "./Amount.scss";

import * as React from "react";

export interface AmountProps {
  amount: number;
  currency: string;
  extraClass?: string;
}

export function Amount({ amount, currency, extraClass = "" }: AmountProps) {
  return <p className={`amount ${currency} ${extraClass}`}>{amount}</p>;
}
