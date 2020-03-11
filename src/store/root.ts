import { combineReducers, Reducer } from "redux";
import { storeDetailsReducer, StoreDetailsAction, StoreDetailsState } from "src/store/store-details";
import { GoodsAction, GoodsState, goodsReducer } from "./goods";
import { AsideCartState, AsideCartAction, asideCartReducer } from "./aside-cart";
import { CartState, CartAction, cartReducer } from "./cart";

// export interface State {
//   storeDetailsReducer: StoreDetailsAction;
// goodsReducer: GoodsAction;
// }

export type rootReducers = {
  storeReducer: Reducer<StoreDetailsState, StoreDetailsAction>;
  goodsReducer: Reducer<GoodsState, GoodsAction>;
  asideCartReducer: Reducer<AsideCartState, AsideCartAction>;
  cartReducer: Reducer<CartState, CartAction>;
};

export type RootState = {
  storeDetailsReducer: StoreDetailsState;
  goodsReducer: GoodsState;
  asideCartReducer: AsideCartState;
  cartReducer: CartState;
};

export const mergedReducers = combineReducers({ storeDetailsReducer, goodsReducer, asideCartReducer, cartReducer });
