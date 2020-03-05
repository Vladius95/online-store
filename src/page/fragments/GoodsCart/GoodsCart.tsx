import "./GoodsCart.scss";

import * as React from "react";
import { GoodsAsideCart } from "./GoodsAsideCart/GoodsAsideCart";
import { IntoPortal } from "src/page/components/IntoPortal/IntoPortal";

export function GoodsCart() {
  return (
    <IntoPortal>
      <div className="goods-cart">
        <div className="goods-cart__layout"></div>
        <GoodsAsideCart />
      </div>
    </IntoPortal>
  );
}
