import "./StorePage.scss";

import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/root";
import { StoreDetailsAction, StoreDetailsState, StoreDetails } from "src/store/store-details";
import { useResource } from "src/hooks/useResource";
import { StoreGrid } from "./StoreGrid/StoreGrid";

export interface StorePageProps {}

export function StorePage({}: StorePageProps) {
  const [isLoading, isError] = useResource<StoreDetailsAction, StoreDetails>("data/d_goods.json", res => ({
    type: "GET_STORE_SUCCESS",
    store: { storeDetails: res, isLoading: false }
  }));
  let store = useSelector<RootState, StoreDetailsState>((state: RootState) => state.storeDetailsReducer);

  if (store.isLoading) return null;

  return (
    <article className="store-page">
      <h3 className="store-page__title">The Collection</h3>
      <StoreGrid goods={store.storeDetails.goods} />
    </article>
  );
}
