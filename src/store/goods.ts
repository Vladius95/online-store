import { Action, Reducer, createStore } from "redux";
import { CommonErrors } from "./root";

export interface Goods {
  id: number;
  cost: number;
  description: string;
  info: string;
  imgs: string[];
  isBestSeller: boolean;
  name: string;
  type: "shoes" | "accessories" | "tops";
}

export type GoodsState = {
  isLoading: boolean;
  error?: CommonErrors;
  goods?: Goods;
};

export interface GoodsAction extends Action {
  goods: GoodsState;
  type: "GET_GOODS_SUCCESS" | "GET_GOODS_FAILED";
}

const initialGoodsState: GoodsState = {
  isLoading: true
};

export const storeReducer: Reducer<GoodsState, GoodsAction> = (goods = initialGoodsState, action: GoodsAction) => {
  switch (action.type) {
    case "GET_GOODS_SUCCESS":
      return action.goods;

    default:
      return goods;
  }
};

export const storeStore = createStore(storeReducer);
