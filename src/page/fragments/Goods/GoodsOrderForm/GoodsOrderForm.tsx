import * as React from "react";
import { Amount } from "src/page/components/Amount/Amount";
import { Goods } from "src/store/goods";
import { CommonButton } from "src/page/components/buttons/CommonButton";

export interface GoodsOrderFormProps {
  goods: Goods;
}

export function GoodsOrderForm({ goods }: GoodsOrderFormProps) {
  return (
    <form className="goods-order-form">
      <Amount amount={goods.cost} currency="usd" extraClass="goods-order-form__amount" />
      <CommonButton>
        <p className="goods-order-form__btn">Add to Cart</p>
      </CommonButton>
    </form>
  );
}
