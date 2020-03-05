import { createStore, Action, Store, Reducer } from "redux";

export type AsideCartState = boolean;

export interface AsideCartAction extends Action {
  store: AsideCartState;
  type: "ASIDE_CART_VISIBLE" | "ASIDE_CART_HIDE";
}

const initialAsideCaryState: AsideCartState = false;

export const asideCartReducer: Reducer<AsideCartState, AsideCartAction> = (
  asideCartState: AsideCartState = initialAsideCaryState,
  action: AsideCartAction
) => {
  switch (action.type) {
    case "ASIDE_CART_VISIBLE":
      return true;

    case "ASIDE_CART_HIDE":
      return false;

    default:
      return asideCartState;
  }
};

export const asideCartStore = createStore(asideCartReducer);
