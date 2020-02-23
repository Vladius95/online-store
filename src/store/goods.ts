import { Action, Reducer, createStore } from "redux";
import { CommonErrors } from "src/types/t_redux";

export type GoodsSize = "XS" | "S" | "M" | "L";

export interface Goods {
  id: number;
  cost: number;
  size: GoodsSize[];
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

export const goodsReducer: Reducer<GoodsState, GoodsAction> = (goods = initialGoodsState, action: GoodsAction) => {
  switch (action.type) {
    case "GET_GOODS_SUCCESS":
      return action.goods;

    default:
      return goods;
  }
};

export const goodsStore = createStore(goodsReducer);
