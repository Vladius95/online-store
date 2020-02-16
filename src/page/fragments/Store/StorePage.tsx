import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/root";
import { Goods, GoodsAction } from "src/store/goods";
import { useResource } from "src/hooks/useResource";
import { StoreGrid } from "./StoreGrid/StoreGrid";

export interface StorePageProps {}

export function StorePage({}: StorePageProps) {
  const [isLoading, isError] = useResource<GoodsAction, Goods>("data/d_goods.json", res => ({
    type: "GET_GOODS",
    goods: res
  }));
  let goods = useSelector<RootState, Goods>((state: RootState) => state.goodsReducer);

  return (
    <article className="store-page">
      <h3 className="store-page__title">The Collection</h3>
      <StoreGrid goods={goods} />
    </article>
  );
}
