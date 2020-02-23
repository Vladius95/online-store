import { combineReducers, Reducer } from "redux";
import { storeDetailsReducer, StoreDetailsAction, StoreDetailsState } from "src/store/store-details";

export type CommonErrors = "INTERNAL_ERROR" | "REQUEST_ERROR";

export interface State {
  goodsReducer: StoreDetailsAction;
}

export type rootReducers = {
  goodsReducer: Reducer<StoreDetailsState, StoreDetailsAction>;
};

export type RootState = {
  storeDetailsReducer: StoreDetailsState;
};

export const mergedReducers = combineReducers({ storeDetailsReducer });
