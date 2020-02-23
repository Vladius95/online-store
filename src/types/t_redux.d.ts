import { Provider, connect, DispatchProp } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Action } from "redux";

export type RouteComponent<A extends Action, P> = DispatchProp<A> & RouteComponentProps & P;

export type CommonErrors = "INTERNAL_ERROR" | "REQUEST_ERROR";
