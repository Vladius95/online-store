import "./GoodsAsideCart.scss";

import * as React from "react";
import { Arrow } from "src/page/components/icons/Arrow/Arrow";
import { CommonButton } from "src/page/components/buttons/CommonButton";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/store/root";
import { CartState } from "src/store/cart";
import { Dispatch } from "redux";
import { AsideCartAction } from "src/store/aside-cart";

export function GoodsAsideCart({ extraClass = "" }: { extraClass?: string }) {
  const dispatchAsideCart = useDispatch<Dispatch<AsideCartAction>>();

  const cartGoods = useSelector<RootState, CartState>(state => state.cartReducer);

  const onClose = React.useCallback(() => {
    dispatchAsideCart({
      type: "ASIDE_CART_HIDE",
      store: false
    });
  }, []);

  if (cartGoods.isLoading) return null;

  return (
    <aside className={`goods-aside-cart ${extraClass}`}>
      <header className="goods-aside-cart__header">
        <CommonButton onClick={onClose} extraClass="goods-aside-cart__arrow-btn">
          <Arrow size="x16" rotate="right" extraClass="goods-aside-cart__arrow" />
        </CommonButton>
        <p className="goods-aside-cart__title">Cart</p>
      </header>
      <div className="goods-aside-cart__temp-wrapper">
        {cartGoods.goods.length === 0 ? (
          <p className="goods-aside-cart__message">Cart is empty</p>
        ) : (
          <ul>
            {cartGoods.goods.map(g => (
              <li>
                <p>{g.goods.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
