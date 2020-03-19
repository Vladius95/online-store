import "./GoodsCart.scss";

import * as React from "react";
import { GoodsAsideCart } from "./GoodsAsideCart/GoodsAsideCart";
import { IntoPortal } from "src/page/components/IntoPortal/IntoPortal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/store/root";
import { AsideCartState, AsideCartAction } from "src/store/aside-cart";
import { Dispatch } from "redux";
import cn from "classnames";

export function GoodsCart() {
  const dispatchAsideCart = useDispatch<Dispatch<AsideCartAction>>();

  const isGoodsCartVisible = useSelector<RootState, AsideCartState>((state: RootState) => state.asideCartReducer);

  const onLayoutClick = React.useCallback(() => {
    dispatchAsideCart({
      type: "ASIDE_CART_HIDE",
      store: false
    });
  }, []);

  return (
    <IntoPortal>
      <div className="goods-cart">
        {isGoodsCartVisible && <div className="goods-cart__layout" onClick={onLayoutClick}></div>}
        <GoodsAsideCart
          extraClass={cn("goods-cart__aside-cart", { "goods-cart__aside-cart--visible": isGoodsCartVisible })}
        />
      </div>
    </IntoPortal>
  );
}
