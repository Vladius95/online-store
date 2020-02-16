import { combineReducers, Reducer } from "redux";
import { goodsReducer, GoodsAction, GoodsState, Goods } from "src/store/goods";

export interface State {
  goodsReducer: GoodsAction;
}

export type rootReducers = {
  goodsReducer: Reducer<GoodsState, GoodsAction>;
};

export type RootState = {
  goodsReducer: Goods;
};

export const mergedReducers = combineReducers({ goodsReducer });
