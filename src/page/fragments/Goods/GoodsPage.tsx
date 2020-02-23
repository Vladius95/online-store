import * as React from "react";
import { RouteComponentProps } from "react-router";
import { useResource } from "src/hooks/useResource";
import { useSelector } from "react-redux";
import { RootState } from "src/store/root";
import { GoodsAction, Goods, GoodsState } from "src/store/goods";
import { BreadCrumbs, BreadCrumb } from "src/page/components/BreadCrumbs/BreadCrumbs";
import { GoodsControls } from "./GoodsControls/GoodsControls";

const breadCrumbs: BreadCrumb[] = [
  {
    name: "Home",
    link: "/home"
  },
  {
    name: "Store",
    link: "/store"
  }
];

export function GoodsPage(props: RouteComponentProps) {
  const goodsID = Number(props.match.params["id"]);
  const [isLoading, isError] = useResource<GoodsAction, Goods[]>("data/d_goods.json", res => ({
    type: "GET_GOODS_SUCCESS",
    goods: { goods: res.find(g => g.id === goodsID), isLoading: false }
  }));
  let store = useSelector<RootState, GoodsState>((state: RootState) => state.goodsReducer);

  if (store.isLoading || !store.goods) return null;

  console.log(store.goods);

  return (
    <section className="goods-page">
      <header className="goods-page__header">
        <BreadCrumbs breadCrumbs={breadCrumbs} current={store.goods.name} />
        <GoodsControls
          prevControl={{ onClick: () => console.log("prev"), disabled: false }}
          nextControl={{ onClick: () => console.log("next"), disabled: true }}
        />
      </header>
    </section>
  );
}
