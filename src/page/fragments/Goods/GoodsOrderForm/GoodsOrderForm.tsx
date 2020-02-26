import "./GoodsOrderForm.scss";

import * as React from "react";
import { Amount } from "src/page/components/Amount/Amount";
import { Goods } from "src/store/goods";
import { CommonButton, MaterialButton } from "src/page/components/buttons/CommonButton";
import { NumberField } from "src/page/components/NumberField/NumberField";

export interface GoodsOrderFormProps {
  goods: Goods;
}

export function GoodsOrderForm({ goods }: GoodsOrderFormProps) {
  return (
    <form className="goods-order-form">
      <p className="goods-order-form__name">{goods.name}</p>
      <p className="goods-order-form__sku">SKU: {goods.id}</p>
      <br />
      <Amount amount={goods.cost} currency="USD" extraClass="goods-order-form__amount" />
      <br />
      <NumberField value={0} extraClass="goods-order-form__goods-number" />
      <MaterialButton extraClass="goods-order-form__btn">
        <p className="goods-order-form__btn">Add to Cart</p>
      </MaterialButton>
    </form>
  );
}
