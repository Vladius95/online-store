import "./GoodsOrderForm.scss";

import * as React from "react";
import { Amount } from "src/page/components/Amount/Amount";
import { Goods } from "src/store/goods";
import { CommonButton, MaterialButton } from "src/page/components/buttons/CommonButton";
import { NumberField } from "src/page/components/NumberField/NumberField";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { CartAction, CartItem } from "src/store/cart";
import { LocaleStorage } from "src/utils/locale-storage";

export interface GoodsOrderFormProps {
  goods: Goods;
}

export function GoodsOrderForm({ goods }: GoodsOrderFormProps) {
  const [quantity, setQuantity] = React.useState<number>(1);
  const onIncreaseValue = React.useCallback(() => setQuantity(v => v + 1), []);
  const onDecreaseValue = React.useCallback(() => setQuantity(v => v - 1), []);

  const store = React.useRef<LocaleStorage<CartItem[]>>(new LocaleStorage<CartItem[]>("cart-goods"));

  const dispatch = useDispatch<Dispatch<CartAction>>();
  const addToCart = React.useCallback(() => {
    store.current.newValue = [
      ...store.current.value,
      {
        goods,
        quantity
      }
    ];

    dispatch({
      cartState: {
        goods: store.current.value,
        isLoading: false
      },

      type: "ADD_TO_CART"
    });
  }, [quantity]);

  return (
    <form onSubmit={addToCart} className="goods-order-form">
      <p className="goods-order-form__name">{goods.name}</p>
      <p className="goods-order-form__sku">SKU: {goods.id}</p>
      <br />
      <Amount amount={goods.cost} currency="USD" extraClass="goods-order-form__amount" />
      <br />
      <NumberField
        value={quantity}
        onIncrease={onIncreaseValue}
        onDeacrease={onDecreaseValue}
        extraClass="goods-order-form__goods-number"
      />
      <MaterialButton type="submit" extraClass="goods-order-form__btn">
        <p className="goods-order-form__btn">Add to Cart</p>
      </MaterialButton>
    </form>
  );
}
