import { combineReducers, Reducer } from "redux";
import { storeDetailsReducer, StoreDetailsAction, StoreDetailsState } from "src/store/store-details";
import { GoodsAction, GoodsState, goodsReducer } from "./goods";

// export interface State {
//   storeDetailsReducer: StoreDetailsAction;
// goodsReducer: GoodsAction;
// }

export type rootReducers = {
  storeReducer: Reducer<StoreDetailsState, StoreDetailsAction>;
  goodsReducer: Reducer<GoodsState, GoodsAction>;
};

export type RootState = {
  storeDetailsReducer: StoreDetailsState;
  goodsReducer: GoodsState;
};

export const mergedReducers = combineReducers({ storeDetailsReducer, goodsReducer });
