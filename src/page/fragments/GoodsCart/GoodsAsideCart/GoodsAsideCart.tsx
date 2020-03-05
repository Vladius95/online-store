import "./GoodsAsideCart.scss";

import * as React from "react";
import { Arrow } from "src/page/components/icons/Arrow/Arrow";
import { CommonButton } from "src/page/components/buttons/CommonButton";

export function GoodsAsideCart() {
  return (
    <aside className="goods-aside-cart">
      <header className="goods-aside-cart__header">
        <CommonButton extraClass="goods-aside-cart__arrow-btn">
          <Arrow size="x16" rotate="right" extraClass="goods-aside-cart__arrow" />
        </CommonButton>
        <p className="goods-aside-cart__title">Cart</p>
      </header>
      <div className="goods-aside-cart__temp-wrapper">
        <p className="goods-aside-cart__message">Cart is empty</p>
      </div>
    </aside>
  );
}
