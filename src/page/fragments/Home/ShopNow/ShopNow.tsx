import * as React from "react";

export interface ShopNowProps {
  onClick(e: React.SyntheticEvent<HTMLButtonElement>): void;
}

export function ShopNow({ onClick }: ShopNowProps) {
  return (
    <button className="shop-now">
      <p>Shop Now</p>
    </button>
  );
}
