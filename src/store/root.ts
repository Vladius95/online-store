import { combineReducers, Reducer } from "redux";
import { storeDetailsReducer, StoreDetailsAction, StoreDetailsState } from "src/store/store-details";
import { GoodsAction, GoodsState, goodsReducer } from "./goods";
import { AsideCartState, AsideCartAction, asideCartReducer } from "./aside-cart";

// export interface State {
//   storeDetailsReducer: StoreDetailsAction;
// goodsReducer: GoodsAction;
// }

export type rootReducers = {
  storeReducer: Reducer<StoreDetailsState, StoreDetailsAction>;
  goodsReducer: Reducer<GoodsState, GoodsAction>;
  asideCartReducer: Reducer<AsideCartState, AsideCartAction>;
};

export type RootState = {
  storeDetailsReducer: StoreDetailsState;
  goodsReducer: GoodsState;
  asideCartReducer: AsideCartState;
};

export const mergedReducers = combineReducers({ storeDetailsReducer, goodsReducer, asideCartReducer });
