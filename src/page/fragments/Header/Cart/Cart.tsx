import "./Cart.scss";

import * as React from "react";
import { ShopBasket } from "src/page/components/icons/ShoppingBasket/ShopBasket";
import { useDispatch, useSelector } from "react-redux";
import { AsideCartAction, AsideCartState } from "src/store/aside-cart";
import { Dispatch } from "redux";
import { RootState } from "src/store/root";
import { CommonButton } from "src/page/components/buttons/CommonButton";
import { CartAction, CartState, CartItem } from "src/store/cart";
import { LocaleStorage } from "src/utils/locale-storage";

export function Cart() {
  const dispatchAsideCart = useDispatch<Dispatch<AsideCartAction>>();
  const dispatchCartGoods = useDispatch<Dispatch<CartAction>>();

  React.useEffect(() => {
    const ls = new LocaleStorage<CartItem[]>("cart-goods", []);
    dispatchCartGoods({
      cartState: { goods: ls.value, isLoading: false },
      type: "GET_CART_GOODS"
    });
  }, []);

  const isGoodsCartVisible = useSelector<RootState, AsideCartState>((state: RootState) => state.asideCartReducer);
  const cartGoods = useSelector<RootState, CartState>(state => state.cartReducer).goods;

  const onCartToggle = React.useCallback(() => {
    dispatchAsideCart({
      type: isGoodsCartVisible ? "ASIDE_CART_HIDE" : "ASIDE_CART_VISIBLE",
      store: !isGoodsCartVisible
    });
  }, [isGoodsCartVisible]);

  return (
    <CommonButton onClick={onCartToggle} extraClass="cart">
      {cartGoods !== undefined && <p className="cart__cart-goods-count">{cartGoods.length}</p>}
      <ShopBasket size="x32" />
    </CommonButton>
  );
}
