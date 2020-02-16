import * as React from "react";

export interface ShopNowProps {
  onClick(e: React.SyntheticEvent<HTMLButtonElement>): void;
}

export function ShopNowButton({ onClick }: ShopNowProps) {
  return (
    <button className="shop-now">
      <p className="">Shop Now</p>
    </button>
  );
}
