import { createStore, Action, Store, Reducer } from "redux";

export type GoodsItem = {
  id: number;
  cost: number;
  img: string;
  isBestSeller: boolean;
  name: string;
  type: "shoes" | "accessories" | "tops";
};

export type Goods = GoodsItem[];

export type GoodsState = Goods;

export interface GoodsAction extends Action {
  goods: Goods;
  type: "GET_GOODS";
}

export const goodsReducer: Reducer<GoodsState, GoodsAction> = (goods: GoodsState = [], action: GoodsAction) => {
  switch (action.type) {
    case "GET_GOODS":
      return action.goods;

    default:
      return goods;
  }
};

export const goodsStore = createStore(goodsReducer);
