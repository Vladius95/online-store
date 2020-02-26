import "./GoodsPage.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";
import { useResource } from "src/hooks/useResource";
import { useSelector } from "react-redux";
import { RootState } from "src/store/root";
import { GoodsAction, Goods, GoodsState } from "src/store/goods";
import { BreadCrumbs, BreadCrumb } from "src/page/components/BreadCrumbs/BreadCrumbs";
import { GoodsControls } from "./GoodsControls/GoodsControls";
import { GoodsOrderForm } from "./GoodsOrderForm/GoodsOrderForm";
import { imageFullPath } from "src/utils/resources";

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
        <BreadCrumbs
          breadCrumbs={[
            ...breadCrumbs,
            {
              name: store.goods.name,
              link: "",
              current: true
            }
          ]}
        />
        <GoodsControls
          prevControl={{ onClick: () => console.log("prev"), disabled: false }}
          nextControl={{ onClick: () => console.log("next"), disabled: true }}
        />
      </header>
      <div className="goods-page__goods-wrapper">
        <div className="goods-page__left-part">
          <img
            src={imageFullPath(store.goods.imgs[0])}
            width={450}
            height={450}
            alt="Goods"
            className="goods-page__image"
          />
          <p className="goods-page__goods-description">{store.goods.description}</p>
        </div>

        <div className="goods-page__right-part">
          <GoodsOrderForm goods={store.goods} />
        </div>
      </div>
    </section>
  );
}
