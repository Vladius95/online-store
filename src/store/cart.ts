import { Action, Reducer, createStore } from "redux";
import { Goods } from "./goods";
import pullAllBy from "lodash/pullAllBy";

export type CartItem = {
  goods: Goods;
  quantity: number;
};

export type CartState = {
  goods?: CartItem[];
  isLoading: boolean;
};

export type CartActionType = "GET_CART_GOODS" | "ADD_TO_CART" | "REMOVE_FROM_CART";

export interface CartAction extends Action {
  cartState: CartState;
  type: CartActionType;
}

const initialCartState: CartState = {
  isLoading: true
};

export const cartReducer: Reducer<CartState, CartAction> = (cartState = initialCartState, action: CartAction) => {
  switch (action.type) {
    case "GET_CART_GOODS":
      return { goods: action.cartState.goods, isLoading: false };

    case "ADD_TO_CART":
      return { goods: action.cartState.goods, isLoading: false };

    case "REMOVE_FROM_CART":
      return { goods: pullAllBy(cartState.goods, action.cartState.goods, "id"), isLoading: false };

    default:
      return cartState;
  }
};

export const cartStore = createStore(cartReducer);
