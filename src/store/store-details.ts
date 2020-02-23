import { createStore, Action, Store, Reducer } from "redux";
import { Goods } from "./goods";
import { CommonErrors } from "src/types/t_redux";

export type StoreDetails = {
  goods: Goods[];
  count: number;
};

export type StoreDetailsState = {
  isLoading: boolean;
  error?: CommonErrors;
  storeDetails?: StoreDetails;
};

export interface StoreDetailsAction extends Action {
  store: StoreDetailsState;
  type: "GET_STORE_SUCCESS" | "GET_STORE_FAILED";
}

const initialStoreState: StoreDetailsState = {
  isLoading: true
};

export const storeDetailsReducer: Reducer<StoreDetailsState, StoreDetailsAction> = (
  storeDetails: StoreDetailsState = initialStoreState,
  action: StoreDetailsAction
) => {
  switch (action.type) {
    case "GET_STORE_SUCCESS":
      return action.store;

    default:
      return storeDetails;
  }
};

export const storeDetailsStore = createStore(storeDetailsReducer);
