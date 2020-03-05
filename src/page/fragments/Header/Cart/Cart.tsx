import "./Cart.scss";

import * as React from "react";
import { ShopBasket } from "src/page/components/icons/ShoppingBasket/ShopBasket";
import { useDispatch, useSelector } from "react-redux";
import { AsideCartAction, AsideCartState } from "src/store/aside-cart";
import { Dispatch } from "redux";
import { RootState } from "src/store/root";
import { CommonButton } from "src/page/components/buttons/CommonButton";

export function Cart() {
  const dispatch = useDispatch<Dispatch<AsideCartAction>>();
  const isGoodsCartVisible = useSelector<RootState, AsideCartState>((state: RootState) => state.asideCartReducer);

  const onCartToggle = React.useCallback(() => {
    dispatch({ type: isGoodsCartVisible ? "ASIDE_CART_HIDE" : "ASIDE_CART_VISIBLE", store: !isGoodsCartVisible });
  }, [isGoodsCartVisible]);

  return (
    <CommonButton onClick={onCartToggle} extraClass="cart">
      <p className="cart__cart-goods-count">0</p>
      <ShopBasket size="x32" />
    </CommonButton>
  );
}
