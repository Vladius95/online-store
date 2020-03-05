import "./ShopBasket.scss";

import * as React from "react";
import { Icon, IconProps } from "../Icon/Icon";

const shopBasket = require("./shop-basket.svg").default;

export interface ShopBasketProps extends Omit<IconProps, "extraClass"> {}

export function ShopBasket(props: ShopBasketProps) {
  return <Icon {...props} src={shopBasket} alt="Shop Basket" extraClass="shop-basket" />;
}
